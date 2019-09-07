<template>
  <div class="activityItem ">
    <div class="imgbox line-b">
      <img src="../assets/img/proImg.png" alt="" class="proImg">
    </div>
    <div class="content">
      <div class="title c-21 fz9 "> 宠儿香 康源益生菌5g*24 猫犬通用 </div>
      <div class="footer" v-if="type=='price'">
        <img src="../assets/icon/vip-small.png" class="vip">
        <div class="c-ff fz12">¥5.5</div>
        <div class="c-666 fz8">¥15.5</div>
        <img src="../assets/icon/shopCar.png" class="shopCar">
      </div>
      <div class="score" v-if="type== 'score'">
        <div class="c-666 fz9">300积分+15.9</div>
        <div class="footer">
          <img src="../assets/icon/vip-small.png" class="vip">
          <div class="c-ef fz9">230积分+12.9</div>
          <img src="../assets/icon/shopCar.png" class="shopCar">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pro:{
      type:Object
    },
    type: {
      type:{
        type:String,
        default: 'price'
      }
    }
  }
}
</script>

<style lang="less">
  .activityItem {
    width: 113px;
    background-color: #fff;
      .imgbox {
        padding: 0 15px;
        .proImg {
          width: 84px;
          height: 123px;
        }
      }
    .content {
      padding: 5px;
      .title {
        line-height: 11px;
        height: 20px;
        margin-bottom: 5px;
      }
      .footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        .vip {
          width: 18px;
          height: 12px;
        }
        .shopCar {
          width: 19px;
          height: 19px;
        }
      }
    }
  }
</style>