<template>
  <div class="order-detail">
    <!-- <div class="order-item bg-f mb-10">
      <div class="content line-b pr">
        <img src="" class="pro-img">
        <div class="c-64 fz13 pro-right">
          <h5 class="mb-10">【宠儿香】 康源益生菌5g*25 猫犬通用</h5>
          <p class="fz13 pro-sie mb-10"><span>规格：5g*25</span> <span>猫犬通用</span></p>
          <div class="c-ef mb-10"><span class="fz9">¥</span><span class="fz20 pro-price">150.00</span> <span class="fz15 c-64">×50</span></div>
          <div class="fz13 text-c btn-change">退换</div>
        </div>
      </div>
      <div class="footer text-r">
        <span class="c-2a fz13">实付款：</span><span class="c-ef fz20">1530.00</span>
      </div>
    </div> -->
    <order-item :show="false" :orderList="orderList" :showBtn="true"></order-item>
    <div class="order-info bg-f">
      <div class="order-info-item  line-b df">
        <p>收货人</p>
        <span>{{address.recipient}}</span>
      </div>
      <div class="order-info-item  line-b df">
        <p>联系方式</p>
        <span>{{address.tel}}</span>
      </div>
      <div class="order-info-item line-b  df">
        <p>收货地址</p>
        <span>{{address.capital}}省 {{address.city}}市 {{address.district}}区 {{address.indetail}}</span>
      </div>
      <div class="order-info-item line-b  df">
        <p>订单号</p>
        <span>{{orderList[0].orderNumber}}</span>
      </div>
      <div class="order-info-item  line-b df">
        <p>创建时间</p>
        <span>{{}}</span>
      </div>
      <div class="order-info-item line-b df">
        <p>下单时间</p>
        <span>{{}}</span>
      </div>
      <div v-if="orderList[0].status==1">
        <div class="order-info-item line-b df">
          <p>发货时间</p>
          <span>{{express.shipments}}</span>
        </div>
        <div class="order-info-item line-b df">
          <p>发货状态</p>
          <span v-if="orderList[0].status==1">未发货</span>
          <span v-else>已发货</span>
        </div>
        <div class="order-info-item line-b df">
          <p>快递类型</p>
          <span>{{express.express_type}}</span>
        </div>
        <div class="order-info-item df">
          <p>快递单号</p>
          <span>{{express.express_number}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import orderItem from '@/components/orderItem'
export default {
  data() {
    return {
      address:{},
      orderList:[],
      express:{},
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      let res = await this.$api.getOrderDetail({orderNumber:this.$root.$mp.query.orderNumber})
      console.log(res,999)
      this.address = res.data.Profile
      this.orderList = res.data.OrderById
      this.express = res.data.Express
    }
  },
  components:{
    orderItem
  }
}
</script>

<style lang="less">
  page{
    background-color: #F8F8F8;
  }
  .order-detail {
    .order-item {
      margin: 0 10px 10px 10px;
      border-radius: 5px;
      .content {
        padding-bottom: 10px;
        h5 {
          width: 162px;
          line-height: 15px;
        }
        .pro-sie {
          margin-bottom: 33px;
        }
        .btn-change {
          position: absolute;
          right: 0;
          bottom: 10px;
        }
      }
      .footer {
        padding: 10px 10px  0 0;
      }
    }
    .order-info {
      padding: 0 10px;
      border-radius: 5px;
      .order-info-item {
        font-size: 13px;
        color: #646464;
        padding: 10px 0 ;
        margin: 0 10px;
        background-color: #fff;
        p {
          width: 70px;
          font-size: 13px;
        }
      }
    }
  }
</style>