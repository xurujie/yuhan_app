<template>
  <div class=" dayly">
    <div class="dayly-header">
      <img src="../../assets/img/my-bg.jpg" class="bg">
      <div class="sign">
        <img src="../../assets/img/bg-daly.png" class="sign-bg">
        <div class="sign-content c-16">
          <div class="sign-title c-333 mb-10">已连续签到<span class="fz16 c-ff">4天</span></div>
          <div class="sign-tip fz10 c-999"> 明日签到可获得 <span class="c-ff"> {{signData.integral}}积分</span></div>
          <div class="days">
            <div class="days-item"><img src="../../assets/icon/btn-check.png" v-if="signData.monday==1"><img v-if="signData.monday==0" src="../../assets/icon/btn-unCheck.png" ><span class="c-999 fz12">周一</span></div>
            <div class="days-item"><img src="../../assets/icon/btn-check.png" v-if="signData.tuesday==1"><img v-if="signData.tuesday==0" src="../../assets/icon/btn-unCheck.png" ><span class="c-999 fz12">周二</span></div>
            <div class="days-item"><img src="../../assets/icon/btn-check.png" v-if="signData.wednesday==1"><img v-if="signData.wednesday==0" src="../../assets/icon/btn-unCheck.png" ><span class="c-999 fz12">周三</span></div>
            <div class="days-item"><img src="../../assets/icon/btn-check.png" v-if="signData.thursday==1"><img v-if="signData.thursday==0" src="../../assets/icon/btn-unCheck.png" ><span class="c-999 fz12">周四</span></div>
            <div class="days-item"><img src="../../assets/icon/btn-check.png" v-if="signData.friday==1"><img v-if="signData.friday==0" src="../../assets/icon/btn-unCheck.png" ><span class="c-999 fz12">周五</span></div>
            <div class="days-item"><img src="../../assets/icon/btn-check.png" v-if="signData.saturday==1"><img v-if="signData.saturday==0" src="../../assets/icon/btn-unCheck.png" ><span class="c-999 fz12">周六</span></div>
            <div class="days-item"><img src="../../assets/icon/btn-check.png" v-if="signData.sunday==1"><img v-if="signData.sunday==0" src="../../assets/icon/btn-unCheck.png" ><span class="c-999 fz12">周日</span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="dayly-main">
      <div class="title">
        <div class="t-left">
          <p class="fz15 fw-600">积分大换购</p>
          <span class="c-ef ">小提示：积分不止能换购还能抵押现金哦</span>
        </div>
        <img src="../../assets/icon/more.png" class="t-right" @click="goExchange">
      </div>
      <div class="goods-box">
        <div class="good-item bg-f">
          <div class="good-img-box">
            <img src="" class="good-img">
            <!-- <div class="good-tag">限2000个</div> -->
          </div>
          <div class="good-title c-21 fz9">宠儿香 康源益生菌5g *24 猫犬通用</div>
          <div class="good-info fz9">
            <p class="c-666">300积分+15.9</p> 
            <div class="df vip">
              <img src="../../assets/icon/vip-small.png" class="tag-vip">
              <p class="c-ef">230积分+12.9</p>
            </div>
          </div>
          <img src="" class="shop-car">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
     signData:{},
     list:[],
     pageNumner:1,
     pageSize:10
    }
  },
  mounted() {
    this.getDaly()
    this.getList()
  },
  methods: {
    goRegister() {
      wx.navigateTo({url:'../register/main'})
    },
    async getDaly() {
      let res = await this.$api.getDaly()
      this.signData = res.data.SignIn
    },
    async getList() {
      let {data} =await this.$api.exchange({pageSize:this.pageSize,pageNumner:this.pageNumner})
      this.list = data
    },
    goExchange() {
      wx.navigateTo({url:'../exchange/main'})
    }
  },
}
</script>

<style lang="less">
page {
  background-color: #fff;
}
.dayly {
  .dayly-header {
    height: 271px;
    margin-bottom: 10px;
    .bg {
      height: 173px;
      width: 375px;
    }
    .sign {
      width: 350px;
      height: 200px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 70px; 
      .sign-bg {
        width: 350px;
        height: 200px;
      }
      .sign-content {
        position: absolute;
        top: 70px;
        left: 12px;
        .sign-title{

        }
        .sign-tip {
          margin-bottom: 14px;
        }
        .days {
          position: absolute;
          top: 63px;
         
          display: flex;
          justify-content: space-between;
          .days-item {
            margin-right: 20px;
            img {
              width: 28px;
              height: 28px;
              margin-bottom: 5px;
            }
          }
        }
      }
    }
  }
  .dayly-main {
    .title {
      border-left: 6px solid #ED9126;
      padding-left:6px;
      margin-left: 4px;
      margin-right: 13px;
      height: 28px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .t-left {
        display: flex;
        align-items: baseline;
        p {
          margin-right: 7px;
        }
        span {
          font-size: 8px;
        }
      }
      .t-right {
        width: 33px;
        height: 13px;
      }
    }
  }
}
  
</style>