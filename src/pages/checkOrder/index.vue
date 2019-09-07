<template>
  <div class="checkOrder">
    <div class=" cell-item fz13  mb-3">
      <div class="cell-text">收货人</div>
        <div class="arrow-right pr"></div>
    </div>

    <div class="order-item bg-f ">
      <div class="title c-64 fz13 line-b">
          煜宠商城品牌直营：
      </div>
      <div class="content ">
        <img src="../../assets/img/slider-item.png" class="pro-img">
        <div class="c-64 fz13 pro-right">
          <h5 class="mb-10">【宠儿香】 康源益生菌5g*25 猫犬通用</h5>
          <p class="fz13 pro-sie mb-10"><span>规格：5g*25</span> <span>猫犬通用</span></p>
          <div class="c-ef mb-10"><span class="fz9">¥</span><span class="fz20 pro-price">150.00</span> <span class="fz15 c-64">×50</span></div>
          <img src="../../assets/img/detail-ser.png" class="pro-label mb-10">
          <!-- <div class="fz13 text-r">已发货</div> -->
        </div>
      </div>
    </div>
    <div class="total line-b bg-f text-r mb-10">
      <span class="fz13 c-2a">共50件商品 合计：</span>
      <span class="fz20 c-ef">¥750.00</span>
    </div>
    <div class=" cell-item fz13 mb-3">
      <div class="cell-text">运费</div>
      <div class="cell-right">
        <span class="fz13 c-64">暂无优惠券可用</span>
        <div class="arrow-right pr"></div>
      </div>
    </div>
    <div class=" cell-item fz13 mb-3">
      <div class="cell-text">
        <span>留言</span>
        <span class="leaveMsg">点击给商家留言</span>
      </div>
    </div>
    <div class=" cell-item fz13 mb-10">
      <div class="cell-text">配送方式</div>
      <div class="cell-right">
        <span class="fz13 c-64">普通快递<span class="fz12 c-ef red-price">¥8.00</span></span>
        <div class="arrow-right pr"></div>
      </div>
    </div>
    <div class=" cell-item fz13 mb-3">
      <div class="cell-text">
        <span>余额抵扣(默认使用)</span>
        <span class="remaining">已抵扣0元，当前余额0元</span>
      </div>
        <switch checked @change="useMoney"/>
    </div>
    <div class=" cell-item fz13 mb-3">
      <div class="cell-text">
        <span>积分抵扣</span>
        <span class="useScore">每100积分抵扣1元，当前1积分</span>
      </div>
        <switch  @change="useMoney"/>
    </div>
    <div class="submitOrder df-b bg-f">
      <div class="fz13 c-64">待支付 <span class="c-ef fz15">¥750.00</span></div>
      <div class="btn fz15">提交订单</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isUseMoney:true,
      isUseScore: false
    }
  },
  methods: {
    useMoney() {
      this.isUseMoney = !this.isUseMoney
    }
  },
}
</script>

<style lang="less">
page{

  background-color: #f5f5f5;
}
  .checkOrder {
    .cell-right {
      width: 120px;
    }
    .total {
      padding: 10px 23px;
    }
    .leaveMsg {
      margin-left: 56px;
    }
    .red-price {
      margin-left: 10px;
    }
    .remaining {
      margin-left: 10px;
    }
    .useScore {
      margin-left: 68px;
    }
    switch {
      zoom: 0.7;
    }
    .submitOrder {
      height: 50px;
      padding: 0 20px 0 10px;
      .btn {
        width: 80px;
        height: 30px;
        line-height: 30px;
        background-color: #FBAD52;
        border-radius: 15px;
        text-align: center;
      }
    }
  }
</style>