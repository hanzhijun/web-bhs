<template>

  <div class="out-side-uptel">
    <h1 style="display: none">{{title}}</h1>
    <div class="tel_con clear">
      <span class="fl fs-15">1.验证原号码</span>
      <span class="fr fs-15">2.绑定新号码</span>
    </div>

    <div class="check">
      <div class="checkNumCon">
        <div>
          <input type='number' placeholder='' value='' disabled class="telNum fs-15">
        </div>
        <div>
          <button data-id="2" class="countDown fs-12">60</button>
        </div>
      </div>
      <input type='number' placeholder='请输入你收到的验证码' class="checkNumber fs-15">
    </div>

    <div class="center">
      <button class="next">下一步</button>
    </div>
  </div>

</template>

<script>
export default {
  name: 'updateTel',
  props: ['loading'],
  // 数据存放区
  data () {
    return {
      title: '修改手机'
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import 'updatetel.styl';
</style>
