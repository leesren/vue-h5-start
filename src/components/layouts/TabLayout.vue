<template>
  <div>
    <router-view />
    <div>
      <van-tabbar route>
        <van-tabbar-item replace to="/dashboard/profit" icon="home-o">
          标签
        </van-tabbar-item>
        <van-tabbar-item replace to="/dashboard/goods" icon="search">
          标签
        </van-tabbar-item>
        <van-tabbar-item replace to="/dashboard/List" icon="search">
          列表
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabLayout'
}
</script>

<style scoped></style>
