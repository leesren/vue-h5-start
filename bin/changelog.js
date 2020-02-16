const conventionalChangelog = require('conventional-changelog')
const join = require('path').join
const fs = require('fs-extra')
const { readFileSync, createWriteStream } = fs

const fileName = 'changelog.generated.md'
const Root = join(__dirname, '../')
const DIST_FILE = join(Root, './' + fileName)
const MAIN_TEMPLATE = join(__dirname, './template/changelog-main.hbs')
const HEADER_TEMPALTE = join(__dirname, './template/changelog-header.hbs')
const COMMIT_TEMPALTE = join(__dirname, './template/changelog-commit.hbs')

const mainTemplate = readFileSync(MAIN_TEMPLATE, 'utf-8')
const headerPartial = readFileSync(HEADER_TEMPALTE, 'utf-8')
const commitPartial = readFileSync(COMMIT_TEMPALTE, 'utf-8')

function formatType(type) {
  const MAP = {
    fix: 'Bug Fixes',
    feat: 'Feature',
    docs: 'Document',
    types: 'Types'
  }

  return MAP[type] || type
}

function transform(item) {
  if (item.type === 'chore' || item.type === 'test') {
    return null
  }

  item.type = formatType(item.type)

  if (item.hash) {
    item.shortHash = item.hash.slice(0, 6)
  }

  if (item.references.length) {
    item.references.forEach(ref => {
      if (ref.issue) {
        item.subject = item.subject.replace(` (#${ref.issue})`, '')
      }
    })
  }
  return item
}

function changelog() {
  console.log('Generating changelog...')
  return new Promise(resolve => {
    conventionalChangelog(
      {
        preset: 'angular'
      },
      null,
      null,
      null,
      {
        mainTemplate,
        headerPartial,
        commitPartial,
        transform
      }
    )
      .pipe(createWriteStream(DIST_FILE))
      .on('close', () => {
        console.log(`Changelog generated at root project dir. name ${fileName}`)
        resolve()
      })
  })
}

changelog()
