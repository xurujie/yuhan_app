<template>
  <div class="cat">
    <div class="cat-nav"></div>
    <div class="p-title today"><span>今日特卖</span><div class="fz9 btn-change" @click="changeKill">换一组</div></div>
    <div class="sale mb-20">
      <activity-item type="price" v-for="(item, index) in killList" :key="index" :pro="item"></activity-item>
    </div>
    <div class="p-title">汪星人精选</div>
    <div class="sale sift">
      <activity-item type="price" v-for="(pro, idx) in proList" :key="idx" :pro="pro"></activity-item>
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
    changeKill() {
      this.num++ 
      this.init()
    }
  },
  components: {
    activityItem
  }
}
</script>

<style lang="less">
  .cat {
    padding: 10px;
    .cat-nav {
      margin: 0 10px;
      height: 126px;
    }
    .p-title {
      &.today {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .btn-change {
          background-color: #FBAD52;
          color: #fff;
          width: 36px;
          height: 14px;
          border-radius: 7px;
          text-align: center;
          line-height: 14px;
        }
      }
    }
    .sale {
      display: flex;
      flex-wrap: wrap;
       display: flex;
      flex-wrap: nowrap;
      overflow-x: scroll;
      &.kill {
        .activityItem {
          &:nth-child(3n) {
            margin-right: 10px;
          }
        }

      }
      &.sift {
        flex-wrap: wrap;
      }
    }
  }
</style>