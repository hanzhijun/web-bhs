export const SET_LATITUDE = 'SET_LATITUDE' // 设置latitude 纬度
export const SET_LONGITUDE = 'SET_LONGITUDE' // 设置longitude 经度
export const GET_ADDRNAME = 'GET_ADDRNAME' // 获取当前位置名称
export const CHANGE_LOADING = 'CHANGE_LOADING' // 显示隐藏loading
export const SHOW_TOAST = 'SHOW_TOAST' // toast 弱提示弹窗控制 text 提示文案， time 显示时间（秒）
export const SHOW_LOGINBOX = 'SHOW_LOGINBOX' // 显示隐藏login弹窗
export const CHANGE_FOOTTAB = 'CHANGE_FOOTTAB' // 底部tab主导航确定焦点值
export const SET_USERCAPITAL = 'SET_USERCAPITAL' // 设置用户余额信息

export default {

  // 设置longitude 经度
  [SET_LONGITUDE] (state, data) {
    state.longitude = data
  },
  // 设置latitude 纬度
  [SET_LATITUDE] (state, data) {
    state.latitude = data
  },
  // 获取当前位置名称
  [GET_ADDRNAME] (state, data) {
    state.addrName = data
  },
  // 显示隐藏loading
  [CHANGE_LOADING] (state, type) {
    state.showLoading = type
  },
  // toast 弱提示弹窗控制 text 提示文案
  [SHOW_TOAST] (state, text) {
    state.toastTxt = text
    state.showToast = 1
    setTimeout(function () {
      state.toastTxt = ''
      state.showToast = 0
    }, 3000)
  },
  // 显示隐藏login弹窗
  [SHOW_LOGINBOX] (state, type) {
    state.showLoginbox = type
  },
  // 底部tab主导航确定焦点值
  [CHANGE_FOOTTAB] (state, type) {
    state.footTabActive = type
  },
  // 设置用户余额信息
  [SET_USERCAPITAL] (state, data) {
    state.userCapital = data
  }
}
