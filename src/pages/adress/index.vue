<template>
  <div class="add-adress">
    <div class="cell mb-3 fz13 c-9d">
      <div>收货人</div> 
      <div class="right">
        <div class=" pr-20 ">收货人姓名</div>
        <div class="arrow-right pr"></div> 
      </div>
    </div>
    <div class="cell mb-3 fz13 c-9d">
      <div>手机号码</div> 
      <div class="right">
        <div class=" pr-20 ">1XXXXXXXXXX</div>
        <div class="arrow-right pr"></div> 
      </div>
    </div>
    <div class="cell mb-3 fz13 c-9d">
      <div>所在地区</div> 
      <div class="right">
        <div class=" pr-20 ">选择地区</div>
        <div class="arrow-right pr"></div> 
      </div>
    </div>
    <div class="cell mb-3 fz13 c-9d">
      <div>收货地址</div> 
      <div class="right">
        <div class=" pr-20 ">详细收货地址</div>
        <div class="arrow-right pr"></div> 
      </div>
    </div>
    <div class="cell mb-3 fz13 c-9d">
      <div>默认地址</div> 
      <div class="right">
        <switch checked></switch>
      </div>
    </div>
    <div class="footer bg-fb text-c c-21 fz15" @click="addAdress">
      确定
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    addAdress() {
      console.log('add')
    }
  },
}
</script>

<style lang="less">
  .add-adress {
    .cell {
      height: 50px;
      line-height: 50px;
      padding: 0 10px;
      display: flex;
      justify-content: space-between;
      .right {
        display: flex;
        switch {
          zoom: 0.6;
        }
      }
    }
    .footer {
      height: 50px;
      line-height: 50px;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
    }
  }
</style>