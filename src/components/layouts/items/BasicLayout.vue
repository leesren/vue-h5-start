<template>
  <div class="main-content">
    <div>BasicLayout</div>
    <slot></slot>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'GlobalLayout',
  components: {
  },
  data() {
    return {
      collapsed: false,
      activeMenu: {},
      menus: []
    }
  },
  computed: {
    ...mapState({
      // 主路由
      mainRouters: state => state.permission.addRouters,
      // 后台菜单
      permissionMenuList: state => state.user.permissionList
    })
  },
  created() {
    //--update-begin----author:scott---date:20190320------for:根据后台菜单配置，判断是否路由菜单字段，动态选择是否生成路由（为了支持参数URL菜单）------
    //this.menus = this.mainRouters.find((item) => item.path === '/').children;
    this.menus = this.permissionMenuList
    // 根据后台配置菜单，重新排序加载路由信息
    console.log('----加载菜单逻辑----')
    console.log(this.mainRouters)
    console.log(this.permissionMenuList, 444)
    console.log('----navTheme------' + this.navTheme)
    //--update-end----author:scott---date:20190320------for:根据后台菜单配置，判断是否路由菜单字段，动态选择是否生成路由（为了支持参数URL菜单）------
    this.$emit('toggleCollapsed', this.collapsed)
  }
}
</script>

<style lang="scss">
body {
  &.colorWeak {
    filter: invert(80%);
  }
}

.layout {
  display: flex;
  min-height: 100vh;
  overflow-x: hidden;

  .side {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 260px;
    height: 100vh;
  }

  .main-content {
    flex: 1;
    margin-left: 260px;
  }

  .main-content > div {
    margin: 0 !important;
  }
}
</style>
