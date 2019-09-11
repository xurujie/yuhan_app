<template>
  <div class="a-activity">
    <div class="header">
      <div class="header-item">狗狗特卖</div>
      <div class="header-item">秒杀</div>
      <div class="header-item">特卖</div>
      <div class="header-item">折扣</div>
    </div>
    <div class="main">
      <activity-item type="score" v-for="(item, index) in proList" :key="index" :pro="item"></activity-item>
    </div>
  </div>
</template>

<script>
import activityItem from '@/components/activityItem'
export default {
  data() {
    return {
      pageSize:10,
      pageNumber:1,
      proList:[],
      count:12
    }
  },
  mounted() {
    this.init()
  },
  onReachBottom() {
    this.pageNumber++
    this.init()
  },
  async onPullDownRefresh() {
    this.proList=[]
    this.pageNumber =1
    await this.init()
    wx.stopPullDownRefresh()
  },
  methods: {
   async init() {
    //  let first = this.pageSize*(this.pageNumber-1)
    //  let end = this.pageSize*this.pageNumber
    //  if(end>this.count) return
     let res = await this.$api.getGoods({pageNumber:this.pageNumber,pageSize:this.pageSize})
     this.count = res.data.count
     this.proList =this.proList.concat(res.data.ListArray) 
   }
  },
  components: {
    activityItem
  }
}
</script>

<style lang="less">
page{
  background-color:rgba(254, 249, 242);
}
  .a-activity {
    .header {
      display: flex;
      justify-content: space-between;
      padding: 0 22px;
      margin-bottom: 15px;
      .header-item {
        width: 78px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        background-color: #F6F6F6;
        font-size: 12px;
        color: #4C4C4C;
        margin-top: 6px;
      }
    }
    .main {
      padding: 0 10px;
      display: flex;
      width: 100%;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
</style>