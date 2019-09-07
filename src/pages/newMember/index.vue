<template>
  <div class="activity">
    <div class="header">
      <img src="../../assets/img/activity.png"  class="ac-bg">
      <img src="../../assets/img/new.png"  class="ac-img">
    </div>
    <div class="ac-main">
      <div class="title c-21 fz15">新人特享优惠券</div>
      <div class="ac-item"><img  src="../../assets/img/c-1.png"><div class="btn"></div></div>
      <div class="ac-item last"><img  src="../../assets/img/c-1.png"><div class="btn"></div></div>
      <div class="title c-21 fz15">新人特享大礼包</div>
      <div class="ac-package"><img src="../../assets/img/l-1.png" ></div>
      <div class="ac-package"><img src="../../assets/img/l-1.png" ></div>
    </div>
    <div class="footer bg-fb" @click="joinVip">成为煜宠会员每天享优惠</div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    joinVip() {
      wx.navigateTo({url:''})
    }
  },
}
</script>

<style lang="less">
page {
  background-color: #eee;
}
  .activity {
    .header {
      position: relative;
      .ac-bg {
        width: 375px;
        height: 236px;
      }
      .ac-img {
        width: 355px;
        height: 133px;
        position: absolute;
        left: 10px;
        bottom: 0;
      }
    }
    .ac-main {
      padding: 26px 10px;
      .title {
        border-left: 6px solid #FBAD52;
        height: 28px;
        line-height: 28px;
        padding-left: 6px;
        margin-bottom: 10px;
      }
      .ac-item {
        margin-bottom: 8px;
        position: relative;
        img {
          width: 355px;
          height: 83px;
        }
        .btn {
          position: absolute;
          top: 30px;
          right: 15px;
          width: 80px;
          height: 25px;
        }
        &.last{
          margin-bottom: 30px;
        }
      }
      .ac-package {
        img {
          height: 100px;
          width: 355px;

        }
      }
    }
    .footer {
      height: 50px;
      text-align: center;
      line-height: 50px;
      color: #212121;
    }
  }
</style>