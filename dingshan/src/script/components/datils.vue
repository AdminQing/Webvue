<template>
  <div id="datils">
    <div class="datilsImg">
      <img src="" alt="">
      <p></p>
    </div>
    <div class="datilsTxt">
      <div class="datilPrice">
        <span class="d_price1"></span>
        <span class="d_price2"></span>
      </div>
      <div class="discount">
        <span>领劵</span>
        <span class="d_group">
          <em>满500减20元</em>
          <em>满199减5元</em>
          <em>满199减5元</em>
        </span>
        <span></span>
      </div>
    </div>
    <div class="d_url">
      <div class="d_line">
        送至 <span></span>
      </div>
      <div class="d_free">
        运费 <span></span>
      </div>
    </div>
    <div class="datailChose">
      <span>请选择商品规格</span>
      <span>
        <span></span>
        <span></span>
      </span>
      <span></span>
    </div>
    <div class="datail">
      <div class="d_img_text">
        图文详情
      </div>
      <div class="d_gos_param">
        商品参数
      </div>
    </div>
    <div class="datailOther">
      <div class="d_other">
        <span>潮流生活吧</span>
        <span></span>
      </div>
      <div class="d_sj">
        <span>
          <span></span>
          <span>联系商家</span>
        </span>
        <span>
          <span></span>
          <span>进入店铺</span>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import utilAxios from '../utils/axios'
export default {
  name: "",
  data: function data() {
    return {
      datilsSourse:[]
    }
  },
  mounted: function mounted() {
    let that = this;
    utilAxios.get({
      url:'http://localhost:',
      method:'get',
      callback:function(res){
        that.datilsSourse = that.datilsSourse.concat(res.data.lists);
      }
    })
  }
}
</script>
<style lang="scss">

</style>
