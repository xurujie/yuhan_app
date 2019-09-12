<template>
  <div class=" addcomment">
    <div class="pro mb-10">
      <img src="" alt="" class="mr-10 pro-img">
      <div class="info">
        <h5 class="c-64 fz12 lh-13 mb-6">【宠儿香】 康源益生菌5g*25 猫犬通用</h5>
        <p class="fz12 c-9d mb-20"><span>规格：5g*25</span><span>猫犬通用</span></p>
        <p class="fz18 c-ef">150.00 <span class="c-64 fz9">×50</span></p>
      </div>
    </div>
    <div class="content">
      <div class="title c-64 fz11 mb-10">评论详情</div>
      <div class="text">
        <textarea  placeholder="请输入评论内容500字以内" placeholder-style="color:#9D9D9D;font-size:9px;" maxlength="300" cols="30" rows="10" ></textarea>
      </div>
    </div>
    <div class="btn c-21 bg-fb text-c">提交评论</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tel:'',
      password:''
    }
  },
  methods: {
   
  },
}
</script>

<style lang="less">
page {
  background-color: rgb(248, 248, 248);
}
.addcomment {
  .pro {
    display: flex;
    padding: 10px 15px;
    .pro-img {
      width: 84px;
      height: 84px;
    }
  }
  .content {
    background-color: #fff;
    padding: 10px 15px;
    .title {
      padding-bottom: 10px;
    }
    textarea {
      padding:10px;
      background-color: rgb(248, 248, 248);
      font-size: 11px;
    }
  }
  .btn {
    height: 50px;
    line-height: 50px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
  
</style>