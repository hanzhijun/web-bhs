
import App from '../App'

const HomeIndexView = r => require.ensure([], () => r(require('../page/index/index')), 'HomeIndexView')
const wxAuth = r => require.ensure([], () => r(require('../page/wxauth/wxauth')), 'wxAuth')
const nearByView = r => require.ensure([], () => r(require('../page/nearby/nearby')), 'nearByView')
const shopCartView = r => require.ensure([], () => r(require('../page/cart/cart')), 'shopCartView')

const mineView = r => require.ensure([], () => r(require('../page/mine/mine/mine')), 'mineView')
const loginView = r => require.ensure([], () => r(require('../page/mine/login/login')), 'loginView')
const aboutUsView = r => require.ensure([], () => r(require('../page/mine/aboutus/aboutus')), 'aboutUsView')
const addressView = r => require.ensure([], () => r(require('../page/mine/address/address')), 'addressView')
const addreciverView = r => require.ensure([], () => r(require('../page/mine/addreciver/addreciver')), 'addreciverView')
const accoutManage = r => require.ensure([], () => r(require('../page/mine/accoutmanage/accoutmanage')), 'accoutManage')
const bindTel = r => require.ensure([], () => r(require('../page/mine/bindtel/bindtel')), 'bindTel')
const updateTel = r => require.ensure([], () => r(require('../page/mine/updatetel/updatetel')), 'updateTel')
const afterSaleList = r => require.ensure([], () => r(require('../page/mine/aftersalelist/aftersalelist')), 'afterSaleList')
const afterSaleApply = r => require.ensure([], () => r(require('../page/mine/aftersaleapply/aftersaleapply')), 'afterSaleApply')
const afterSaleDetail = r => require.ensure([], () => r(require('../page/mine/aftersaledetail/aftersaledetail')), 'afterSaleDetail')

const classifyView = r => require.ensure([], () => r(require('../page/goods/classify/classify')), 'classifyView')
const searchView = r => require.ensure([], () => r(require('../page/goods/search/search')), 'searchView')
const goodsListView = r => require.ensure([], () => r(require('../page/goods/goodslist/goodslist')), 'goodsListView')
const goodsDetailView = r => require.ensure([], () => r(require('../page/goods/goodsdetail/goodsdetail')), 'goodsDetailView')
const goodsOrderConfirm = r => require.ensure([], () => r(require('../page/goods/orderconfirm/orderconfirm')), 'goodsOrderConfirm')
const orderList = r => require.ensure([], () => r(require('../page/goods/orderlist/orderlist')), 'orderList')
const orderDetail = r => require.ensure([], () => r(require('../page/goods/orderdetail/orderdetail')), 'orderDetail')

const businessList = r => require.ensure([], () => r(require('../page/business/businesslist/businesslist')), 'businessList')
const businessHome = r => require.ensure([], () => r(require('../page/business/businesshome/businesshome')), 'businessHome')
const packageList = r => require.ensure([], () => r(require('../page/business/packagelist/packagelist')), 'packageList')
const packageDetail = r => require.ensure([], () => r(require('../page/business/packagedetail/packagedetail')), 'packageDetail')
const packageOrderConfirm = r => require.ensure([], () => r(require('../page/business/packageorderconfirm/packageorderconfirm')), 'packageOrderConfirm')
const packageOrderDetail = r => require.ensure([], () => r(require('../page/business/packageorderdetail/packageorderdetail')), 'packageOrderDetail')

export default [{
  path: '/',
  component: App, // 顶层路由，对应index.html
  children: [ // 二级路由。对应App.vue
    // 地址为空时跳转index首页页面
    {
      path: '',
      redirect: '/index',
      sort: 0
    },
    // 首页
    {
      path: '/index',
      component: HomeIndexView,
      meta: {
        title: '贝划算，开始划算生活'
      },
      name: '',
      sort: 1
    },
    // 附近
    {
      path: '/nearby',
      component: nearByView,
      meta: {
        title: '附近'
      },
      name: '',
      sort: 2
    },
    // 购物车
    {
      path: '/cart',
      component: shopCartView,
      meta: {
        title: '购物车'
      },
      name: '',
      sort: 3
    },
    // 微信登录回执页
    {
      path: '/wxauth',
      component: wxAuth,
      meta: {
        title: '登录成功'
      },
      name: '',
      sort: 4
    },
    // 我的
    {
      path: '/mine',
      component: mineView,
      meta: {
        title: '我的'
      },
      name: 'mine_page',
      sort: 5
    },
    {
      path: '/login',
      component: loginView,
      meta: {
        title: '登录'
      },
      name: 'mine_login',
      sort: 6
    },
    {
      path: '/aboutus',
      component: aboutUsView,
      meta: {
        title: '关于我们'
      }
    },
    {
      path: '/address',
      component: addressView,
      meta: {
        title: '我的收货地址'
      }
    },
    {
      path: '/addreciver',
      component: addreciverView,
      meta: {
        title: '编辑地址'
      }
    },
    {
      path: '/accoutmanage',
      component: accoutManage,
      meta: {
        title: '账号管理'
      }
    },
    {
      path: '/bindtel',
      component: bindTel,
      meta: {
        title: '绑定手机'
      }
    },
    {
      path: '/updatetel',
      component: updateTel,
      meta: {
        title: '修改手机'
      }
    },
    {
      path: '/aftersalelist',
      component: afterSaleList,
      meta: {
        title: '售后选择'
      }
    },
    {
      path: '/aftersaleapply',
      component: afterSaleApply,
      meta: {
        title: '售后申请'
      }
    },
    {
      path: '/aftersaledetail',
      component: afterSaleDetail,
      meta: {
        title: '售后详情'
      }
    },
    {
      path: '/search',
      component: searchView,
      meta: {
        title: '商品搜索'
      }
    },
    {
      path: '/classify',
      component: classifyView,
      meta: {
        title: '商品类目'
      }
    },
    {
      path: '/goodslist',
      component: goodsListView,
      meta: {
        title: '商品列表'
      }
    },
    {
      path: '/goodsdetail',
      component: goodsDetailView,
      meta: {
        title: '商品详情'
      }
    },
    {
      path: '/orderconfirm',
      component: goodsOrderConfirm,
      meta: {
        title: '确认订单'
      }
    },
    {
      path: '/orderlist',
      component: orderList,
      meta: {
        title: '线上订单'
      }
    },
    {
      path: '/orderdetail',
      component: orderDetail,
      meta: {
        title: '订单详情'
      }
    },
    {
      path: '/businesslist',
      component: businessList,
      meta: {
        title: '商家列表'
      }
    },
    {
      path: '/businesshome',
      component: businessHome,
      meta: {
        title: '商家详情'
      }
    },
    {
      path: '/packagelist',
      component: packageList,
      meta: {
        title: '套餐列表'
      }
    },
    {
      path: '/packagedetail',
      component: packageDetail,
      meta: {
        title: '详情' // 套餐、代金券
      }
    },
    {
      path: '/packageorderconfirm',
      component: packageOrderConfirm,
      meta: {
        title: '确认订单'
      }
    },
    {
      path: '/packageorderdetail',
      component: packageOrderDetail,
      meta: {
        title: '订单详情'
      }
    }
  ]
}]
