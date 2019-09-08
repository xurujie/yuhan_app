<template>
  <div class="com-item">
    <div class="left">
      <img src="../assets/icon/selected.png"  class="icon-check" @click="check" v-show="isShow">
      <img src="../assets/icon/unCheck.png" alt="" class="icon-check" @click="check" v-show="!isShow">
    </div>
    <div class="right ">
      <img :src="pro.merchandise.grouppictures" class="pro-img">
      <div class="c-64 fz12 pro-right">
        <h5 class="mb-10"><span>{{pro.merchandise.merchandise}}</span></h5>
        <p class="fz12 pro-sie mb-10"><span class="mr-20">规格：5g*25</span> <span>{{pro.merchandise.suitableobject}}</span></p>
        <div class="c-ef mb-10"><span class="fz9">¥</span><span class="fz20 pro-price">{{pro.merchandise.price}}</span></div>
      </div>
       <img src="../assets/icon/delete.png" alt="" class="icon-del" @click="del">
      
       <div class="calc c-ad fz13">
         <div class="subtract" @click="subtract">-</div>
         <div class="num">{{num}}</div>
         <div class="add" @click="add">+</div>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    pro:{
      type:Object
    },
    isCheck: {
      type: Boolean
    }
  },
  data() {
    return {
      num: this.pro.sum,
      isClick: false,
      bool:''
    }
  },
  computed: {
    isShow() {
      
      if(this.isCheck || this.isClick) {
        this.bool = true
      }else {
        this.bool =false
      }
      return this.bool
    }
  },
  methods: {
    subtract() {
      this.num>1&&this.num--
      this.$emit('sub',this.num,this.pro.merchandise.merchandise_id)
    },
    add() {
      this.num++
      this.$emit('add',this.num,this.pro.merchandise.merchandise_id)
    },
    check(){
      this.isClick = !this.isClick
      this.$emit('check',this.isClick,this.pro)
    },
    del() {
      this.$emit('del',this.pro)
    }
  },
}
</script>


<style lang="less">
  .com-item {
    display: flex;
    align-items: center;
    padding: 20px 10px;
    .left {
      .icon-check {
        width: 22px;
        height: 22px;
        margin-right: 5px;
      }
      
    }
    .right {
        display: flex;
        position: relative;
        flex:1;
        .pro-img {
          width: 87px;
          height: 87px;
        }
        .pro-right {
          padding-left: 10px;
          h5 {
              width: 162px;
              line-height: 15px;
          }
          .pro-label {
            height: 18px;
            width: 80%;
          }
          .pro-size {
            color: #9D9D9D;
          }
          .pro-price {
            margin-right: 18px;
          }
          .btn-change {
            width: 60px;
            height: 25px;
            line-height: 25px;
            border: 1px solid #9D9D9D;
            border-radius:13px;
          }
        }
        .icon-del {
          position: absolute;
          right: 23px;
          top: 20px;
          width: 25px;
          height: 25px;
        }
        .calc {
          border: 1px solid #ADADAD;
          border-radius: 5px;
          height: 25px;
          width: 72px;
          line-height: 25px;
          display: flex;
          position: absolute;
          right: 26px;
          bottom: 0px;
          text-align: center;
          .subtract {
            width: 24px;
          }
          .num {
            color: #5E5E5E;
            width: 24px;
            border-left: 1px solid #ADADAD;
            border-right: 1px solid #ADADAD;
          }
          .add {
            width: 24px;
          }
        }
      }
    .unCheck {
      width: 17px;
      height: 1px;
      border-radius: 50%;
      border: 1px solid #CECECE;
    }
  }
</style>