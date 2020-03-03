import Vue from 'vue'
// import 'amfe-flexible'
import Storage from 'vue-ls'
import App from './App.vue'
import router from './routers'
import store from './store'
import { projectConfig } from './config'
import { VueAxios } from '@/utils/request'
import vueBus from './plugins/vueBus'
import installVueVant from './plugins/installVueVant'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import 'css-comm-utils'
import './styles/index.scss'
Vue.config.productionTip = false
Vue.use(Storage, projectConfig.setting.storageOptions)
Vue.use(VueAxios, router)
Vue.use(vueBus)
Vue.use(installVueVant)
import './routers/permission' // permission control

Vue.config.errorHandler = function(err, vm, info) {
  // handle error
  // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
  // 只在 2.2.0+ 可用
  console.log(err)
}

new Vue({
  router,
  store,
  mounted() {
    const setting = projectConfig.setting
    // store.commit('TOGGLE_WEAK', Vue.ls.get(DEFAULT_COLOR_WEAK, setting.colorWeak))
    // store.commit('TOGGLE_COLOR', Vue.ls.get(DEFAULT_COLOR, setting.primaryColor))
    store.commit('SET_TOKEN', Vue.ls.get(ACCESS_TOKEN))
    this.setScale()
    window.addEventListener('resize', this.setScale)
  },
  methods: {
    setScale() {
      let _w = window.innerWidth
      if (_w > 800) {
        document.getElementById('app').style.transform = `scale(${375 / _w})`
      } else {
        document.getElementById('app').style.transform = ``
      }
    }
  },
  render: h => h(App)
}).$mount('#app')
