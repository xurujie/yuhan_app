<template>
  <div class="my">
     <div class="header">
       
      <img src="../../assets/img/my-bg.jpg" alt="" class="my-bg"> 
      <div class="header-content">
        <div class="top">
          <div class="headImg ">
            <img :src="user.avatarUrl" class="avatar">
            <img src="../../assets/icon/icon-vip.png" alt="" class="tag">
          </div>
          <div class="c-fff fz9">
            <p class="fz14 mb-6">昵称：<span>{{user.nickName}}</span></p>
            <p class="vipNumber">会员编号：<span></span></p>
            <p>淘宝ID：<span></span></p>
          </div>
        </div>
        <div class="m-nav">
            <div class="m-nav-item c-fff fz10"><p class="fz15">0</p><span>余额</span></div>
            <div class="m-nav-item c-fff fz10"><p class="fz15">0</p><span>优惠券</span></div>
            <div class="m-nav-item c-fff fz10"><p class="fz15">0</p><span>积分</span></div>
            <div class="m-nav-item c-fff fz10"><p class="fz15">0</p><span>抵用金额</span></div>
            <div class="m-nav-item c-fff fz10"><p class="fz15">0</p><span>收藏夹</span></div>
        </div>
        <div class="m-vip">
          <img src="../../assets/img/vip-dark.png" alt="">
          <div class="btn"></div>
        </div>
      </div>
     </div>
     <div class="my-main bg-f">
       <div class="my-nav-item" @click="goDetail('pay')"><img src="../../assets/icon/c1.png" ><p class="c-2a fz13">待付款</p></div>
       <div class="my-nav-item" @click="goDetail('receive')"><img src="../../assets/icon/c2.png" ><p class="c-2a fz13">待收货</p></div>
       <div class="my-nav-item" @click="goDetail('commen')"><img src="../../assets/icon/c3.png" ><p class="c-2a fz13">待评价</p></div>
       <div class="my-nav-item" @click="goDetail('refund')"><img src="../../assets/icon/c4.png" ><p class="c-2a fz13">退款/售后</p></div>
       <div class="my-nav-item" @click="goDetail('info')"><img src="../../assets/icon/c5.png" ><p class="c-2a fz13">我的资料</p></div>
       <div class="my-nav-item" @click="goDetail('service')"><img src="../../assets/icon/c6.png" ><p class="c-2a fz13">客服</p></div>
       <div class="my-nav-item" @click="goDetail('adress')"><img src="../../assets/icon/c7.png" ><p class="c-2a fz13">地址管理</p></div>
       <div class="my-nav-item" @click="goDetail('vip')"><img src="../../assets/icon/c8.png" ><p class="c-2a fz13">我的会员卡</p></div>
     </div>
     <div class="my-footer">
       <img src="../../assets/img/new.png" alt="">
     </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navlist:[],
      user:{}
    }
  },
  onShow() {
    //  wx.getUserInfo({
    //   success: res => {
    //       console.log(res,999)
    //     }
    //   })
  },
  onShow() {
    if(!this.$store.state.isLogin) {
      this.checkLogin()
    }else {
      this.user = this.$store.state.userInfo
      console.log(this.user)

    }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
     let res = await this.$api.myData()
     console.log(res,88)
     if(res.msg="Success") {

     }
    },
    goDetail(data) {
      switch(data) {
        case 'pay':
          wx.navigateTo({url:'../order/main?type=pay'})
          break
        case 'receive':
          wx.navigateTo({url:'../order/main?type='})
          break
        case 'commen':
          wx.navigateTo({url:'../order/main?type='})
          break
        case 'refund':
          wx.navigateTo({url:'../order/main?type='})         
          break
        case 'info':
          wx.navigateTo({url:'../order/main?type='})
          break
        case 'service':
          wx.navigateTo({url:'../order/main?type='})
          break
        case 'adress':
          wx.navigateTo({url:'../order/main?type='})
          break
        case 'vip':
          wx.navigateTo({url:'../order/main?type='})
          break

      }
     
    },
    checkLogin() {
      wx.getSetting({
        success(res) {
          if(!res.authSetting['scope.userInfo']) {
            wx.navigateTo({url:'../author/main'})
          }
        }
      })
    }
  }

}
</script>

<style lang="less">
page {
  background-color: #fff;
}
  .my {
    .header {
      position: relative;
      // height: 185px;
      background-color: green;
      .my-bg {
        width: 100%;
        height: 230px;
      }
      .header-content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 230px;
        padding:0 20px;
        padding-top: 80px;
        .top {
          display: flex;
          margin-bottom: 20px;
          .headImg {
            position: relative;
            .avatar {
              width: 50px;
              height: 50px;
              border-radius: 50%;
              margin-right: 22px;
            }
            .tag {
              width: 19px;
              height: 22px;
              position: absolute;
              right: 22px;
              bottom: 0;
              z-index: 10;
            }
          }
          .vipNumber {
            margin-bottom: 3px;
          }
        }
        .m-nav {
          display: flex;
          .m-nav-item {
            display: flex;
            flex: 1;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            p {
              margin-bottom: 9px;
            }
          }
        }
        .m-vip {
          position: absolute;
          bottom: 0;
          left: 0;
          img {
            height: 35px;
            width: 337px;
            margin: 0 20px;
          }
        }
      }
    }
    .my-main {
      padding: 38px 0px 15px 0;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      .my-nav-item {
        display: flex;
        flex: 0 0 20%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 25px;
        img {
          width: 25px;
          height: 25px;
          margin-bottom: 16px;
        }
        p {

        }
      }
    }
    .my-footer {
      padding: 0 10px;
      img {
        height: 133px;
        width: 355px;
      }
    }
  }
</style>