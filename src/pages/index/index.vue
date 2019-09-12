<template>
  <div class="index">
    <s-header></s-header>
    <swiper :indicator-dots="true" class="s-swiper">
      <swiper-item v-for="(ban, index) in banner" :key="index">
        <img :src="ban.bannerimg" class="s-img bg" />
      </swiper-item>
    </swiper>
    <div class="nav">
      <div
        v-for="(item,index) in navList"
        :key="index"
        :span="4"
        class="nav-item fz12 text-c"
        @click="goPage(item.api_id)"
      >
        <img :src="item.icon" />
        <p>{{item.title}}</p>
      </div>
    </div>
    <div class="join-us pr" @click="goJoin">
      <img src="../../assets/icon/join.png" alt />
      <div class="btn-join"></div>
    </div>
    <div class="suggest">
      <div class="suggest-left pr">
        <!-- <img :src="suggest[0].icon" /> -->
        <img src="../../assets/img/good.png" alt />
        <div>
          <div class="sug-item">
            <!-- <div class="sug-item-title fw-600 fz15 mb-6">{{suggest[0].title}}</div>
            <div class="mb-10 fz12 c-21">{{suggest[0].des&&suggest[0].des}}</div>-->
            <div class="sug-item-btn bg-f1" @click="getCategray('goods')">立即进入 ></div>
          </div>
        </div>
      </div>
      <div class="suggest-right pr">
        <div class="suggest-top">
          <!-- <img :src="suggest[1].icon" alt /> -->
          <img src="../../assets/img/cat.png" alt />
          <div class="sug-item">
            <!-- <div class="sug-item-title fw-600 fz15 mb-6">{{suggest[1].title}}</div>
            <div class="mb-10 fz12 c-21">{{suggest[1].des&&suggest[1].des}}</div>-->
            <div class="sug-item-btn bg-7d" @click="getCategray('cat')">立即进入 ></div>
          </div>
        </div>
        <div class="suggest-bottom pr">
          <!-- <img :src="suggest[2].icon" alt /> -->
          <img src="../../assets/img/dog.png" alt />
          <div class="sug-item">
            <!-- <div class="sug-item-title fw-600 fz15 mb-6">{{suggest[2].title}}</div>
            <div class="mb-10 fz12 c-21">{{suggest[2].des&&suggest[2].des}}</div>-->
            <div class="sug-item-btn bg-3f" @click="getCategray('dog')">立即进入 ></div>
          </div>
        </div>
      </div>
    </div>
    <div class="s-title">
      <span class="ms fw-600">今日秒杀</span>
      <span class="time fz12">距本场秒杀结束剩余 {{timeStr}}</span>
      <img src="../../assets/icon/more.png" alt class="more" @click="getMore('skill')" />
    </div>
    <div class="seckill">
      <seckill-item
        :seck="seck"
        v-for="(seck,index) in seckillList"
        :key="index"
        @itemClick="goDetail"
      ></seckill-item>
    </div>
    <div class="s-title good-suggest">
      <span class="ms fw-600">好物推荐</span>
      <img src="../../assets/icon/more.png" class="more" @click="getMore('goods')" />
    </div>
    <div class="goods">
      <product-item v-for="(pro,index) in proList" :key="index" :pro="pro" @goDetail="goDetail"></product-item>
    </div>
  </div>
</template>

<script>
import seckillItem from '@/components/seckillItem'
import productItem from '@/components/productItem'
import sHeader from '@/components/s-header'

export default {
  data() {
    return {
      value: '',
      timeStr: '',
      banner: [],
      suggest: [],
      navList: [],
      seckillList: [],
      str: '',
      proList: [],
      killTime: ''
    }
  },

  components: {
    seckillItem,
    productItem,
    sHeader
  },
  mounted() {
    this.timeDown(this.killTime)
    this.initData()
  },
  methods: {
    async initData() {
      let res = await this.$api.getIndexData()
      if (res.msg == 'Success') {
        this.banner = res.data.banner
        this.navList = res.data.titlelcon1
        this.suggest = res.data.titlelcon2
        this.seckillList = res.data.Activitydictionaryy.ListArray
        this.proList = res.data.ListArray
        this.killTime = res.data.Activitydictionaryy.date
        let sessionId = res.data.sessionId
        wx.setStorageSync('sessionId', sessionId)
      }
    },
    spliceImg(data) {
      data.forEach(item => {
        if (item) {
          item.grouppictures &&
            item.grouppictures.subString(0, item.grouppictures.length - 1)
          console.log(item.item.grouppictures, 1111)
        }
      })
    },
    bindViewTap() {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    goJoin() {
      mpvue.navigateTo({ url: '../joinUs/main' })
    },
    timeDown(endDateStr) {
      let timer = setInterval(() => {
        // var endDate = new Date(endDateStr);
        var endDate = endDateStr
        var nowDate = new Date()
        var totalSeconds = parseInt((endDate - nowDate) / 1000)
        if (totalSeconds <= 0) {
          clearInterval(timer)
          this.timeStr = '00:00:00'
        } else {
          var days = Math.floor(totalSeconds / (60 * 60 * 24))
          var modulo = totalSeconds % (60 * 60 * 24)
          var hours = Math.floor(modulo / (60 * 60))
          modulo = modulo % (60 * 60)
          var minutes = Math.floor(modulo / 60)
          var seconds = modulo % 60
          hours = hours < 10 ? '0' + hours : hours
          minutes = minutes < 10 ? '0' + minutes : minutes
          seconds = seconds < 10 ? '0' + seconds : seconds
          this.timeStr = hours + ':' + minutes + ':' + seconds
        }
      }, 1000)
    },
    goDetail(id) {
      console.log(id)
      wx.navigateTo({ url: '../product/main?id=' + id })
    },
    getMore(type) {
      if(type=='skill'){
        wx.switchTab({url:'../activity/main'})
      }else {
        wx.navigateTo({url:'../goods/main'})
      }
      // wx.navigateTo({ url: '../productList/main?type=' + type })
    },
    goPage(id) {
      if(id=='0011') {
         wx.navigateTo({ url: '../newMember/main' })
      }else if(id=='0012') {
         wx.navigateTo({ url: '../dayly/main' })
      }else if(id=='0013') {
         wx.navigateTo({ url: '../exchange/main' })
      }else {
        wx.navigateTo({ url: '../productList/main' })
      }
      // switch (id) {
      //   case '0001':
      //     wx.navigateTo({ url: '../productList/main' })
      //     break
      //   case '0002':
      //     wx.navigateTo({ url: '../productList/main' })
      //     break
      //   case '0003':
      //     wx.navigateTo({ url: '../productList/main' })
      //     break
      //   case '0004':
      //     wx.navigateTo({ url: '../productList/main' })
      //     break
      //   case '0005':
      //     wx.navigateTo({ url: '../productList/main' })
      //     break
      //   case '0006':
      //     wx.navigateTo({ url: '../productList/main' })
      //     break
      //   case '0011':
      //     wx.navigateTo({ url: '../newMember/main' })
      //     break
      //   case '0012':
      //     wx.navigateTo({ url: '../dayly/main' })
      //     break
      //   case '0013':
      //     wx.navigateTo({ url: '../exchange/main' })
      //     break
      // }
    },
    getCategray(data) {
      wx.navigateTo({ url: `../${data}/main` })
    }
  }
}
</script>

<style lang="less">
.s-swiper {
  height: 198px;
  swiper-item {
    height: 198px;
  }
  .s-img {
    height: 100%;
  }
}
.nav {
  display: flex;
  flex-wrap: wrap;
  padding: 0 10px;
  justify-content: space-between;
  margin-top: 35px;
  .nav-item {
    flex: 0 0 20%;
    color: #696969;
    margin-bottom: 10px;
    img {
      margin: 0 auto;
      width: 47px;
      height: 47px;
      margin-bottom: 10px;
    }
  }
}
.join-us {
  height: 90px;
  margin-bottom: 24px;
  img {
    width: auto;
    height: 90px;
  }
}
.suggest {
  display: flex;
  img {
    width: 100%;
    height: 100%;
  }
  .sug-item {
    position: absolute;
    top: 60px;
    left: 11px;
    .sug-item-btn {
      width: 56px;
      height: 16px;
      line-height: 16px;
      text-align: center;
      color: #fff;
      font-size: 9px;
      border-radius: 8px;
    }
  }
  .suggest-left {
    height: 190px;
    width: 375px;
    margin-right: 5px;
    border-radius: 5px;
  }
  .suggest-right {
    .suggest-top {
      width: 175px;
      height: 93px;
      margin-bottom: 5px;
      border-radius: 5px;
    }
    .suggest-bottom {
      width: 175px;
      height: 93px;
      border-radius: 5px;
    }
  }
}
.s-title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;
  line-height: 28px;
  border-left: 6px solid #fbad52;
  padding-left: 6px;
  margin-top: 24px;
  margin-bottom: 17px;
  &.good-suggest {
    justify-content: space-between;
  }
  .ms {
    color: #212121;
    font-size: 15px;
    margin-right: 13px;
  }
  .time {
    color: #212121;
    margin-right: 79px;
  }
  .more {
    width: 33px;
    height: 13px;
  }
}
.seckill {
  display: flex;
  flex-wrap: nowrap;
}
.goods {
  margin-bottom: 20px;
  padding: 0 10px;
  background-color: #fff;
}
.block {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 25px;
  background-color: #ed9126;
}
.btn-join {
  position: absolute;
  width: 60px;
  height: 20px;
  right: 10px;
  bottom: 20px;
}
</style>
