<template>
  <div class="out-app">
    <router-view v-wechat-title="$route.meta.title"></router-view>
    <v-include></v-include>
    <!--<iframe id="geoPage" width=0 height=0 frameborder=0  style="display:none;" scrolling="no" src="https://apis.map.qq.com/tools/geolocation?key=3ZRBZ-FIAW5-3VRIM-QSRDF-5L2TK-DYFF7"></iframe>-->
  </div>
</template>
<script>
import include from './components/include/include'
export default {
  // 数据存放区
  data () {
    return {
      loc: '',
      key: '3ZRBZ-FIAW5-3VRIM-QSRDF-5L2TK-DYFF7'
    }
  },
  // 注册组件
  components: {
    'v-include': include
  },
  // 过滤器
  filters: {
    /**
     * 数值保留两位小数过滤器
     * @param data
     * @returns {string}
     */
    priceNum: function (data) {
      return data.toFixed(2)
    }
  },
  // 挂载完成 created-> mounted-> activated
  created () {
    // this.Tmap()
    console.log(101 + 'created - start')
    console.log(this.$store.state.isLogin)
    console.log(101 + 'created - end')
    console.log(this.$store.state.isLogin)
  },
  mounted () {
    console.log(102 + 'mounted - start')
    console.log(this.$store.state.isLogin)
    let session = this.$global.getCookie('session')
    if (!session) {
      this.$store.state.isLogin = 0
    } else {
      this.$store.state.isLogin = 1
      this.getUserCapital()
    }
    // rem等比例适配所有屏幕
    this.$global.htmlResize(this)
    window.addEventListener('resize', this.$global.htmlResize, false)
    this.$global.getLocation(this, this.$global.getAddrName)
    console.log(102 + 'mounted - end')
    console.log(this.$store.state.isLogin)
  },
  activated () {
    console.log(103 + 'activated - start')
    console.log(this.$store.state.isLogin)
    console.log(103 + 'activated - end')
    console.log(this.$store.state.isLogin)
  },
  deactivated () {
    console.log(104 + 'deactivated - start')
    console.log(this.$store.state.isLogin)
    console.log(104 + 'deactivated - end')
    console.log(this.$store.state.isLogin)
    alert('deactivated')
  },
  // 方法
  methods: {
    getUserCapital: function () {
      let _this = this
      this.$global.myAjax(this, 'get', 'bhs-client-online/userCapital/detail', '{}', function (res) {
        if (res.data.code * 1 === 1) {
          let obj = res.data.data
          _this.$global.setUserCapital(_this, obj)
        }
      }, function (reg) {
        console.info(reg)
      })
    },
    Tmap () {
      /* window.addEventListener('message', function (event) {
        if (event.data) {
          this.loc = event.data // 接收位置信息
          if (this.loc) {
            alert(this.loc)
          }
        }
      }, false)
      setTimeout(function () {
        if (!this.loc) {
          console.log('定位超时')
        }
      }, 8000) */ //
      /* TMap(this.key).then(function (qq) {
        let geolocation = new qq.maps.GroundOverlay('3ZRBZ-FIAW5-3VRIM-QSRDF-5L2TK-DYFF7', 'myapp')
        geolocation.getLocation(
          function sucCallback (position) {
            console.log(position)
          }, function errCallback (err) {
            console.log(err)
          }
        )
      }) */
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import './common/style/index.styl';
</style>
