<template>
  <div class="m10">
    login
    <van-button type="primary" block @click="handleSubmit">登录</van-button>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['Login', 'Logout', 'PhoneLogin']),

    handleSubmit() {
      this.Login({
        username: '',
        password: ''
      })
        .then(res => {
          this.loginSuccess(res)
        })
        .catch(err => {
          that.requestFailed(err)
        })
        .finally(() => {
          this.loginBtn = false
        })
    },
    loginSuccess() {
      this.$router.push({ name: 'dashboard' })
      console.log({
        message: '欢迎',
        description: `欢迎回来`
      })
    }
  }
}
</script>
