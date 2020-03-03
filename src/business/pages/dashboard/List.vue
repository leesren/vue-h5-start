<template>
  <div class="position-box">
    <!-- <Button class="go-top">返回顶部</Button> -->
    <div>sdafdadfasd</div>
    <van-button-clear plain type="danger" :text="'文字按钮'" />
    <van-button-clear plain color="#7232dd" :text="'文字按钮'" />
    <van-button-clear bgColor="red" plain color="#7232dd" :text="'文字按钮' + ' + 红色背景'" />
  </div>
</template>
<script>
// import {
//   Button,
// } from 'cube-ui'
import { ButtonClear } from 'vant-extends'
export default {
  components: {
    // Button
    [ButtonClear.name]: ButtonClear
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>
