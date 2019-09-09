<template>
  <div class="joinUs">
    <img src="../../assets/img/join.jpg" alt />
    <div class="qa">
      <div class="qa-item" v-for="item in list" :key="item.id">
        <div class="title c-21 fz13 mb-10">{{item.title}}</div>
        <div class="des c-69 fz10">{{item.answer}}</div>
      </div>
    </div>
    <div class="btn-openVip bg-fb fz15" @click="openVip">立即开通煜宠会员</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      let res = await this.$api.getQa({ type: 1 })
      this.list = res.data.issues
    },
    openVip() {
      mpvue.navigateTo({ url: '../recharge/main' })
    }
  }
}
</script>

<style lang="less">
page {
  background-color: rgb(253, 239, 228);
}
.joinUs {
  img {
    width: 100%;
    height: 900px;
  }
  .qa {
    margin: 10px;
    background-color: #fff;
    width: 355px;
    padding: 25px 35px;
    margin-bottom: 30px;
    border-radius: 5px;
    .qa-item {
      margin-bottom: 20px;
      .des {
        line-height: 15px;
      }
    }
  }
  .btn-openVip {
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
}
</style>