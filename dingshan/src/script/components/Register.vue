<template lang="html">
    <div class="register-main">
      <div class="yo-header">
        <h2 class="title">注册</h2>
        <span @click="back" class="regret yo-ico"></span>
      </div>
      <form class=""  method="post" class="register-form">
        <input type="text" name="" placeholder="请输入邮箱/用户名/手机" class="username" v-model="username">
        <input type="password" name="" placeholder="请输入至少六位密码带，字母" class="pwd1" v-model="password1">
        <input type="password" name="" placeholder="请再次输入密码" class="pwd2" v-model='passwoed2'>
        <input type="text" name="" placeholder="请输入邀请人账号" class="friend">
        <input type="checkbox" name="" value="" class="check">
        <span>我已阅读并同意<a href="#">《鼎善注册协议》</a> </span>
        <input type="button" name="" value="注册" class="login1" @click="register">
        <input type="button" name="" value="微信注册" class="login2">
      </form>
    </div>
</template>

<script>
import Vue from 'vue'
import Router from 'vue-router'
import utilAxios from '../utils/axios'
export default {
  data(){
    return{
      username:"",
      password1:"",
      passwoed2:""
    }
  },
  methods: {
    back: function () {
      this.$router.go(-1)
    },
    register:function(){
      let that=this
      utilAxios.post({
        url:'/m/index.php?ac=auth_register',
        method:'post',
        data: `mer_mobile=${that.username}&mer_pwd=${that.password1}&password_confirm=${that.password2}`,
        callback:function(res){
          console.log(res)
        }
      })
    }
  }
}
</script>
