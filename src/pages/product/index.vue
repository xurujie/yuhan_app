<template>
  <div class="product">
    <swiper>
      <swiper-item v-for="(item, index) in proImgs" :key="index"><img :src="item" alt=""></swiper-item>
    </swiper>
    <div class="pro-type bg-f mb-6">
      <div class="pro-title">
        <p>{{product.title}}</p>
        <div>
          <!-- <img src="" alt=""> -->
          <p>收藏</p>
        </div>
        
      </div>
      <div class="pro-price">
        <span class="sale-price fz20"><span class="fz9">¥</span>{{product.price}}</span>
        <span class="old-price">{{product.originalprice}}</span>
        <span class="label fz9">正品销售</span>
      </div>
      <div class="pro-sale">
        <div class="sales">销量 {{product.commodity_sales}}</div>
        <div class="repertory">库存 {{product.residual_inventory}}</div>
      </div>
    </div>
    <div class=" cell-item fz13 mb-6">
      <div class="cell-text">促销</div>
      <div class="promotion-detail" v-if="promotion.id ==1"><span class="c-ef">[满件减]</span>满{{promotion.sum}}减{{promotion.sum_off}}</div>
      <div class="arrow-right pr"></div>
    </div>
    <div class=" cell-item fz13 mb-6">
      <div class="cell-text">发货</div>
      <div class="cell-right c-64">
        <div>{{product.ship_address}}</div>
        <!-- <div class="arrow-right pr"></div> -->
      </div>
    </div>
    <div class=" bg-f mb-6">
      <div class=" cell-item fz13 border-b">
        <div class="cell-text">配送至</div>
        <span class="fz13 c-64">江苏省苏州市昆山市花桥镇绿地大道绿地杰座</span>
        <div class="arrow-right pr"></div>
      </div>
      <div class=" cell-item fz13 border-b">
        <div class="cell-text">会员</div>
        <div class="c-64 vip"><img src="../../assets/icon/vip-small.png" alt=""><span>会员预计可节省{{product.price-product.vip_price}}元</span></div>
        <div class="cell-right">
          <span class="fz13 c-64" @click="goVip">立即开卡</span>
          <div class="arrow-right pr"></div>
        </div>
      </div>
      <div class=" cell-item fz13 border-b">
        <div class="cell-text">运费</div>
        <div class="cell-right">
          <span class="fz13 c-64">满99包邮</span>
          <div class="arrow-right pr"></div>
        </div>
      </div>
    </div>
    <!-- 服务 -->
    <div class=" cell-item fz13 cell-red mb-6 ">
      <div class="cell-text">服务</div>
      <img src="../../assets/img/detail-ser.png" class="img-service">
    </div>
    <!-- 用户评论 -->
    <div class=" cell-item fz13">
      <div class="cell-text">用户评价</div>
      <div class="c-64">99%好评率</div>
      <div class="cell-right">
        <span class="c-ef">{{product.evaluate_count}}人评论</span>
        <div class="arrow-right pr"></div>
      </div>

    </div>
    <div class=" load-more bg-f c-64 fz13 text-c">上拉查看商品详情</div>
    <!-- <div class="tab cell-item c-64 fz15 mb-6">
      <span>商品详情</span>
      <span>规格参数</span>
    </div> -->
    <van-tabs :active="active " @change="onChange" sticky>
      <van-tab title="产品详情">
        <div class="imgBox"><img :src="product.img" ></div>
      </van-tab>
      <van-tab title="用户评论">内容 2</van-tab>
    </van-tabs>

    <!-- footer -->
    <div class="footer">
      <div class="icon-footer bg-f">
        <!-- <div class="icon-item"><img src="../../assets/icon/shop.png" alt=""><p>店铺</p></div> -->
        <div class="icon-item" @click="goShopCar"><img src="../../assets/icon/car.png" ><p>购物车</p></div>
        <div class="icon-item"><img src="../../assets/icon/service.png" alt=""><p>客服</p></div>
      </div>
      <div class="addshop bg-fb c-fff fz15 text-c">加入购物车</div>
      <div class="buy bg-ef c-fff fz15 text-c" @click="buyNow">立即购买</div>
    </div>


    <van-popup :show="showPopup" position="bottom" @close="showPopup=false">
      <div class="selectPro">
          <div class="pro-info">
            <img src="../../assets/img/proImg.png" alt="">
            <div class="pro-text">
              <p > laketaney狗粮 1.5kg</p>
              <div class="c-ef">￥19.9</div>
              <span>库存9999件</span>
            </div>
            <!-- <img src="" alt=""> -->
          </div>
          <div class="number">
            <p>购买数量</p>
            <div class="num-control"><span @click="num>1&&num--">-</span><span>{{num}}</span><span @click="num++">+</span></div>
          </div>
          <div class="btn bg-fb c-fff">确定</div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import sHeader from '@/components/s-header'
import card from '@/components/card'
export default {
  data() {
    return {
      showPopup:false,
      num:1,
      product:{},
      proImgs:[],
      promotion:{},
      active:0
    }
  },
  created() {
    
  },
  async mounted() {
    let id = this.$root.$mp.query.id
    let res = await this.$api.proDetail({MerchandiseId:"100001"})
    if(res.msg=="Success"){
      this.product = res.data.Merchandise
      this.proImgs = res.data.Merchandise.grouppictures.split(";")
      this.promotion = res.data.Promotion
    }
  },
  methods: {
    buyNow() {
      this.showPopup = true
    },
    onChange(event) {
      console.log(event,111)
      wx.showToast({
        title: `切换到标签 ${event.mp.detail.index + 1}`,
        icon: 'none'
      });
    },
    goVip() {
      wx.navigateTo({url:'../joinUs/main'})
    },
    goShopCar() {
       wx.switchTab({url:'../shopping/main'})
    }
  },
  component: {
    sHeader,
    card
  }
}
</script>

<style lang="less">
page {
  background-color: #F8F8F8;
}
 .product {
   padding-top: 20px;
   padding-bottom: 50px;
   background-color: #F8F8F8;
   swiper {
     height: 375px;
     width: 375px;
     swiper-item {
       height: 375px;
       width: 375px;
       img {
         width: 100%;
         height: 100%;
       }
     }
   }
   .pro-type {
     padding: 10px 15px 18px 10px;
     .pro-title {
       display: flex;
       justify-content: space-between;
       margin-bottom: 7px;
       p {
         font-size: 13px;
         color: #646464;
        flex: 0 0 70%;
       }
     }
    .pro-price {
      display: flex;
      align-items: baseline;
      color: #EF1E3C;
      font-size: 13px;
      margin-bottom: 10px;
      .sale-price {
        margin-right: 13px;
      }
      .old-price {
        text-decoration: line-through;
        margin-right: 20px;
        color: #9D9D9D;
      }
      .label {
        height: 15px;
        width: 45px;
        text-align: center;
        line-height: 14px;
        border-radius:8px;
        border:1px solid rgba(239,30,60,1);
      }
    }
    .pro-sale {
      color: #9D9D9D;
      font-size:13px;
      display: flex;
      div {
        flex:1;
      }
    }
   }
   
   .load-more {
     height: 40px;
     line-height: 40px;
     margin: 10px 0;
   }
   .tab {
     display: flex;
     justify-content: space-around;
     span {

     }
   }
   .footer {
     position: fixed;
     bottom: 0;
     left: 0;
     right: 0;
     display: flex;
     height: 50px;
     
     .icon-footer {
       flex: 1;
       display: flex;
       .icon-item {
         flex:1;
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
          img {
            width: 20px;
            height: 20px;
            margin-bottom: 5px;
          }
          p {
            font-size:10px;
            color: #646464;
          }
       }
     }
     .addshop {
       width: 110px;
       line-height: 50px;
     }
     .buy {
       width: 110px;
       line-height: 50px;
     }
   }
 }
 .selectPro {
   padding: 18px 12px 7px 12px;
   .pro-info {
     display: flex;
     margin-bottom: 23px;
     color: #696969;
     img {
       width: 85px;
       height: 85px;
     }
     .pro-text {
       font-size: 11px;
       p {
         margin-bottom: 6px;
       }
       div {
         font-size:16px;
         margin-bottom: 8px;
       }
       span {
         
       }
     }

   }
   .number {
     margin-bottom: 15px;
     p {
       font-size: 15px;
       color: #3D3D3D;
       margin-bottom: 4px;
     }
     .num-control {
       font-size: 13px;
       color: #636363;
       span {
         display: inline-block;
         width: 37px;
         height: 31px;
         text-align: center;
         line-height: 31px;
         border: 1px solid #C8C8C8;
         &:nth-child(2){
           border-left: none;
           border-right: none;
         }
       }
     }
   }
   .btn {
     height: 45px;
     line-height: 45px;
     text-align: center;
     border-radius: 22px;
   }
 }
</style>