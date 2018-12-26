import Utils from '@/util/util.js'
export const global = {
  vision: '3.0.0', // 更新于2018.12.20
  host: 'http://192.168.100.84:9999',
  // host: '',
  imgUrl: 'https://img.duishangbao.cn/upload/image/',
  _this: this,
  currClientWidth: null,
  fontValue: null,
  originWidth: 750,
  /**
   * rem等比例适配所有屏幕
   * @param that
   */
  htmlResize (that) {
    that.$global.currClientWidth = document.documentElement.clientWidth
    if (that.$global.currClientWidth > 768) {
      that.$global.currClientWidth = 768
    }
    if (that.$global.currClientWidth < 320) {
      that.$global.currClientWidth = 320
    }
    that.$global.fontValue = ((625 * that.$global.currClientWidth) / that.$global.originWidth).toFixed(2)
    document.documentElement.style.fontSize = that.$global.fontValue + '%'
  },
  /**
   * 添加cookie设置
   * @param name
   * @param value
   * @param expiredays 秒
   */
  setCookie (name, value, expiredays) {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = name + '=' + escape(value) +
      ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString())
  },
  /**
   * 获取cookie值
   * @param name
   * @returns {null}
   */
  getCookie (name) {
    let arr = ''
    let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    return (arr = document.cookie.match(reg)) ? unescape(arr[2]) : null
  },
  /**
   * 删除cookie值
   * @param name
   */
  delCookie (name) {
    var exdate = new Date()
    exdate.setTime(exdate.getTime() - 1)
    var cval = this.getCookie(name)
    if (cval != null) {
      document.cookie = name + '=' + cval + ';expires=' + exdate.toGMTString()
    }
  },
  /**
   * 设置添加本地local storage缓存
   * @param key
   * @param value
   */
  setStorage (key, value) {
    if (navigator.userAgent.indexOf('MSIE') > 0) {
    } else {
      if (window.localStorage) {
        localStorage[key] = value
      }
    }
  },
  /**
   * 获取local storage缓存
   * @param key
   * @returns {*}
   */
  getStorage (key) {
    return window.localStorage ? (localStorage[key] || '') : ''
  },
  /**
   * code编码
   * @param text
   */
  enCode (text) {
    return escape(encodeURIComponent(text))
  },
  /**
   * code解码
   * @param text
   * @returns {string}
   */
  unCode (text) {
    return decodeURIComponent(unescape(text))
  },
  /**
   * 公共异步 一级接口 to 微信授权登录
   * @param that 作用域 this
   * @param type 类型： post,get,put,delete
   * @param url 接口地址
   * @param data 参数
   * @param res 成功
   * @param reg 失败
   * @returns {Promise.<T>}
   */
  myAjaxLogin (that, type, url, data, res, reg) {
    let message = 'timespan=' + Date.parse(new Date()) + '&nonce=' + that.$global.getAesKey(8) + '&xClientId=' + that.$global.getAesKey(8) + '&app=1000'
    let key = '1000' + that.$global.getAesKey(16)
    let sign = that.$global.getSign(that, message, key)
    let headers = {
      'content-type': 'application/json',
      'B-User-Agent': '1000/1.0;android/6.2;mi/YA77;cn;10003',
      'X-Client-Id': '8888',
      'B-Replay': 'nonce=' + that.$global.getAesKey(8) + '&timespan=' + Date.parse(new Date()) + '&sig=' + sign,
      'sig': that.$global.getAesKey(8) + Date.parse(new Date()) + 'DDDDD'
    }
    return that.$ajax({
      method: type,
      // url: 'http://192.168.100.122:8088/' + url,
      url: 'http://39.108.96.150:8088/' + url,
      // url: 'http://bhsapi.duishangbao.cn/' + url,
      data,
      headers
    }).then(function (response) {
      res && res(response)
    }).catch(function (error) {
      reg && reg(error)
    })
  },
  /**
   * 公共异步 一级接口 (不需登录)
   * @param that 作用域 this
   * @param type 类型： post,get,put,delete
   * @param url 接口地址
   * @param data 参数
   * @param res 成功
   * @param reg 失败
   * @returns {Promise.<T>}
   */
  myAjax (that, type, url, data, res, reg) {
    let message = 'timespan=' + Date.parse(new Date()) + '&nonce=' + that.$global.getAesKey(8) + '&xClientId=' + that.$global.getAesKey(8) + '&app=1000'
    let key = '1000' + that.$global.getAesKey(16)
    let sign = that.$global.getSign(that, message, key)
    let headers = {
      'content-type': 'application/json',
      'B-User-Agent': '1000/1.0;android/6.2;mi/YA77;cn;10003',
      'X-Client-Id': '8888',
      'B-Replay': 'nonce=' + that.$global.getAesKey(8) + '&timespan=' + Date.parse(new Date()) + '&sig=' + sign,
      'sig': that.$global.getAesKey(8) + Date.parse(new Date()) + 'DDDDD'
    }
    return that.$ajax({
      method: type,
      url: './api/' + url,
      data,
      headers
    }).then(function (response) {
      res && res(response)
    }).catch(function (error) {
      reg && reg(error)
    })
  },
  /**
   * 公共异步 二级接口 (必须登录)
   * @param that 作用域 this
   * @param type 类型： post,get,put,delete
   * @param url 接口地址
   * @param data 参数
   * @param res 成功
   * @param reg 失败
   * @returns {Promise.<T>}
   */
  myAjax2 (that, type, url, data, res, reg) {
    let nonce = that.$global.getAesKey(8)
    let sid = that.$global.getCookie('sid')
    let uid = that.$global.getCookie('uid')
    let message = 'app=1000&sid=' + sid + '&nonce=' + nonce + '&timespan=' + Date.parse(new Date()) + '&device=16&uid=' + uid
    let sign = that.$global.getSign(that, message, that.$global.getCookie('session-login'))
    console.log('message=' + message)
    console.log('sign=' + sign)
    let headers = {
      'content-type': 'application/json',
      'B-User-Agent': '1000/1.0;android/6.2;mi/YA77;cn;10003',
      'X-Client-Id': '8888',
      'B-Replay': 'nonce=' + nonce + '&timespan=' + Date.parse(new Date()) + '&sig=' + sign,
      'B-Author': 'app=1000&sid=' + sid + '&nonce=' + nonce + '&timespan=' + Date.parse(new Date()) + '&device=16&uid=' + uid + '&sig=' + sign,
      'sig': sign
    }
    return that.$ajax({
      method: type,
      url: './api/' + url,
      data,
      headers
    }).then(function (response) {
      res && res(response)
    }).catch(function (error) {
      reg && reg(error)
    })
  },
  /**
   * 生成签名
   * @returns {*}
   */
  getSign (that, message, key) {
    return that.$cryptoJS.enc.Hex.stringify(that.$cryptoJS.HmacSHA1(message, key))
  },
  /**
   * 生成len位随机数
   * @returns {string}
   */
  getAesKey (len) {
    if (!len) {
      len = 16
    }
    let str = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
    let maxPos = str.length
    let keyStr = ''
    for (let i = 0; i < len; i++) {
      keyStr += str.charAt(Math.floor(Math.random() * maxPos))
    }
    return keyStr
  },
  /**
   * 生成密钥
   * @param that
   * @param aesKey
   * @returns {*}
   */
  getEncryptKey (that, aesKey) {
    let pupblicKey = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCIDan2Y6LFs0Sq5Tv9ZDvIbpZ8
PE82ian+7Dv5T0fnYftd1csfMzt3ytemb7NCj7/F2NXmAj7jw1OPV/UEFo7ZcLAv
347CuyyhBGWrowJqfQmhKYc/Or+3dA5yZGFTjLMXjhriqgy/TVyvOb+bMUoM/WNO
RTsYOVZjZ+MqaGWlRwIDAQAB
-----END PUBLIC KEY-----`
    let jse = new that.$jsEncrypt()
    jse.setPublicKey(pupblicKey)
    return jse.encrypt(aesKey)
  },
  /**
   * AES加密数据-微信授权登录
   * @param that
   * @param jsCode
   * @param keyStr
   * @returns {*}
   */
  getEncryptData (that, jsCode, keyStr) {
    let obj = {
      nickName: '',
      gender: 1,
      language: 'zh_CN',
      city: '',
      province: '',
      country: '',
      avatarUrl: ''
    }
    let word = 'jsCode=0617HkYg1c8cBy0wkHXg192cYg17HkYz&content=' + JSON.stringify(obj) + '&app=1000&device=16&nonce=' + that.$global.getAesKey(8) + '&timespan=' + Date.parse(new Date())
    return Utils.encrypt(word, keyStr)
  },
  /**
   * AES加密数据
   * @param word
   * @param key
   * @returns {*}
   */
  aesData (word, key) {
    return Utils.encrypt(word, key)
  },
  /**
   * AES解密数据
   * @param that
   * @param word
   * @returns {*}
   */
  deAesData (that, word) {
    return Utils.decrypt(word, that.$global.getCookie('aesKey'))
  },
  /**
   * 获取用户agent
   * @returns {boolean}
   */
  getAgent () {
    return navigator.userAgent
  },
  /**
   * 获取URL参数
   * @param name
   * @param url
   * @returns {string}
   */
  getUrlString (name) {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    let thisUrl = window.location.search.substr(1)
    var r = thisUrl.match(reg)
    var context = ''
    if (r !== null) {
      context = r[2].replace(/eval/g, '').replace(/\//g, '').replace(/</g, '').replace(/>/g, '').replace(/"/g, '').replace(/&lt;/g, '').replace(/&gt;/g, '').replace(/&quot;/g, '').replace(/&amp;/g, '')
    }
    reg = null
    r = null
    return context === null || context === '' || context === 'undefined' ? '' : decodeURIComponent(context)
  },
  /**
   * loading 弹窗控制
   * @param type 0隐藏 1显示
   */
  changeLoading (that, type) {
    that.$store.commit('CHANGE_LOADING', type)
  },
  /**
   * toast 弱提示弹窗控制
   * @param text 提示文案
   * @param time 显示时间（秒）
   */
  showToast (that, text) {
    that.$store.commit('SHOW_TOAST', text)
  },
  /**
   * 登录弹窗控制
   * @param type 0隐藏 1显示
   */
  showLoginbox (that, type) {
    that.$store.commit('SHOW_LOGINBOX', type)
  },
  /**
   * 底部主导航切换
   * @param that
   * @param type
   */
  changeFootTab (that, type) {
    that.$store.commit('CHANGE_FOOTTAB', type)
  },
  /**
   * 设置公共的用户余额，金贝数等信息
   * @param that
   * @param data
   */
  setUserCapital (that, data) {
    that.$store.commit('SET_USERCAPITAL', data)
  },
  /**
   * 返回上一页
   */
  goBack (that) {
    if (window.history.length > 1) {
      window.history.go(-1)
    } else {
      that.$router.push({
        path: '/'
      })
    }
  },
  /**
   * 获取经纬度及地址信息
   */
  getLocation (_this) {
    // 通过腾讯地图开放平台获取用户手机经纬度
    /* let geolocation = new qq.maps.Geolocation('3ZRBZ-FIAW5-3VRIM-QSRDF-5L2TK-DYFF7', 'myapp')
    geolocation.getLocation(
      function sucCallback (position) {
        _this.$store.commit('SET_LATITUDE', position.lat)
        _this.$store.commit('SET_LONGITUDE', position.lng)
        if (position.addr) {
          _this.$store.commit('GET_ADDRNAME', position.addr)
        } else {
          _this.$store.commit('GET_ADDRNAME', position.city)
        }
      }, function errCallback (err) {
        console.log('定位失败!')
        console.info(err)
        _this.$store.commit('SET_LATITUDE', 30.549774)
        _this.$store.commit('SET_LONGITUDE', 104.05468)
        _this.$store.commit('GET_ADDRNAME', '成都市')
      }
    ) */
    _this.$store.commit('SET_LATITUDE', 30.549774)
    _this.$store.commit('SET_LONGITUDE', 104.05468)
    _this.$store.commit('GET_ADDRNAME', '成都市天府二街')
  },
  /**
   * 新版跳转页面设置
   * @jumpType 跳转类型 1.不跳转 2.h5 3.商品 4.区域 5.商品分类
   */
  openPageTo (that, jumpParam, jumpType) {
    if (jumpType === 2) {
      window.location.href = jumpParam
    } else if (jumpType === 3) {
      that.$router.push({
        path: '/goodsdetail',
        query: {
          id: jumpParam
        }
      })
    } else if (jumpType === 5) {
      that.$router.push({
        path: '/classify',
        query: {
          cid: jumpParam
        }
      })
    } else {
      console.log('暂不支持此类型跳转')
    }
  },
  /**
   * 是否登录检验
   * @param that 作用域 this
   * @param url 登录成功 返回url
   * @param callback 登录成功 自动执行事件
   * @returns {boolean}
   */
  checkLogin (that, url, callback) {
    let isLogin = that.$store.state.isLogin
    if (!isLogin) {
      that.$global.setCookie('W_U_L_B_U', url, 20)
      that.$global.setCookie('W_U_F_U_N', callback, 20)
      that.$router.push({
        path: '/login'
      })
    }
  },
  /**
   * 新增搜索词条的缓存处理
   * @param word
   */
  addSearchWord (that, word) {
    let arr = []
    if (that.$global.getCookie('searchWord')) {
      arr = JSON.parse(that.$global.getCookie('searchWord'))
    }
    if (arr && arr.indexOf(word) !== -1) {
      let index = arr.indexOf(word)
      arr.splice(index, 1)
      console.info(arr)
    }
    arr.unshift(word)
    if (arr.length > 10) {
      arr.length = 10
    }
    that.$global.setCookie('searchWord', JSON.stringify(arr))
  }
}
