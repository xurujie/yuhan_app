<template>
  <div class="dog">
    <div class="cat-nav">
      <img src="../../assets/img/g1.png" alt @click="goSearch()"/>
      <img src="../../assets/img/g2.png" alt @click="goSearch()"/>
      <img src="../../assets/img/g3.png" alt @click="goSearch()"/>
      <img src="../../assets/img/g4.png" alt @click="goSearch()"/>
    </div>
    <div class="p-title today">
      <span>今日特卖</span>
      <div class="fz9 btn-change" @click="changeKill">换一组</div>
    </div>
    <div class="sale kill mb-20">
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
      pageSize: 10,
      pageNumber: 1,
      proList: [],
      killList: [],
      count: 12,
      size: 3,
      num: 1,
      count2: 4
    }
  },
  mounted() {
    this.init()
    this.getProList()
  },
  methods: {
    async init() {
      let res = await this.$api.getCatigray({ pageNumber:this.num, pageSize:this.pageNumber, type: '0009' })
      this.killList = res.data.ListArray
    },
    async getProList() {
      let res = await this.$api.getGoods({ pageNumber:this.pageNumber, pageSize:this.pageSize })
      this.proList = this.proList.concat(res.data.ListArray)
    },
    // async getTopData() {
    //   let res = this.$api.MerchandiseImg()
    // },
    changeKill() {
      this.num++
      this.init()
    },
    goSearch(id) {
       wx.navigateTo({url:'../productList/main'})
    }
  },
  components: {
    activityItem
  }
}
</script>

<style lang="less">
.dog {
  padding: 10px;
  .cat-nav {
    // margin: 0 10px;
    height: 126px;
    display: flex;
    flex-wrap: wrap;
    img {
      width: 170px;
      height: 58px;
      margin-right: 17px;
      &:nth-child(2n) {
        margin-right: 0;
      }
    }
  }
  .p-title {
    &.today {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .btn-change {
        background-color: #fbad52;
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
    flex-wrap: nowrap;
    justify-content: space-between;
    &.kill {
      // .activityItem {
      //   &:nth-child(3n) {
      //     margin-right: 10px;
      //   }
      // }
    }
    &.sift {
      flex-wrap: wrap;
    }
  }
}
</style>