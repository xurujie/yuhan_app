<template>
  <div class="product-item" @click="goDetail">
    <div class="pro-img">
      <img :src="pro.grouppictures" alt="">
    </div>
    <div class="pro-info">
      <div class="pro-title">{{pro.merchandise}}</div>
      <div class="pro-des">{{pro.suitableobject}}</div>
      <div class="pro-price">
        <span class="pro-sale-price"><span class="fz9">¥</span> {{pro.price}}</span>
        <span class="pro-old-price">¥{{pro.originalprice}}</span>
      </div>
      <img src="../assets/icon/shopCar.png" alt="" class="pro-car">
    </div>
  </div>
</template>


<script>
export default {
  props:{
    pro:{
      type:Object
    } 
  },
  data() {
    return {

    }
  },
  methods: {
    goDetail() {
      this.$emit('goDetail',this.pro.merchandise_id)
    }
  },
}
</script>

<style lang="less">
  .product-item {
    display: flex;
    padding: 9px 0px;
    align-items: center;
    position: relative;
    background-color: #fff;

    border-bottom: 1px solid #f5f5f5;
    .pro-img {
      width: 120px;
      height: 115px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .pro-info {
      
      .pro-title {
        font-size:12px;
        color: #212121;
        margin-bottom: 7px;
      }
      .pro-des {
        font-size:9px;
        color: #ADADAD;
        margin-bottom: 21px;
      }
      .pro-price {
        color: #FF0000;
        display: flex;
        justify-content: baseline;
        align-items: baseline;
        .pro-sale-price {
          font-size:18px;
          margin-right: 9px;
        }
        .pro-old-price {
          color: #ADADAD;
          font-size: 9px;
          text-decoration: line-through;
        }
      }
      .pro-car {
        width: 19px;
        height: 19px;
        position: absolute;
        right: 12px;
        bottom: 10px;
      }
    }
  }
</style>