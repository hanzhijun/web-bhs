import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
  // this.$store.state.addrName
  signKey: 'kjhk98gjd80kjsdf', // 公共key，用于登录后生成签名
  latitude: '', // 当前位置纬度
  longitude: '', // 当前位置经度
  addrName: '', // 当前位置名称
  showLoading: 0, // 是否显示loading
  showToast: 0, // 是否显示toast弱提示
  toastTxt: '', // toast提示文字
  showLoginbox: 0, // 是否显示登录弹窗
  isLogin: -1, // 是否登录 0未登录 1已登录
  footTabActive: 'index', // 底部主导航焦点值 index nearby cart mine
  userCapital: { // 用户金额信息
    balance: 0,
    copper: 0,
    gold: 0,
    silver: 0
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
