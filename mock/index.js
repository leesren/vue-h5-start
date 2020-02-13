import { sys } from './sys'
import { api } from './api'

export default {
  ...sys,
  ...api,
  'GET /api/user': {
    // obj
    id: 1,
    username: 'kenny',
    sex: 6
  }
  // 'GET /mock/sys/permission/getUserPermissionByToken': async (req, res) => {
  //   await delay()
  //   res.status(200).send(getUserPermissionByToken)
  // }
}
