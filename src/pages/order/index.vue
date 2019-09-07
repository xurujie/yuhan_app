<template>
  <div class="order">
    <div class="order-tab fz1 mb-10 bg-f">
      <div class="order-tab-item " v-for="item in tab" :key="item.index" @click="getList(item.index)" :class="[currentIndex==item.index?'active':'']">{{item.name}}</div>
      <!-- <div class="order-tab-item">待付款</div>
      <div class="order-tab-item">待发货</div>
      <div class="order-tab-item">待收货</div>
      <div class="order-tab-item">待评价</div> -->
    </div>

    <div class="order-main bg-f">
      <!-- 订单项 -->
      <div class="order-item bg-f line-b">
        <div class="title c-64 fz11 line-b">
          
          <div>
            <span class="order-num">订单号</span>
            <span>201805071121305569</span>
          </div>
          <span class="c-ef">复制</span>
        </div>
        <div class="content ">
          <img src="../../assets/img/slider-item.png" class="pro-img">
          <div class="c-64 fz13 pro-right">
            <h5 class="mb-10">【宠儿香】 康源益生菌5g*25 猫犬通用</h5>
            <p class="fz13 pro-sie mb-10"><span>规格：5g*25</span> <span>猫犬通用</span></p>
            <div class="c-ef mb-10"><span class="fz9">¥</span><span class="fz20 pro-price">150.00</span> <span class="fz15 c-64">×50</span></div>
            <img src="../../assets/img/detail-ser.png" class="pro-label mb-10">
            <div class="fz13 text-r">已发货</div>
          </div>
        </div>
      </div>
      <!-- 统计 -->
      <div class="total line-b text-r">
        <span class="fz13 c-2a">共50件商品 合计：</span>
        <span class="fz20 c-ef">¥750.00</span>
      </div>
      <div class="bottom df ">
        <img src="../../assets/icon/detail.png" >
        <img src="../../assets/icon/insure.png" >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab:[
        {name:'全部',index:1},
        {name:'待付款',index:2},
        {name:'待发货',index:3},
        {name:'待收货',index:4},
        {name:'待评价',index:5},
      ],
      currentIndex:'1',
      type:''
    }
  },
  mounted() {
    this.type = this.$root.$mp.query.type
    console.log(this.type,333)
  },
  methods: {
    getList(data) {
      this.currentIndex =  data
    }
  },
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
        color: #2A2A2A;
        &.active {
          color: #EF1E3C;
          &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 4px;
            width: 100%;
            height: 2px;
            background-color: #EF1E3C;
          }
        }
      }
    }
    .order-main {
      margin: 0 10px;
      border-radius:5px;
      .total {
        height: 34px;
        line-height: 34px;
      }
      .bottom {
        justify-content: flex-end;
        margin-top: 10px;
        img {
          width: 80px;
          height: 30px;
        }
      }
    }
    
  }
</style>