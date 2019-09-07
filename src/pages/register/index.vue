<template>
  <div class=" register">
    <img src="../../assets/img/logo-.png"  class="login-logo">
    <div class="main">
      <div class=" line-b l-item">
        <span class="fz13 c-64">手机号</span><input type="text" placeholder="手机号" v-model="tel">
      </div>
      <div class=" line-b l-item code">
        <span class="fz13 c-64">验证码</span><input type="number" placeholder="请输入验证码" v-model="code"  @change="checkCode"> <div class="bg-fb c-21 text-c" @click="getCode">获取验证码 </div>
      </div>
      <div class=" line-b l-item">
        <span class="fz13 c-64">密码</span><input type="password" placeholder="请输入6到15位密码" v-model="pwd">
      </div>
      <div class=" line-b l-item">
        <span class="fz13 c-64">确认密码 </span><input type="password" placeholder="请再次输入密码" v-model="cpwd" @change="vilidatePwd">
      </div>
       <div class="login-btn bg-fb c-21 text-c" @click="register">注册</div>
    </div>
    <div class="r-text fz13 c-64">您已有账号？可以<span @click="goLogin">立即登录</span></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tel:'',
      code:'',
      pwd:'',
      cpwd:'',
      canSub:true,
    }
  },
  methods: {
    goLogin() {
      wx.navigateTo({url:'../login/main'})
    },
    async register() {
      if(this.canSub){
       let res = await this.$api.register({passWord:this.pwd})
       if(res.data.status==1) {
         this.goLogin()
       }
      }
    },
    async getCode() {
      let res = await this.$api.getCode({'tel':this.tel})
    },
    async checkCode() {
      if(!this.code) {
        this.canSub = false
        wx.showToast({title:'请输入验证码'})
        return
      }else {
        this.canSub= true
      }
      let res = await this.$api.checkCode({captcha:this.code})
      if(res.data.status==0) {
        this.canSub = false
        wx.showToast({title:'验证码输入错误'})
      }else {
        this.canSub = true
      }
    },
    vilidatePwd() {
      if(this.pwd!=this.cpwd) {
        this.canSub = false
        wx.showToast({title:'密码输入不一致'})
      }else {
        this.canSub = true
      }
    }
  },
}
</script>

<style lang="less">
page {
  background-color: #fff;
}
  .register {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 80px;
    .code {
      display: flex;
      div {
        width: 70px;
        height: 20px;
        line-height: 20px;
        font-size:11px;
        border-radius:5px;
      }
    }
    .login-btn {
      margin-top: 55px;
    }
    .r-text {
      margin-top: 80px;
      span {
        color: #0C64E0;
      }
    }
  }
</style>