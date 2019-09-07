<template>
  <div class=" login">
    <img src="../../assets/img/logo-.png"  class="login-logo">
    <div class="main">
      <div class="phone line-b l-item">
        <span class="fz13 c-64">手机号</span><input type="text" placeholder="手机号" v-model="tel">
      </div>
      <div class="pwd line-b l-item">
        <span class="fz13 c-64">密码</span><input type="password" placeholder="请输入6到15位密码" v-model="password">
      </div>
       <div class="text-r c-69 forget fz13">忘记密码</div>
       <div class="login-btn bg-fb c-21 text-c" @click="login">登录</div>
    </div>
    <div class="register fz13 c-64">您还没有账号？可以<span @click="goRegister">立即注册</span></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tel:'',
      password:''
    }
  },
  methods: {
    goRegister() {
      wx.navigateTo({url:'../register/main'})
    },
    async login() {
      console.log('11111')
      let res = await this.$api.login({tel:this.tel,password:this.password})
      console.log('22222')
      console.log(res,111)
      // wx.request({
      //   url:'http://127.0.0.1:3001/v1/login',
      //   method:'post',
      //   data:{
      //     tel:this.tel,
      //     password:this.password
      //   }
      // })
    }
  },
}
</script>

<style lang="less">
page {
  background-color: #fff;
}
  .login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 120px;
    
    
   
    .register {
      margin-top: 140px;
      span {
        color: #0C64E0;
      }
    }
  }
</style>