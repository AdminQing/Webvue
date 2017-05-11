<template lang="html">
    <div class="register-main">
      <div class="yo-header">
        <h2 class="title">注册</h2>
        <span @click="back" class="regret yo-ico"></span>
      </div>
      <form class=""  method="post" class="register-form">
        <input type="text" name="" placeholder="请输入邮箱/用户名/手机" class="username">
        <input type="password" name="" placeholder="请输入至少六位密码带，字母" class="pwd1">
        <input type="password" name="" placeholder="请再次输入密码" class="pwd2">
        <input type="text" name="" placeholder="请输入邀请人账号" class="friend">
        <input type="checkbox" name="" value="" class="check">
        <span>我以阅读并同意<a href="#">《鼎善注册协议》</a> </span>
        <input type="submit" name="" value="注册" class="login1">
        <input type="button" name="" value="微信注册" class="login2">
      </form>
    </div>
</template>

<script>
export default {
  methods: {
    back: function () {
      this.$router.go(-1)
    }
  }
}
</script>
