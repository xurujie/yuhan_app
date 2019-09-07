<template>
  <div class="waitPay">
    <div class="header bg-fb fz10">
      <p class="">待付款</p>
      <div>请在00小时30分00秒内完成支付,超时订单将自动取消</div>
    </div>
    <div class="adress bg-f">
      <div class="left">
        <img src="" alt="">
        <div >
          <h5 class="fz15">XXX</h5>
          <p class="fz10"> xx省xx市xx区xxxxxx </p>
        </div>
      </div>
      <div class="right fz10 c-2a">17666666666</div>
    </div>
    <div class="order-item mg-10 bg-f">
      <div class="title c-64 fz13 line-b df-b">
          <span>煜宠商城品牌直营：</span>
          <div class="df tel">
            <img src="../../assets/icon/tel.png" alt="">
            <p class="c-fb fz10">联系客服</p>
          </div>
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
    <div class="total  bg-f text-r mb-10 mg-10">
      <span class="fz13 c-2a">共50件商品 合计：</span>
      <span class="fz20 c-ef">¥750.00</span>
    </div>

    <div class="p-order-info mg-10 bg-f">
      <div class="p-order-item fz13 c-2a line-b"><p>订单号：</p><span class="c-64">201805071121305569</span></div>
      <div class="p-order-item fz13 c-2a line-b"><p>下单时间：</p><span class="c-64">2019-08-21 11:01：55</span></div>
      <div class="p-order-item fz13 c-2a line-b"><p>关闭时间：</p><span class="c-64">2019-08-21 11:01：55 副本</span></div>
      <div class="p-order-item fz13 c-2a "><p>买家留言：</p><span class="c-64">无</span></div>
    </div>

    <div class="footer fz15 bg-f">
      <div class="btn c-64">取消订单</div>
      <div class="btn bg-fb">去支付</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    
  },
}
</script>

<style lang="less">
page{
  background-color: #f5f5f5;
}
  .waitPay {
    .header {
      height: 56px;
      padding: 12px 34px;
      p {
        font-weight: 600;
        margin-bottom: 7px;
      }
    }
    .adress {
      display: flex;
      justify-content: space-between;
      padding: 13px 32px 10px 22px;
      height: 52px;
      margin: 8px 0 14px 0;
      .left {
        display: flex;
        align-items: center;
        img {
          width: 14px;
          height: 20px;
          margin-right: 9px;
        }
        h5 {
          color: #2A2A2A;
          margin-bottom: 9px;
        }
        p {
          color: #787878;
        }
      }
    }
    .order-item {
      .title {
        img {
          width: 13px;
          height: 13px;
          margin-right: 4px;
        }
        .tel {
          margin-right: 22px;
          align-items: center;
        }
      }
    }
    .total {
      padding-bottom: 10px;
    }
    .p-order-info {
      border-radius: 5px;
      padding: 0 10px;
      .p-order-item {
        height: 30px;
        line-height: 30px;
        p {
          display: inline-block;
          width: 78px;
        }
      }
    }
    .footer {
      padding: 0 20px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      position: absolute;
      bottom: 0;
      height: 50px;
      width: 100%;
      .btn {
        width: 80px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        margin-left: 11px;
        border: 1px solid #9D9D9D;
        border-radius: 15px;
        &:last-child {
          border:none;
        }
      }
    }
  }
</style>