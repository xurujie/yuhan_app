<template>
  <div class="hotItem">
    <div class="left">
      <img src="" alt="" class="label">
      <img :src="pro.grouppictures" alt="" class="pro">
    </div>
    <div class="right">
      <div class="title fz12 fw-600 mb-6">{{pro.merchandise}}</div>
      <div class="des fz9 c-ad mb-20">{{pro.suitableobject}}</div>
      <div class="price fz9 c-ad mb-10"><span class="c-ff fz18 mr-10">¥{{pro.price}}</span><span class="line-th">¥{{pro.originalprice}}</span></div>
      <div class="total c-ff fz7">全网累计销量：888888件</div>
      <img src="../assets/icon/shopCar.png" alt="" class="shopCar">
    </div>
  </div>
</template>

<script>
export default {
  props:{
    pro:{
      type:Object
    }
  }
}
</script>


<style lang="less">
  .hotItem {
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 24px;
    .left {
      width: 120px;
      padding: 2px 16px 2px 18px;
      border: 1px solid #ADADAD;
      margin-right: 10px;
      position: relative;
      .label{
        width: 20px;
        height: 23px;
        position: absolute;
        top: 0;
        left: 0;
      }
      .pro {
        width: 87px;
        height: 109px;
      }
    }
    .right {
      .shopCar {
        position: absolute;
        right: 12px;
        bottom: 15px;
        width: 19px;
        height: 19px;
      }
    }
  }
</style>