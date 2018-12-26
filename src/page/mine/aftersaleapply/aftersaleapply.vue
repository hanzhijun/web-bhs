<template>
  <div class="out-side-aftersaleapply">

    <div class="head-bar-fixed">
      <span class="head-btn-return opacity" @click="goBack" ontouchstart=""></span>
      <div class="list-title fs-32 fc-ff">{{ title }}</div>
    </div>

    <div class="goods-bar">
      <div class="goods-img">
        <img src="https://img.duishangbao.cn/upload/goods/imgs/32/18a65547982d717dc220fb133e1d8bcf.jpeg">
      </div>
      <div class="goods-main">
        <span class="name fs-28 fc-0d text-overflow-2">秋水伊人衬衫2018冬装新款女装时尚系带简约纯色明线上衣女</span>
        <span class="sku fs-22 fc-b2 text-overflow">卡其色;170/92A/XL</span>
        <div class="price-bar">
          <span class="txt fs-28 fc-0d">实付金额</span>
          <span class="price fs-28 fc-e6">￥168.00</span>
        </div>
      </div>
    </div>

    <ul class="after-ul">
      <li class="after-li opacity" ontouchstart="">
        <span class="txt">换货原因</span>
        <i class="icon"></i>
      </li>
      <li class="after-li">
        <span class="txt">换货说明：</span>
      </li>
      <li class="after-li" ontouchstart="">
        <textarea class="text-area" placeholder="陈述您遇到的问题..."></textarea>
      </li>
    </ul>

    <div class="up-load-bar">
      <div class="up-load-title fs-32 fc-1a">上传凭证</div>
      <div class="img-group">
        <div class="img-group-k"><img src="https://img.duishangbao.cn/upload/goods/list/13/57df3532333e8e3e87ab963f137db674.png"></div>
        <div class="img-group-k"><img src="https://img.duishangbao.cn/upload/goods/list/13/57df3532333e8e3e87ab963f137db674.png"></div>
        <div class="img-group-k"><img src="https://img.duishangbao.cn/upload/goods/list/13/57df3532333e8e3e87ab963f137db674.png"></div>
        <div class="img-group-k"><img src="https://img.duishangbao.cn/upload/goods/list/13/57df3532333e8e3e87ab963f137db674.png"></div>
        <div class="img-group-k"><img src="https://img.duishangbao.cn/upload/goods/list/13/57df3532333e8e3e87ab963f137db674.png"></div>
        <a class="up-load-btn opacity" href="javascript:void(0)" ontouchstart=""><span class="icon"></span><span class="txt-up fs-24 fc-1a">上传图片</span><span class="txt-b fs-20 fc-99">(最多6张)</span></a>
      </div>
    </div>

    <a class="form-btn opacity fs-32 fc-ff" href="javascript:void(0)" ontouchstart="">提交</a>

  </div>
</template>

<script>
export default {
  name: 'afterSaleApply',
  // 数据存放区
  data () {
    return {
      title: '售后申请',
      addressList: []
    }
  },
  // 过滤器
  filters: {},
  // 挂载完成
  mounted () {
  },
  // 方法
  methods: {
    /**
     * 返回上一页
     */
    goBack () {
      this.$global.goBack(this)
    }
  }
}
</script>

<style>
  @import 'aftersaleapply.styl';
</style>
