<template>

  <div class="out-side-bindtel">

    <div class="head-bar-fixed">
      <span class="head-btn-return opacity" @click="goBack" ontouchstart=""></span>
      <div class="list-title fs-32 fc-ff">{{ title }}</div>
    </div>

    <div class="bindtel-note-txt">为了你的账户安全 请绑定你的手机号</div>

    <ul class="bindtel-main">
      <li>
        <span class="name black">+86</span>
        <input class="text-box" type="number" placeholder="请输入手机号" v-model="mobile">
      </li>
      <li>
        <span class="name">验证码</span>
        <input class="text-box" type="number" placeholder="请输入验证码" v-model="verifyCode">
        <a class="time opacity" href="javascript:void(0)" ontouchstart="" @click="getVerificationCode">{{ time }}</a>
      </li>
      <li class="bind-tel-btn">
        <a class="opacity" href="javascript:void(0)" @click="bindMobile" ontouchstart="">绑定</a>
      </li>
    </ul>

  </div>

</template>

<script>
export default {
  name: 'bindTel',
  // 数据存放区
  data () {
    return {
      title: '绑定手机',
      fun_id: 2,
      time: '获取验证码', // 倒计时
      currentTime: 61,
      interval: null,
      mobile: '',
      verifyCode: '',
      verifyId: '',
      history: '',
      disabled: true
    }
  },
  // 过滤器
  filters: {},
  // 挂载完成
  mounted () {},
  // 方法
  methods: {
    test () {
      console.log(this.mobile)
    },
    /**
     * 返回上一页
     */
    goBack () {
      this.$global.goBack(this)
    },
    // 绑定手机
    bindMobile () {
      let obj = {
        mobile: this.mobile,
        verifyCode: this.verifyCode,
        verifyId: this.verifyId
      }
      let _this = this
      this.$global.myAjax2(this, 'post', 'bhs-ucenter/ucenter/modify/bindMobile', obj, function (res) {
        if (res.data.code * 1 === 1) {
          _this.$global.showToast(_this, '手机号绑定成功!')
        }
      }, function (reg) {
        console.info(reg)
      })
    },
    /**
     * 绑定手机发送验证码
     * @returns {boolean}
     */
    getVerificationCode () {
      // 判断输入手机号
      let mobile = this.mobile
      if (!this.disabled) return
      if (!this.checkPhoneNum(mobile)) {
        return false
      }
      let obj = {
        mobile
      }
      let _this = this
      this.$global.myAjax2(this, 'post', 'bhs-ucenter/ucenter/modify/getBindMobileVerifyId', obj, function (res) {
        if (res.data.code * 1 === 1) {
          _this.verifyId = res.data.data
          _this.$global.showToast(_this, '已经向手机' + mobile + '发送了短信验证码')
          _this.disabled = false
          _this.timeCountdown()
        }
      }, function (reg) {
        console.info(reg)
      })
    },
    /**
     * 检查手机号码有效性
     * @param mobile
     * @returns {boolean}
     */
    checkPhoneNum (mobile) {
      var myreg = /^1[345789]{1}\d{9}$/
      if (mobile.length === 0) {
        this.$global.showToast(this, '手机号不能为空')
        return false
      } else if (mobile.length < 11) {
        this.$global.showToast(this, '手机号长度有误！')
        return false
      } else if (!myreg.test(mobile)) {
        this.$global.showToast(this, '手机号有误！')
        return false
      }
      return true
    },
    /**
     * 倒计时
     */
    timeCountdown () {
      let _this = this
      let currentTime = _this.currentTime
      _this.interval = setInterval(function () {
        currentTime--
        _this.time = currentTime + '秒'
        if (currentTime <= 0) {
          clearInterval(_this.interval)
          _this.time = '重新发送'
          _this.currentTime = 61
          _this.disabled = true
        }
      }, 1000)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import 'bindtel.styl';
</style>
