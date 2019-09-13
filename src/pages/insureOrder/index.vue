<template>
  <div class="insureOrder">
    <van-cell title="收货人" is-link  ></van-cell>
    <van-cell title=" 煜宠商城品牌直营：" custom-class="shop-name"  ></van-cell>
    <order-item></order-item>
    <van-cell title=" 优惠券" custom-class="shop-name" is-link value="暂无优惠券可用" ></van-cell>
    <van-cell title=" 留言" custom-class="shop-name"  value="点击给商家留言" ></van-cell>
    <van-cell title=" 配送方式" custom-class="shop-name" is-link value="普通快递" ></van-cell>
    <!-- <van-cell title=" 余额抵扣 " custom-class="shop-name" is-link value="暂无优惠券可用" ></van-cell>
    <van-cell title="积分抵扣 " custom-class="shop-name" is-link value="暂无优惠券可用" ></van-cell> -->
    <div class="cell money c-9d fz13 mt-10 mb-3">
      <div class="c-9d"><span class="mr-10">余额抵扣&nbsp;(默认使用)</span><span>已抵扣0元，当前余额0元</span></div>
      <div>
        <switch checked  @change="change()"/>
      </div>
    </div>
    <div class="cell money c-9d fz13 ">
      <div class="c-9d"><span>积分抵扣</span></div>
      <div class="c-9d ">
        <span class="mr-20">每100积分抵扣1元，当前1积分</span>
        <switch  @change="change()"/>
      </div>
    </div>
    <div class="footer">
      <div class="c-64 fz13">待支付<span class="fz15 c-ef">¥750.00</span></div>
      <div class="insure-btn c-000 fz15" @click="submitOrder">提交订单</div>
    </div>
  </div>
</template>

<script>
import orderItem from '@/components/orderItem'
export default {
  data() {
    return {

    }
  },
  methods: {
    change() {
      console.log('change')
    },
    submitOrder() {
      console.log('order')
    }
  },
  components: {
    orderItem
  }
}
</script>

<style lang="less">
page {
  background-color: rgb(248, 248, 248);
}
  .insureOrder {
    .shop-name {
      font-size: 13px;
      color: #9D9D9D;
    }
    .cell {
      background-color: #fff;
      padding: 0 20px ;
      font-size: 15px;
      display: flex;
      justify-content: space-between;
      height: 50px;
      line-height: 50px;
      switch {
        zoom: 0.6;
      }
    }
    .footer {
      position: absolute;
      width: 100%;
      height: 50px;
      line-height: 50px;
      bottom: 0;
      left: 0;
      background-color: #fff;
      justify-content: space-between;
      align-items: center;
      display: flex;
      padding:  0 20px 0 12px;
      .insure-btn {
        width: 80px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        background-color: #FBAD52;
        border-radius: 15px;
      }
    }
  }
</style>