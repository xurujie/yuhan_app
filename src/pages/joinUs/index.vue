<template>
  <div class="joinUs">
    <!-- <img src="../../assets/img/join.jpg" alt=""> -->
    <div class="btn-openVip bg-fb fz15 " @click="openVip">立即开通煜宠会员</div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    openVip() {
      mpvue.navigateTo({url:'../recharge/main'})
    }
  },
}
</script>

<style lang="less">
  .joinUs {
    img {
      width: 100%;
      height: 900px;
    }
    .btn-openVip {
      height: 50px;
      line-height: 50px;
      text-align: center;
    }
  }
</style>