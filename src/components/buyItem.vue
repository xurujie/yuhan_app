<template>
  <div class="buy-item" @click="handleClick">
    <div class="img-box">
      <img :src="seck.grouppictures" alt="" class="pro-img">
      <img src="../assets/icon/miaosha.png" alt="" class="icon-ms" v-if="showKill">
    </div>
    <div class="buy-item-info">
      <div class="info-title ">{{seck.merchandise}}</div>
      <div class="price">
        <span class="icon-money">¥</span>
        <span class="sale-price fz12">{{seck.price}}</span>
        <span class="olde-price">¥{{seck.originalprice}}</span>
        <img src="../assets/icon/shopCar.png" alt="" class="icon-car">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    seck:{
      type:Object,
    },
    showKill:{
      type:Boolean,
      default:true
    }
  },
  methods: {
    handleClick() {
      this.$emit('itemClick',this.seck.api_id)
    }
  },
}
</script>

<style lang="less">
.buy-item {
  width: 113px;
  padding-bottom: 7px;
  height: auto;
  background-color: #fff;
  margin-right: 8px;
  &:last-child {
    margin-right: 0;
  }
  .img-box {
    padding: 11px 15px 10px 15px;
    position: relative;
    border-bottom: 1px solid #ccc;
    .pro-img {
      width: 84px;
      height: 123px;
    }
    .icon-ms {
      width: 58px;
      height: 19px;
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
  .buy-item-info{
    position: relative;
    font-size: 9px;
    padding: 0 5px;
    .info-title {
      color: #212121;
      font-size: 9px;
      line-height: 13px;
      margin-bottom: 8px;
    }
    .price {
      display: flex;
      justify-content: baseline;
      align-items: baseline;
      .icon-money {
        color: #FF0000;
      }
      .sale-price {
        color: #FF0000;
        margin-right: 9px;
      }
      .olde-price {
        font-size: 9px;
        color: #ADADAD;
        text-decoration: line-through;
      }
      .icon-car {
        width: 19px;
        height: 19px;
        position: absolute;
        right: 6px;
        bottom: 0px;
      }
    }
  }
}
</style>
