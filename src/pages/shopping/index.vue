<template>
  <div class="shopping">
    <div v-if="proList.length>0" class="content">
        <item v-for="(pro, index) in proList" :key="index" :pro="pro" @sub="subClick" @add="addClick" @check="checkItem" :isCheck="isSel" @del="delPro"></item>
      <div class="footer c-64 fz13">
        <div class="left">
          <img src="../../assets/icon/selected.png"  class="checkAll" @click="checkAll" v-show="isSel">
          <img src="../../assets/icon/unCheck.png"  class="checkAll" @click="clearAll" v-show="!isSel" >
          <div class="unCheck"></div>
          <div>全选</div>
        </div>
        <div class="right">
          <div class="mr-6">合计<span class="fz15 c-ef ml-6 ">¥<span class="ml-6">{{totalPrice}}</span></span></div>
          <div class="btn">提交订单</div>
        </div>
      </div>
    </div>
    <div v-else class="mt-20 text-c fz20 c-666"> 购物车空空如也~~~~~</div>
  </div>
</template>

<script>
import item from '@/components/item'
export default {
  data() {
    return {
      proList:[],
      selectData:[],
      isSel:false
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    async initData() {
      let res = await this.$api.shopCarList()
      this.proList = res.data.merchandiseShow
    },
    subClick(data,id) {
      this.proList.forEach(item => {
        if(item.merchandise.merchandise_id == id) {
          item.sum = data
        }
      })
    },
    addClick(data,id) {
      this.proList.forEach(item => {
        if(item.merchandise.merchandise_id == id) {
          item.sum = data
        }
      })
    },
    checkItem(data,pro) {
      if(data) {
       let res = this.selectData.some(item=>{
          return item.merchandise.merchandise_id == pro.merchandise.merchandise_id
        })
        if(!res) {
          this.selectData.push(pro)
        } 
      }else {
        let index = this.selectData.findIndex(item=> {
          return item.merchandise.merchandise_id == pro.merchandise.merchandise_id
        })
        this.selectData.splice(index,1)
      }
      if(this.selectData.length == this.proList.length) {
        this.isSel =true
      }else {
        this.isSel = false
      }
    },
    checkAll() {
      this.isSel = !this.isSel
      this.selectData = []
    },
    clearAll() {
      this.isSel = !this.isSel
      this.selectData = this.proList
    },
    delPro(pro) {
      let index = this.selectData.findIndex(item=> {
        return item.merchandise.merchandise_id == pro.merchandise.merchandise_id
      })
      if(index!= -1) {
        this.selectData.splice(index,1)
      }
      let idx =this.proList.findIndex(item=> {
        return item.merchandise.merchandise_id == pro.merchandise.merchandise_id
      })
      if(idx!=-1) {
        this.proList.splice(idx,1)
      }
    }
  },
  computed: {
    totalPrice() {
      let sum = 0
      this.selectData.forEach(item=>{
        sum += item.sum*item.merchandise.price
      })
      sum = sum.toFixed(2)
      return  sum
    }
  },
  components: {
    item
  }
}
</script>

<style lang="less">
  .shopping {
    .content {
      padding-bottom: 40px;
    }
    .footer {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px 0 13px;
      border-top:2px solid #F6F6F6;
      background-color: #fff;
      .left {
        display: flex;
        align-items: center;
        img {
          width: 17px;
          height: 17px;
          margin-right: 5px;
          
        }
        
      }
      .right {
        display: flex;
        align-items: center;
        .btn {
          width: 80px;
          height: 30px;
          line-height: 30px;
          background-color: #FBAD52;
          font-size: 15px;
          color: #000;
          text-align: center;
          border-radius: 15px;
        }
      }
    }
  }
</style>