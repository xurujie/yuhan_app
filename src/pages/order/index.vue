<template>
  <div class="order">
    <div class="order-tab fz1 mb-10 bg-f">
      <div
        class="order-tab-item"
        v-for="item in tab"
        :key="item.index"
        @click="getList(item.type)"
        :class="[type==item.type?'active':'']"
      >{{item.name}}</div>
    </div>

    <div class="order-main bg-f" v-if="hasOrder">
      <!-- 订单项 -->
      <!-- <div class="order-item bg-f line-b" v-for="(order, index) in orderList" :key="index">
        <div class="title c-64 fz11 line-b">
          <div>
            <span class="order-num">订单号</span>
            <span>{{order.orderNumber}}</span>
          </div>
          <span class="c-ef" @click="copyText(order.orderNumber)">复制</span>
        </div>
        <div v-for="(proList, ind) in order.merchandises" :key="ind">
          <div class="content " v-for="(pro, idx) in proList" :key="idx">
            <img :src="pro.grouppictures" class="pro-img">
            <div class="c-64 fz13 pro-right">
              <h5 class="mb-10">{{pro.merchandise}}</h5>
              <p class="fz13 pro-sie mb-10"><span class="mr-20">规格：5g*25</span> <span>{{pro.suitableobject}}</span></p>
              <div class="c-ef mb-10"><span class="fz9">¥</span><span class="fz20 pro-price">{{pro.price}}</span> <span class="fz15 c-64">×{{order.sum[idx]}}</span></div>
              <img src="../../assets/img/detail-ser.png" class="pro-label mb-10">
            </div>
          </div>
        </div>
        <div class="fz13 text-r" v-if="order.status==1">待付款</div>
        <div class="fz13 text-r" v-if="order.status==2">代发货</div>
        <div class="fz13 text-r" v-if="order.status==3">待收货</div>
        <div class="fz13 text-r" v-if="order.status==4">待评价</div>
        <div class="fz13 text-r" v-if="order.status==5">已完成</div>
        <div class="fz13 text-r" v-if="order.status==0">未完成</div>
        <div class="total line-b text-r">
          <span class="fz13 c-2a">共{{order.sums}}件商品 合计：</span>
          <span class="fz20 c-ef">¥{{order.orderprice}}</span>
        </div>
        <div class="bottom df ">
          <img src="../../assets/icon/detail.png" @click="getOrderDetail(order.orderNumber,order.status)">
          <img src="../../assets/icon/insure.png" v-if="order.status==2||order.status==3">
          <img src="../../assets/icon/cancel.png" v-if="order.status==1">
          <img src="../../assets/icon/toPay.png" v-if="order.status==1">
          <img src="../../assets/icon/comment.png" v-if="order.status==4">
        </div>
      </div>-->
      <order-item :show="true" :orderList="orderList" @goDetail="getOrderDetail"></order-item>
    </div>
    <div v-else class="fz12 c-666 text-c mt-20">您还没有订单~~~</div>
  </div>
</template>

<script>
import orderItem from '@/components/orderItem'
export default {
  data() {
    return {
      tab: [
        { name: '全部', type: 1 },
        { name: '待付款', type: 2 },
        { name: '待发货', type: 3 },
        { name: '待收货', type: 4 },
        { name: '待评价', type: 5 }
      ],
      currentIndex: 0,
      type: 0,
      orderList: {},
      pro: [],
      hasOrder: false
    }
  },
  components: {
    orderItem
  },
  mounted() {
    this.type = this.$root.$mp.query.type
    this.init()
  },
  methods: {
    getList(data) {
      this.type = data
      this.init()
    },
    async init() {
      let res
      if (this.type == 1) {
        res = await this.$api.getOrderAll()
      } else if (this.type == 2) {
        res = await this.$api.getToPay()
      } else if (this.type == 3) {
        res = await this.$api.getToSend()
      } else if (this.type == 4) {
        res = await this.$api.getToReceive()
      } else if (this.type == 5) {
        res = await this.$api.getTocomment()
      }
      if (
        JSON.stringify(res.data) == '{}' ||
        (res.data.OrderListShow && res.data.OrderListShow.length == 0)
      ) {
        this.hasOrder = false
      } else {
        this.hasOrder = true
        this.orderList = res.data.OrderListShow
      }
    },
    getOrderDetail(id, state) {
      if (state == 1) {
        wx.navigateTo({ url: '../waitPay/main?orderNumber=' + id })
      } else if (state == 2) {
        wx.navigateTo({ url: '../orderDetail/main?orderNumber=' + id })
      } else if (state == 3) {
        wx.navigateTo({ url: '../orderDetail/main?orderNumber=' + id })
      } else if (state == 4) {
        wx.navigateTo({ url: '../addcomment/main?orderNumber=' + id })
      } else if (state == 5) {
        wx.navigateTo({ url: '../orderDetail/main?orderNumber=' + id })
      } else if (state == 0) {
        wx.navigateTo({ url: '../orderDetail/main?orderNumber=' + id })
      }
    }
  },
  filters: {
    calcNum(data) {
      comsole.log(data, 11)
      let num
      data.forEach(item => {
        mum += item
      })
      return item
    }
  }
}
</script>

<style lang="less">
page {
  background-color: rgb(248, 248, 248);
}
.order {
  .order-tab {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .order-tab-item {
      height: 40px;
      line-height: 40px;
      position: relative;
      color: #2a2a2a;

      &.active {
        color: #ef1e3c;
        &::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 4px;
          width: 100%;
          height: 2px;
          background-color: #ef1e3c;
        }
      }
    }
  }
  .order-main {
    margin: 0 10px;
    border-radius: 5px;
    .content {
      padding-bottom: 10px;
    }
    .total {
      margin-top: 10px;
      padding: 0 2px 10px 2px;
      height: 34px;
      line-height: 34px;
      border-bottom: 1px solid #eee;
      border-top: 1px solid #eee;
    }
    .bottom {
      justify-content: flex-end;
      margin-top: 10px;
      img {
        width: 80px;
        height: 30px;
        margin-right: 10px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>