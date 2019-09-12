<template>
  <div class="insureOrder">
    <van-cell title="收货人" is-link  ></van-cell>
    <van-cell title=" 煜宠商城品牌直营：" custom-class="shop-name"  ></van-cell>
    <order-item></order-item>
    <van-cell title=" 优惠券" custom-class="shop-name" is-link value="暂无优惠券可用" ></van-cell>
    <van-cell title=" 留言" custom-class="shop-name"  value="点击给商家留言" ></van-cell>
    <van-cell title=" 配送方式" custom-class="shop-name" is-link value="普通快递" ></van-cell>
    <van-cell title=" 余额抵扣 " custom-class="shop-name" is-link value="暂无优惠券可用" ></van-cell>
    <van-cell title="积分抵扣 " custom-class="shop-name" is-link value="暂无优惠券可用" ></van-cell>
    <div class="footer">
      <div class="c-64 fz13">待支付<span class="fz15 c-ef">¥750.00</span></div>
      <div class="insure-btn c-000 fz15">提交订单</div>
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
    
  },
  components: {
    orderItem
  }
}
</script>

<style lang="less">
  .insureOrder {
    .shop-name {
      font-size: 13px;
      color: #646464;
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