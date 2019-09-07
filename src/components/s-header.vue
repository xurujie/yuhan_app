<template>
  <div class="search pr">
    <input type="text" class="fz12" placeholder="狗狗主粮">
    <div class="logo pa">
      <img src="../assets/img/logo.png" alt="">
    </div>
    <van-icon name="search" class="icon-search pa"></van-icon>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less">
  .search {
  padding: 6px 0;
  input {
    width: 100%;
    height: 30px;
    line-height: 30px;
    padding-left: 190px;
    border: 1px solid #adadad;
    border-radius: 20px;
    &::placeholder {
      color:#e7e7e7;
    }
  }
  .logo {
    left: 20px;
    top: 11px;
    &::after {
      content:'';
      position: absolute;
      width: 1px;
      height: 13px;
      background-color: #cfcfcf;
      right: -15px;
      top: 5px;
    }
    img {
      
      height: 20px;
      width: 130px;
    }
  }
  .icon-search  {
      top: 12px;
      right: 30px;
      font-size: 18px;
      color:#cfcfcf;
  }
}
</style>