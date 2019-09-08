<template>
  <div class=" goods">
    <div class="goods-title">精品好物</div>
    <div class="goods-box">
      <!-- <seckill-item :showKill="false"></seckill-item> -->
      <buy-item :showKill="false" v-for="(item, index) in killList" :key="index" :seck="item"></buy-item>
    </div>
    <div class="goods-title">热销排行榜</div>
    <div class="hot">
      <hot-item v-for="(pro, idx) in proList" :key="idx" :pro="pro"></hot-item>
    </div>
  </div>
</template>

<script>
import seckillItem from '@/components/seckillItem'
import hotItem from '@/components/hotItem'
import buyItem from '@/components/buyItem'
export default {
  data() {
    return {
      pageSize:10,
      pageNumber:1,
      proList:[],
      killList:[],
      count:12,
      size:3,
      num:1,
      count2:4
    }
  },
  mounted() {
    this.init()
    this.getProList()
  },
  methods: {
   async init() {
      let first = this.size*(this.num-1)
      let end = this.size*this.num
      if(end>this.count) return
      let res = await this.$api.getCatigray({first,end,type:'0009'})
      this.killList = res.data.ListArray
    },
    async getProList() {
      let first = this.pageSize*(this.pageNumber-1)
      let end = this.pageSize*this.pageNumber
      if(end>this.count) return
      let res = await this.$api.getGoods({first,end})
      this.count = res.data.count
      this.proList =this.proList.concat(res.data.ListArray) 
    },
  },
  components: {
    hotItem,
    seckillItem,
    buyItem
  }
}
</script>

<style lang="less">
page {
  background-color: rgb(254, 249, 242);
}
.goods {
  padding: 13px 7px;
  .goods-title {
    border-left:6px solid #FBAD52;
    height: 28px;
    line-height: 28px;
    padding-left:6px;
    margin-bottom: 15px;
  }
  .goods-box {
    margin-top: 18px;
    margin-bottom: 12px;
    display: flex;
    justify-content: space-between;
  }
  .hot {
    background-color: #fff;
  }
}
  
</style>