<template>
  <div class="recharge">
   <div class="ad-img">
     <img src="../../assets/img/v9.png" alt="">
   </div>
   <div class="r-title "><span>充值享好礼</span></div>
   <div class="recharge-main">
    <div class="img-list"><img src="../../assets/img/discounts1.png" alt=""></div>
    <div class="img-list"><img src="../../assets/img/discounts2.png" alt=""></div>
    <div class="img-list"><img src="../../assets/img/discounts3.png" alt=""></div>
    <div class="img-list"><img src="../../assets/img/discounts4.png" alt=""></div>
    <div class="img-list last">
      <div class="img-list-left">¥ 300</div>
      <div class="img-list-right bg-f">
        <div>300起充, 100倍数, 多充多送</div>
        <img src="../../assets/icon/del.png" alt="">
        <span>100</span>
        <img src="../../assets/icon/add.png" alt="">
      </div>
    </div>
    <div class="readme ">
      <div class="circle checked "></div>
      <span class="fz12 c-fff">我已阅读并同意《煜宠会员服务协议》</span>
    </div>
    <div class="r-btn bg-fb" @click="goVipInfo">立即支付</div>
   </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      value:true
    }
  },
  methods: {
    goVipInfo() {
      mpvue.navigateTo({url:'../vipInfo/main'})
    }
  },
}
</script>

<style lang="less">
page{
  background-color: #D53B3D;
}
  .recharge {
    .ad-img {
      img {
        width: 100%;
        height: 310px;
      }
    }
    .r-title {
      color: #FFF6BC;
      text-align: center;
      font-size: 15px;
      padding: 15px 0;
      span {
        position: relative;
        &::after {
          content:'///';
          position: absolute;
          left: -25px;
        }
        &::before {
          content: '///';
          position: absolute;
          right: -25px;
        }
      }
    }
    .img-list {
      padding: 0 10px;
      margin-bottom: 10px;
      img {
        height: 80px;
        width: 355px;
      }
      &.last {
        line-height: 80px;
        text-align: center;
        font-size: 12px;
        display: flex;
        
        .img-list-left {
          width: 115px;
          color: #D53B3D;
          background-color: #FFF6BC;
          border-radius: 5px 0 0 5px;
        }
        .img-list-right {
          color: #212121;
          border-radius: 0 5px 5px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1;
          div {
            margin-right: 10px;
          }
          span {
            margin: 0 6px;
          }
          img {
            width: 13px;
            height: 13px;
          }
        }
      }
    }
    .readme {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 20px 0;
      .circle {
        width: 13px;
        height: 13px;
        border-radius: 50%;
        border: 1px solid #fff;
        margin-right: 6px;
        &.checked {
          position: relative;
          &::after {
            content:'✔';
            position: absolute;
            font-size: 8px;
            color: #fff;
            top: 51%;
            left: 50%;
            transform: translate(-50%,-50%);
          }
        }
      }
    }
    .r-btn {
      color: #212121;
      font-size: 15px;
      text-align: center;
      line-height: 50px;
      height: 50px;
    }
  }
</style>