<script>
export default {
  created () {
    let userInfo = wx.getStorageSync('userInfo')
    if(userInfo) {
      this.$store.commit('setUser',userInfo)

    }
    wx.login({
      success (res) {
        if (res.code) {
          //发起网络请求
          console.log(res.code,999)
          wx.request({
            url: 'https://test.com/onLogin',
            data: {
              code: res.code
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  } 
   
}
</script>

<style lang="less">
 @import "assets/style/reset.less";
 @import "assets/style/public.less";

</style>
