<template>
  <div class="a-activity">
    <div class="header">
      <div class="header-item">狗狗特卖</div>
      <div class="header-item">秒杀</div>
      <div class="header-item">特卖</div>
      <div class="header-item">折扣</div>
    </div>
    <div class="main">
      <activity-item type="score"></activity-item>
    </div>
  </div>
</template>

<script>
import activityItem from '@/components/activityItem'
export default {
  data() {
    return {

    }
  },
  methods: {
    
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
  }
</style>