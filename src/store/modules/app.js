import Vue from 'vue'
import { DEFAULT_THEME } from '@/store/mutation-types'
import { projectConfig } from '../../config'
const setting = projectConfig.setting
const app = {
  state: {
    theme: setting.navTheme,
    color: null,
    weak: false
  },
  mutations: {
    TOGGLE_THEME: (state, theme) => {
      // setStore('_DEFAULT_THEME', theme)
      Vue.ls.set(DEFAULT_THEME, theme)
      state.theme = theme
    },
    TOGGLE_COLOR: (state, color) => {
      // Vue.ls.set(DEFAULT_COLOR, color)
      state.color = color
    },
    TOGGLE_WEAK: (state, flag) => {
      // Vue.ls.set(DEFAULT_COLOR_WEAK, flag)
      state.weak = flag
    }
  },
  actions: {
    ToggleTheme({ commit }, theme) {
      commit('TOGGLE_THEME', theme)
    },

    ToggleColor({ commit }, color) {
      commit('TOGGLE_COLOR', color)
    },
    ToggleWeak({ commit }, weakFlag) {
      commit('TOGGLE_WEAK', weakFlag)
    }
  }
}

export default app
