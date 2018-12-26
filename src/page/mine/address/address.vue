<template>
  <div class="out-side-address">

    <div class="head-bar-fixed">
      <span class="head-btn-return opacity" @click="goBack" ontouchstart=""></span>
      <div class="list-title fs-32 fc-ff">{{ title }}</div>
    </div>

    <ul class="addressList">

      <li v-for="item in addressList" v-bind:key="item.id">
        <div class="addressMan">
          <span class="name">{{ item.userName }}</span>
          <span class="tel">{{ item.userPhone }}</span>
          <span class="default" v-if="item.isDefault === 1">默认</span>
        </div>
        <div class="addressMain">{{ item.detailAddress }}</div>
        <a class="address-edit opacity" @click="addReciver('edit', item.id)" title="编辑" href="javascript:void(0)" ontouchstart=""></a>
      </li>

    </ul>

    <div class="add-reciver">
      <a class="opacity" href="javascript:void(0)" @click="addReciver('add', '')" ontouchstart="">+添加新地址</a>
    </div>

  </div>
</template>

<script>
export default {
  name: 'addressView',
  // 数据存放区
  data () {
    return {
      title: '我的收货地址',
      addressList: []
    }
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
  // 挂载完成
  mounted () {
    this.getAddressList()
  },
  // 方法
  methods: {
    /**
     * 获取地址列表
     */
    getAddressList: function () {
      let _this = this
      this.$global.myAjax2(this, 'get', 'bhs-client-online/address', '{}', function (res) {
        if (res.data.code * 1 === 1) {
          _this.addressList = res.data.data
          console.log(JSON.stringify(_this.addressList))
        } else {
          console.log(2)
        }
      }, function (reg) {
        console.info(reg)
      })
    },
    /**
     * 删除地址
     * @param id
     */
    dele: function (id) {
      let _this = this
      this.$global.myAjax2(this, 'dele', 'bhs-client-online/address/' + id, '{}', function (res) {
        if (res.data.code === 1) {
          let {addressList} = _this
          let newAddressList = []
          for (let i = 0; i < addressList.length; i++) {
            if (addressList[i].id !== id) {
              newAddressList.push(addressList[i])
            }
          }
          _this.addressList = newAddressList
          _this.$global.showToast(_this, '删除成功')
        } else {}
      }, function (reg) {
        console.info(reg)
      })
    },
    addReciver: function (type, id) {
      if (type === 'edit') {
        for (let i = 0; i < this.addressList.length; i++) {
          if (id === this.addressList[i].id) {
            this.$global.setStorage('changeAddressData', this.$global.enCode(JSON.stringify(this.addressList[i])))
          }
        }
      }
      this.$router.push({
        path: '/addreciver',
        query: {
          type
        }
      })
    },
    /**
     * 返回上一页
     */
    goBack () {
      this.$global.goBack(this)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import 'address.styl';
</style>
