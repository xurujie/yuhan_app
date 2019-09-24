<template>
  <div class="addAdress">
    <div class="adress-item mb-6 bg-f">
      <div class="left lh-2">
        <div class="fz12 c-2a">收货人：XXX <span class="c-9d fz10 ml-40">13500000000</span></div>
        <div class="fz10 c-2a address">收货地址：<span style="max-width:100px;display:inline-block;">XXXXXXXXXXXXXXXX                XXXXXX</span></div>
      </div>
      <div class="right">
        <img src="../../assets/icon/edit-1.png" alt="">
      </div>
    </div>
    <div class="adress-item mb-6 bg-f">
      <div class="left lh-2">
        <div class="fz12 c-2a">收货人：XXX <span class="c-9d fz10 ml-40">13500000000</span></div>
        <div class="fz10 c-2a address">收货地址：<span style="max-width:100px;display:inline-block;">XXXXXXXXXXXXXXXX                XXXXXX</span></div>
      </div>
      <div class="right">
        <img src="../../assets/icon/edit-1.png" alt="">
      </div>
    </div>
    <div class="footer text-c c-21 fa15">新增收货地址</div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    
  },
}
</script>

<style lang="less">
page {
  background-color: rgb(248,248,248);
}
  .addAdress {
    padding-top: 10px;
    .adress-item {
      padding: 10px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left {
        .address {
          display: flex;
          align-items:baseline;
        }
      }
      .right {
        img {
          width: 12px;
          height: 12px;
        }
      }
    }
    .footer {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 50px;
      line-height: 50px;
      background-color: #FBAD52;
    }
  }
</style>