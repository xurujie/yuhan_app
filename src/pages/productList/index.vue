<template>
  <div class="productList bg-f">
    <div class="header line-b">
      <div class="search pr">
        <input type="text" class="fz12" placeholder="狗狗主粮">
        <div class="logo pa">
          <img src="../../assets/img/logo.png" alt="">
        </div>
        <van-icon name="search" class="icon-search pa"></van-icon>
      </div>
      <div class="condition df-b">
        <div @click="clickAll" class="con-item">
          <span>综合</span>
          <img src="../../assets/icon/sj-down.png" v-if="showIcon">
          <img src="../../assets/icon/sj-down-active.png" v-else>
        </div>
        <div @click="sales" class="con-item">
          <span>销量</span>
        </div>
        <div @click="price" class="con-item">
          <span>价格</span>
          <div v-if="showPri" class="priIcon">
            <img src="../../assets/icon/sj-up.png" alt="">
            <img src="../../assets/icon/sj-d.png" alt="">
          </div>
          <div v-else class="priIcon">
            <img src="../../assets/icon/sj-up-active.png" alt="">
            <img src="../../assets/icon/sj-d-active.png" alt="">
          </div>
        </div>
        <div @click="selectCon" class="con-item">
          <span>筛选</span>
          <img src="../../assets/icon/select.png" v-if="showSel" class="sel-cion">
          <img src="../../assets/icon/select-active.png" v-else class="sel-cion">
        </div>
      </div>
      <div class="p-label">
        <div class="p-label-item">品牌</div>
        <div class="p-label-item">适用对象</div>
        <div class="p-label-item">产地</div>
        <div class="p-label-item">医疗功效</div>
      </div>
    </div>
    <div class="jionUs line-b">
      <img src="../../assets/icon/join.png" alt="">
    </div>

    <!-- 产品列表 -->
    <div class="proList-cotent">
      <div class="product-item" v-for="(pro, index) in seckillList" :key="index">
        <div class="pro-img">
          <img src="../../assets/img/proImg.png" alt="">
        </div>
        <div class="pro-info">
          <div class="pro-title">{{pro.title}}</div>
          <div class="pro-des">{{pro.des}}</div>
          <div class="pro-price mb-6">
            <span class="pro-sale-price"><span class="fz9">¥</span> {{pro.salePrice}}</span>
            <span class="icon-vip-samll"><img src="../../assets/icon/vip-small.png" alt=""></span>
            <span class="pro-old-price">¥{{pro.oldPrice}}</span>
          </div>
          <img src="../../assets/icon/shopCar.png" alt="" class="pro-car ">
          <div class="fz9 c-4c">已售66666</div>
        </div>
    </div>

    <!-- 筛选弹窗 -->
    <van-popup :show="showPop" @close="onClose" position="right">
      <div class="select-con">
        <div class="con-item">
          <div class="name">价格</div>
          <div class="content">
            <div class="content-label">莱克托尼</div>
            <div class="content-label">莱克托尼</div>
            <div class="content-label">莱克托尼</div>
            <div class="content-label">莱克托尼</div>
            <div class="content-label">莱克托尼</div>
          </div>
        </div>
        <div class="footer fz15 ">
          <div class="reset">重置</div>
          <div class="finish  ">完成</div>
        </div>
      </div>
    </van-popup>

  </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      showIcon:true,
      showPri:true,
      showSel:true,
      showPop:false,
      seckillList:[
        {title:'宠儿香 康源益生菌5g*24 猫犬通用',img:require('../../assets/img/proImg.png'),salePrice:'19.9',oldPrice:'39.9',des:'宠儿香 康源益生菌5g*24 猫犬通用'},
        {title:'宠儿香 康源益生菌5g*24 猫犬通用',img:require('../../assets/img/proImg.png'),salePrice:'19.9',oldPrice:'39.9',des:'宠儿香 康源益生菌5g*24 猫犬通用'},
        {title:'宠儿香 康源益生菌5g*24 猫犬通用',img:require('../../assets/img/proImg.png'),salePrice:'19.9',oldPrice:'39.9',des:'宠儿香 康源益生菌5g*24 猫犬通用'},
      ]
    }
  },
  mounted() {
    let type = this.$root.$mp.query.type
    console.log(type,"------")
  },
  methods: {
    clickAll() {
      this.showIcon = !this.showIcon
    },
    price() {
      this.showPri = !this.showPri
    },
    selectCon() {
      this.showSel = !this.showSel
      this.showPop = true
    },
    onClose() {
      this.showPop = false
    }
  },
  component: {
  }
}
</script>

<style lang="less">
  .productList {
    .header {
      padding: 10px;

    }
    .condition {
      .con-item {
        
        height: 36px;
        color: #4C4C4C;
        font-size: 13px;
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        span {
          margin-right: 7px;
        }
        img {
          width: 7px;
          height: 5px;
        }
        .priIcon {
          display: flex;
          flex-direction: column;
          img {
            width: 10px;
            height: 8px;
          }
        }
        .sel-cion {
          width: 10px;
          height: 12px;
        }
      }
    }
    .p-label {
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
      .p-label-item {
        width: 78px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        font-size: 12px;
        color: #4C4C4C;
        background-color: #F6F6F6;
        border-radius: 5px;
      }
    }
    .jionUs {
      padding: 5px 10px;
      img {
        height: 74px;
        width: 357px;
      }
    }
    .proList-cotent {
      padding: 0 10px;
    }
  }
  .select-con {
    height: 100vh;
    width: 310px;
    padding: 20px 10px;
    .con-item {
      .name {
        font-size: 12px;
        margin-bottom: 10px;
      }
      .content {
        display: flex;
        flex-wrap: wrap; 
        padding-left: 18px;
        // justify-content: space-between;
        .content-label {
          width: 87px;
          height: 20px;
          line-height: 20px;
          text-align: center;
          background-color: #F6F6F6;
          font-size: 12px;
          margin-right: 6px;
          margin-bottom: 10px;
          border-radius: 5px;
          &:nth-child(3n) {
            margin-right: 0;
          }
        }
      }
    }
    .footer {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      display: flex;
      color: #212121;
      text-align: center;
      height: 45px;
      line-height: 45px;
      .reset {
        flex: 0 0 50%;
        border: 1px solid #FBAD52;
      }
      .finish {
        flex: 0 0 50%;
        background-color: #FBAD52;
      }
    }
  }
</style>