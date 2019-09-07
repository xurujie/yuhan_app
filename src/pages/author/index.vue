<template>
  <div class="author">
    <button open-type="getUserInfo" @getuserinfo="getUserInfo">点击授权</button>
  </div>
</template>

<script>
export default {
  methods: {
    getUserInfo(res) {
      if(res.mp.detail.rawData) {
        let userInfo = JSON.parse(res.mp.detail.rawData)
        this.$store.commit('setUser',userInfo)
        wx.setStorageSync("userInfo", userInfo);
        wx.login({
        success (res) {
          console.log(res,'login')
          if (res.code) {
            //发起网络请求
            // wx.request({
            //   url: 'https://test.com/onLogin',
            //   data: {
            //     code: res.code
            //   }
            // })
            wx.switchTab({url:'../my/main'})
          } else {
            console.log('登录失败！' + res.errMsg)
          }
        }
      })
      }
    }
  },
}
</script>


<style lang="less">
  .author {
    width: 100%;
    height: 100%;
    padding: 100px 0;
  }
</style>