<template>
  <div class="page-footer">
    <ul class="footer-bar">
      <li>
        <div class="footer-li-group opacity" :class="{'this-over' : this.$store.state.footTabActive === 'index'}" @click="changeFootTab('index')" ontouchstart="">
          <i class="footer-icon-index"></i>
          <span>首页</span>
        </div>
      </li>
      <li>
        <div class="footer-li-group opacity" :class="{'this-over' : this.$store.state.footTabActive === 'nearby'}" @click="changeFootTab('nearby')" ontouchstart="">
          <i class="footer-icon-nearby"></i>
          <span>附近</span>
        </div>
      </li>
      <li>
        <div class="footer-li-group opacity" :class="{'this-over' : this.$store.state.footTabActive === 'cart'}" @click="changeFootTab('cart')" ontouchstart="">
          <i class="footer-icon-cart"></i>
          <span>购物车</span>
        </div>
      </li>
      <li>
        <div class="footer-li-group opacity" :class="{'this-over' : this.$store.state.footTabActive === 'mine'}" @click="changeFootTab('mine')" ontouchstart="">
          <i class="footer-icon-mine"></i>
          <span>我的</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'vFooter',
  // 数据存放区
  data () {
    return {}
  },
  // 过滤器
  filters: {},
  // 挂载完成
  mounted: function () {},
  // 方法
  methods: {
    // 关闭登录弹窗
    changeFootTab (type) {
      let u = window.location.href
      if (this.$store.state.footTabActive === type && (u.indexOf('classify') === -1)) return
      this.$router.push({
        path: '/' + type,
        query: {}
      })
    }
  }
}
</script>

<style>
.footer-bar {
  width: 100vw;
  height: .95rem;
  position: fixed;
  left: 0;
  bottom: 0;
  border-top: .5px solid #e6e6e6;
  background: #fff
}

.footer-bar li {
  display: inline-block;
  width: 25vw;
  float: left;
  text-align: center
}

.footer-bar li .footer-li-group {
  width: 20vw;
  height: .85rem;
  margin: 0 auto;
  padding-top: .07rem;
}

.footer-bar li .footer-li-group i {
  display: inline-block;
  width: .6rem;
  height: .6rem;
  margin: 0 auto;
}

.footer-bar li .footer-li-group i.footer-icon-index {
  background: url('https://api.duishangbao.cn/upload/image/icon_zu3.png') no-repeat .02rem 0 / 1rem 7rem;
}

.footer-bar li .footer-li-group.this-over i.footer-icon-index {
  background: url('https://api.duishangbao.cn/upload/image/icon_zu3.png') no-repeat .02rem -.7rem / 1rem 7rem;
}

.footer-bar li .footer-li-group i.footer-icon-nearby {
  background: url('https://api.duishangbao.cn/upload/image/icon_zu3.png') no-repeat .03rem -1.39rem / 1rem 7rem;
}

.footer-bar li .footer-li-group.this-over i.footer-icon-nearby {
  background: url('https://api.duishangbao.cn/upload/image/icon_zu3.png') no-repeat .03rem -2.09rem / 1rem 7rem;
}

.footer-bar li .footer-li-group i.footer-icon-cart {
  background: url('https://api.duishangbao.cn/upload/image/icon_zu3.png') no-repeat 0 -2.78rem / 1rem 7rem;
}

.footer-bar li .footer-li-group.this-over i.footer-icon-cart {
  background: url('https://api.duishangbao.cn/upload/image/icon_zu3.png') no-repeat 0 -3.48rem / 1rem 7rem;
}

.footer-bar li .footer-li-group i.footer-icon-mine {
  background: url('https://api.duishangbao.cn/upload/image/icon_zu3.png') no-repeat .03rem -4.19rem / 1rem 7rem;
}

.footer-bar li .footer-li-group.this-over i.footer-icon-mine {
  background: url('https://api.duishangbao.cn/upload/image/icon_zu3.png') no-repeat .03rem -4.89rem / 1rem 7rem;
}

.footer-bar li .footer-li-group span {
  display: inline-block;
  width: 20vw;
  font-size: .22rem;
  color: #1a1a1a;
  line-height: .26rem;
  overflow: hidden;
  float: left;
  text-align: center;
  margin-top: -.12rem;
}

.footer-bar li .footer-li-group.this-over span {
  color: #e62343
}
</style>
