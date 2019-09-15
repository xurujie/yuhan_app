<template>
  <div class="pro mb-10">
    <img :src="pro.grouppictures" alt="" class="mr-10 pro-img">
    <div class="info">
      <h5 class="c-64 fz12 lh-13 mb-6">{{pro.merchandise}}</h5>
      <p class="fz12 c-9d mb-20"><span>规格：{{pro.secondsbargain}}</span><span>{{pro.suitableobject}}</span></p>
      <p class="fz18 c-ef">{{pro.price}}<span class="c-64 fz9">×{{pro.num}}</span></p>
    </div>
  </div>
</template>


<script>
export default {
  props:{
    pro:{
      type:Object
    }
  }
}
</script>

<style lang="less">
  .pro {
    display: flex;
    padding: 10px 15px;
    .pro-img {
      width: 84px;
      height: 84px;
    }
  }
</style>