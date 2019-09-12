<template>
 <div>
    <div class="good-item bg-f" v-for="(item, index) in list" :key="index">
      <div class="good-img-box line-b">
        <img src="" class="good-img">
        <div class="good-tag">限{{item.Integral.sum}}个</div>
      </div>
      <div class="good-title c-21 fz9">{{item.merchandiseShow.merchandise}}</div>
      <div class="good-info fz9">
          <p class="c-666">{{item.Integral.need_integral}}积分+{{item.Integral.need_price}}</p> 
          <div class="df vip">
            <img src="../../assets/icon/vip-small.png" class="tag-vip">
            <p class="c-ef">{{item.Integral.vipneed_integral}}积分+{{item.Integral.vipneed_price}}</p>
          </div>
      </div>
      <img src="" class="shop-car">
    </div>
 </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less">
  
</style>