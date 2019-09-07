<template>
  <div class="vipInfo">
    <div class="tip bg-f">亲爱的用户，根据法律规定需要对您的身份信息进行验证，请如实填 写一以下信息，我司将对您填写的信息予以保密感谢配合。</div>
    <div class="block-f5"></div>
    <div class="userInfo bg-f">
      <div class="user-info-item line-b">
        <div class="name">姓名</div>
        <input type="text">
        
      </div>
      <div class="user-info-item line-b">
        <div class="name">身份证号</div>
        <input type="number">
        
      </div>
      <div class="user-info-item line-b">
        <div class="name">手机号</div>
        <input type="number">
        <div></div>
      </div>
      <div class="user-info-item line-b">
        <div class="name">图形验证码 </div>
        <div class="item-right">
          <input type="text" v-model="imgCode" @change="vilidateImgCode">
          <div class="code pr" @click="refresh">
            <canvas style="width:160rpx;height:60rpx;position:absolute;right:0rpx;bottom:10rpx;text-align: center;z-index:9999;" canvas-id="canvas"></canvas>
          </div>
        </div>
      </div>
      <div class="user-info-item line-b">
        <div class="name">验证码 </div>
        <div class="item-right">
          <input type="text">
          <div class="getcode">获取验证码 </div>
        </div>
      </div>
    </div>
    <div class="vip-btn bg-fb fz15 text-c">完成</div>
  </div>
</template>

<script>
 import mcaptcha from '../../utils/mcaptcha'
export default {
  data() {
    return {
      imgCode:''
    }
  },
  mounted() {
    this.mcaptcha = new mcaptcha({
      el: 'canvas',
      width: 80,
      height: 28,
      createCodeImg: ""
      })
    
  },
  methods: {
    refresh() {
      this.mcaptcha.refresh()
    },
    vilidateImgCode() {
      
      let res = this.mcaptcha.validate(this.imgCode)
      if(!res) {
        wx.showToast({
          title: '请重新输入',
          icon:'none',
          duration: 1000
        })
      }
    }
  },
}
</script>

<style lang="less">
  page{
    background-color: #fff;
  }
  .vipInfo {
    position: relative;
    height: 100vh;
    .tip {
      font-size: 11px;
      line-height: 18px;
      color: #696969;
      text-indent: 2em;
      padding: 17px 13px;
      
    }
    .block-f5 {
      height: 6px;
      background-color: #f5f5f5;
    }
    .userInfo {
      padding: 0 10px;
      .user-info-item {
        color: #212121;
        font-size: 14px;
        display: flex;
        height: 40px;
        line-height: 40px;
        display: flex;
        align-items: center;
        .name {
          width: 80px;
        }
        .item-right {
          flex: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .getcode {
            width: 70px;
            height: 20px;
            line-height: 20px;
            border: 1px solid #696969;
            text-align: center;
            margin-right: 18px;
            border-radius: 5px;
            font-size: 12px;
          }
        }
        .code {
          width: 83px;
          height: 40px;
          // border: 1px solid #696969;
          margin-right: 18px;
          border-radius: 5px;
        }
      }
    }
    .vip-btn {
      width: 100%;
      height: 50px;
      line-height: 50px;
      position: absolute;
      bottom: 0;
      color: #212121;
    }
  }
</style>