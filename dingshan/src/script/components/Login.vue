<template lang="html">

<div class="login-main">
  <div class="yo-header">
    <h2 class="title">登录</h2>
    <span @click="back" class="regret yo-ico"></span>
  </div>
	<div class="login-logo">

	</div>
	<form class="login-form" method="post">
			<input type="text" name="username" v-model="username" placeholder="请输入邮箱/用户名/手机" class="username" required>
			<input type="password" name="pwd" v-model="password" placeholder="请输入密码" class="pwd" required>

      <input type="checkbox" name="" class="check">
			<span class="rem">记住密码</span>
			<span class="for">忘记密码</span>

			<input type="submit" name="" value="登录" class="login1" @click="login">
			<input type="button" name="" value="微信登录" class="login2" >
      <router-link  class="tore" to="/register" >
        <span>免费注册</span>
      </router-link>
	</form>
</div>

</template>

<script>
import Vue from 'vue'
import utilAxios from '../utils/axios'
export default {
  data(){
    return{
      username:"",
      password:""
    }
  },
  methods: {
    back: function () {
      this.$router.go(-1)
    },
    login:function(){
      utilAxios.post({
        url:'/dl/users/register',
        method:'post',
        data: `username=${this.username}&password=${this.password}`,
        callback:function(res){
          console.log(res)
        }
      })
    }
  }
}
</script>
