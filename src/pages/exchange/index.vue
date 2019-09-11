<template>
  <div class=" exchange">
    <div class="goods-title">精品换购</div>
    <div class="goods-main">
      <div class="good-item bg-f" v-for="(item, index) in list" :key="index">
        <div class="good-img-box line-b">
          <img src="" class="good-img">
          <div class="good-tag">限{{item.Integral.sum}}个</div>
        </div>
        <div class="good-title c-21 fz9">{{item.merchandiseShow.merchandise}}</div>
        <div class="good-info fz9">
           <p class="c-666">{{item.Integral.need_integral}}积分+{{item.Integral.need_price}}</p> 
           <div class="df vip">
             <img src="../../assets/icon/vip-small.png" class="tag-vip">
             <p class="c-ef">{{item.Integral.vipneed_integral}}积分+{{item.Integral.vipneed_price}}</p>
           </div>
        </div>
        <img src="" class="shop-car">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list:[],
      pageSize:10,
      pageNumber:1
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    goRegister() {
      wx.navigateTo({url:'../register/main'})
    },
    async init() {
      let res = await this.$api.exchange({pageSize:this.pageSize,pageNumber:this.pageNumber})
      this.list = res.data.integral
    }
   
  },
}
</script>

<style lang="less">
page {
  background-color: rgb(254, 249, 242);
}
.exchange {
  padding: 13px 10px;
  .goods-title {
    border-left:6px solid #FBAD52;
    height: 28px;
    line-height: 28px;
    padding-left:6px;
    margin-bottom: 15px;
  }
  .goods-main {
    display: flex;
    flex-wrap: wrap;
    .good-item {
      width: 113px;
      height: 183px;
      margin-right: 10px;
      margin-bottom: 26px;
      position: relative;
      &:nth-child(3n) {
        margin-right: 0;
      }
      .good-img-box {
        position: relative;
        .good-img {
          width: 84px;
          height: 123px;
        }
        .good-tag {
          position: absolute;
          top: 7px;
          left: 0;
          width: 57px;
          height: 20px;
          line-height: 20px;         
          text-align: center;
          background-color: #FF0000;
          color: #fff;
          border-radius: 0 10px 10px 0;
          font-size: 10px;
        }
      }
      .good-title {
        padding: 5px;
        margin-bottom: 5px;
      }
      .good-info {
        padding:0 5px;
        align-items: center;
        p {
          margin-bottom: 5px;
        }
        .vip {
          .tag-vip {
            width: 18px;
            height: 12px;
            margin-right: 3px;
          }
        }
      }
      .shop-car {
        width: 19px;
        height: 19px;
        position: absolute;
        right: 5px;
        bottom: 5px;
      }
    }
  }
}
  
</style>