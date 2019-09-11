<template>
  <div class="cat">
    <div class="cat-nav">
      <img src="../../assets/img/m1.png" alt  @click="goSearch"/>
      <img src="../../assets/img/m2.png" alt  @click="goSearch"/>
      <img src="../../assets/img/m3.png" alt  @click="goSearch"/>
      <img src="../../assets/img/m4.png" alt @click="goSearch" />
      <img src="../../assets/img/m5.png" alt class="middle" @click="goSearch" />
    </div>
    <div class="p-title today">
      <span>今日特卖</span>
      <div class="fz9 btn-change" @click="changeKill">换一组</div>
    </div>
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
      let res = await this.$api.getCatigray({ pageNumber:this.num, pageSize:this.size, type: '0009' })
      this.killList = res.data.ListArray
    },
    async getProList() {
      let res = await this.$api.getGoods({ pageSize:this.pageSize,pageNumber:this.pageNumber })
      this.count = res.data.count
      this.proList = this.proList.concat(res.data.ListArray)
    },
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
.cat {
  padding: 10px;
  .cat-nav {
    margin: 0 10px;
    height: 126px;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    img {
      width: 165px;
      height: 62px;
      margin-bottom: 1px;
      &.middle {
        width: 106px;
        height: 106px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
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
    flex-wrap: wrap;
    justify-content: space-between;
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