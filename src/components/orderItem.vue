<template>
 <div>
    <div class="order-item bg-f line-b" v-for="(order, index) in orderList" :key="index">
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
          <div class="c-64 fz13 pro-right pr">
            <h5 class="mb-10">{{pro.merchandise}}</h5>
            <p class="fz13 pro-sie mb-10"><span class="mr-20">规格：5g*25</span> <span>{{pro.suitableobject}}</span></p>
            <div class="c-ef mb-10"><span class="fz9">¥</span><span class="fz20 pro-price">{{pro.price}}</span> <span class="fz15 c-64">×{{order.sum[idx]}}</span></div>
            <img src="../assets/img/detail-ser.png" class="pro-label mb-10" v-if="show">
            <div class="fz13 text-c btn-change" v-if="showBtn">退换</div>
          </div>
        </div>
      </div>
      <div v-show="show">
        <div class="fz13 text-r" v-if="order.status==1">待付款</div>
        <div class="fz13 text-r" v-if="order.status==2">代发货</div>
        <div class="fz13 text-r" v-if="order.status==3">待收货</div>
        <div class="fz13 text-r" v-if="order.status==4">待评价</div>
        <div class="fz13 text-r" v-if="order.status==5">已完成</div>
        <div class="fz13 text-r" v-if="order.status==0">未完成</div>

      </div>
      <!-- 统计 -->
      <div class="total line-b text-r">
        <span class="fz13 c-2a">共{{order.sums}}件商品 合计：</span>
        <span class="fz20 c-ef">¥{{order.orderprice}}</span>
      </div>
      <div class="bottom df " v-if="show">
        <img src="../assets/icon/detail.png" @click="getOrder(order.orderNumber,order.status)">
        <img src="../assets/icon/insure.png" v-if="order.status==2||order.status==3">
        <img src="../assets/icon/cancel.png" v-if="order.status==1">
        <img src="../assets/icon/toPay.png" v-if="order.status==1">
        <img src="../assets/icon/comment.png" v-if="order.status==4">
      </div>
    </div>
 </div>
   
</template>


<script>
export default {
  props: {
    orderList:{
      type:Object
    },
    show: {
      type: Boolean,
      default: true
    },
    showBtn: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    getOrder(data,state) {
      this.$emit('goDetail',data,state)
    },
    copyText(data) {
      wx.setClipboardData({
        data: data,
        success: function (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制成功'
              })
            }
          })
        }
      })
    }
  },
}
</script>

<style lang="less">
  .order-item {
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
      .btn-change {
          position: absolute;
          right: 0;
          bottom: 10px;
        }
  }
</style>