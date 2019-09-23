<template>
  <div class="insureOrder">
    <van-cell title="收货人" is-link custom-class="shop-name" ></van-cell>
    <van-cell title=" 煜宠商城品牌直营：" custom-class="shop-name"  ></van-cell>
    <insure :pro="pro"></insure>
    <van-cell title=" 优惠券" custom-class="shop-name" is-link :value="coupon" ></van-cell>
    <van-cell title=" 留言" custom-class="shop-name"  value="点击给商家留言" ></van-cell>
    <van-cell title=" 配送方式" custom-class="shop-name" is-link value="普通快递"></van-cell>
    <!-- <van-cell title=" 余额抵扣 " custom-class="shop-name" is-link value="暂无优惠券可用" ></van-cell>
    <van-cell title="积分抵扣 " custom-class="shop-name" is-link value="暂无优惠券可用" ></van-cell> -->
    <div class="cell money c-9d fz9 mt-10 mb-3">
      <div class="c-9d"><span class="mr-10">余额抵扣&nbsp;(默认使用)</span><span>已抵扣{{remant}}元，当前余额{{bal}}元</span></div>
      <div>
        <switch :checked="!isCheck"  @change="change" />
      </div>
    </div>
    <div class="cell money c-9d fz13 ">
      <div class="c-9d"><span>积分抵扣</span></div>
      <div class="c-9d cell-input">
        <span class="mr-20">每100积分抵扣1元，当前{{integral}}积分</span>
        <!-- <switch  @change="change()"/> -->
        <input type="num" v-model="score" @change="changeScore">
      </div>
    </div>
    <div class="footer">
      <div class="c-64 fz13">待支付<span class="fz15 c-ef">{{calcPrice}}</span>元</div>
      <div class="insure-btn c-000 fz15" @click="submitOrder">提交订单</div>
    </div>
  </div>
</template>

<script>
import insure from '@/components/insure'
export default {
  data() {
    return {
      pro:{},
      balance:'',
      bal:0,
      integral:'',
      score:0,
      ischeck:true,
      express:8,
      remant:0,
      coupon:'暂无优惠券可用',
      Promotion:{},
      mPrice :'',
      sumPrice:'',
      Profile:{}
    }
  },
  mounted() {
    this.init()
   
    
  },
  methods: {
    async  init() {
      let num = this.$root.$mp.query.merchandiseSum
       let id = this.$root.$mp.query.merchandiseId
      let res = await this.$api.getOrderInfo({merchandiseSum:num,merchandiseId:id})
      res.data.merchandise.num = num
      this.pro= res.data.merchandise
      this.balance = res.data.balance
      this.integral = res.data.integral
      this.Profile = res.data.Profile
      if(this.score/100>this.pro.price*this.$root.$mp.query.merchandiseSum) {
        this.score = this.pro.price*this.$root.$mp.query.merchandiseSum*100
      }
      if(res.data.Promotion) {
        this.coupon = '满'+res.data.Promotion.sum+'减'+res.data.Promotion.sum_off
        this.Promotion = res.data.Promotion 
      }

    },
    change() {
     this.ischeck = !this.ischeck 
     if(!this.ischeck) {
       this.remant = 0
       this.score = 0
     }
    },
    async submitOrder() {
      let _this = this
      let obj = {
        merchandiseId: this.pro.merchandise_id,
        merchandiseSum: this.$root.$mp.query.merchandiseSum,
        useCoupon:0,
        fullDiscount: this.Promotion.id,
        usingIntegrals: this.score,
        balanceDeduction: this.remant,
        mPrice: this.mPrice,
        expressFee: this.express,
        sumPrice: this.sumPrice ,
        receivingAddress: this.Profile.id,
      }
      let res = await this.$api.genertateOrder(obj)
      if(res.data.orderNumber) {
        let {data} = await this.$api.getSign({orderNumber:res.data.orderNumber})
        // wx.login({
          //  async success(res) {
          //  console.log(res.code,'res')
            // let data = await  _this.$api.getOpenId({code:res.code})
            console.log(data,'data')
            wx.requestPayment({
              timeStamp:data.timeStamp,
              nonceStr:data.nonceStr,
              package:data.package,
              signType:'MD5',
              paySign:data.paySign,
              success(res) {
                console.log(res)
              },
              fail(err) {
                console.log(err)
              }
            })
        //   }
        // })
        // wx.navigateTo({url:'../order/main'})
      }else {
        wx.showToast({
          title:'订单生成失败',
          icon:'error'
        })
      }
    },
    changeScore() {
      if(this.score>this.integral) {
        this.score = this.integral
      }else if(this.score<0) {
        this.score = 0
      }
    }
  },
  computed: {
    calcPrice() {
      let price = this.pro.price*this.$root.$mp.query.merchandiseSum
      let res
      if(JSON.stringify(this.Promotion)!='{}') {
        let reduce = (Math.floor(price/this.Promotion.sum)*this.Promotion.sum_off).toFixed(2)
       
        price = (price - reduce).toFixed(2)
      }
      if(this.ischeck) {
       
        if(this.balance/1>= price/1) {
          this.remant = price
          this.bal = this.balance -price
          res = 0
          
        }else {
          this.remant = price
          this.bal = this.balance -price
          res = (price - this.score/100).toFixed(2)
           console.log(2)
        }
      }else {
        this.remant = 0
        this.bal = this.balance
        res = (price - this.score/100).toFixed(2)
        
      }
      this.mPrice = res
      res = res + this.express
      this.sumPrice = res
      return res
    }
  },
  components: {
    insure
  }
}
</script>

<style lang="less">
page {
  background-color: rgb(248, 248, 248);
}
  .insureOrder {
    .shop-name {
      font-size: 11px;
      color: #9D9D9D;
    }
    .cell {
      background-color: #fff;
      padding: 0 20px ;
      font-size: 9px;
      display: flex;
      justify-content: space-between;
      height: 50px;
      line-height: 50px;
      switch {
        zoom: 0.6;
      }
      .cell-input {
        display: flex;
        justify-content: space-between;
        align-items: center;
        input {
          width: 60px;
          height: 50px;
          text-align: right;
        }
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