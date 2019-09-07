<script>
export default {
  created () {
    let userInfo = wx.getStorageSync('userInfo')
    if(userInfo) {
      this.$store.commit('setUser',userInfo)
      console.log(userInfo,'storage')

    }
  } 
   
}
</script>

<style lang="less">
 @import "assets/style/reset.less";
 @import "assets/style/public.less";

</style>
