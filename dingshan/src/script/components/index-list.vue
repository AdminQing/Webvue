<template lang="html">
  <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" ref="loadmore">
    <div id="indexLists">
      <div class="rd_tilte">
        <h3>专享推荐</h3>
      </div>
      <div class="indexLists">
        <div class="indexList" v-for="(item ,index) in dataSource" :key="index">
          <router-link :key="index" :to="`/detail/${item.res_gos_id}`">
            <img :src="`http://d.zwzpy.com/upload/${item.gos_thumbnail}`" alt="" />
          </router-link>
          <div class="indexListTxt">
            <p>{{item.gos_name}}</p>
            <div class="re-price">
              <span class="reducePrice">￥{{item.gos_price}}</span>
              <span class="markePrice">￥{{item.gos_market_price}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </mt-loadmore>
</template>
<script>
  import Vue from 'vue';
  import { Loadmore } from 'mint-ui';
  Vue.component(Loadmore.name, Loadmore);
  import utilAxios from '../utils/axios'
  export default {
		data(){
			return{
				dataSource:[],
        num:1
			}
		},
    methods: {
      loadTop: function () {
        let num = this.num;
        num+=1;
        this.num = num;
        let that = this;
        utilAxios.get({
  				url:'/m/index.php?ac=recommendlist_getLists&type=11&p='+ num,
  				method:'get',
  				callback:function(res){
  					that.dataSource = that.dataSource.concat(res.data.lists);
            that.$refs.loadmore.onTopLoaded();
  				}
  			})
      },
      loadBottom: function () {
        let num = this.num;
        num+=1;
        this.num = num;
        let that = this;
        utilAxios.get({
          url:'/m/index.php?ac=recommendlist_getLists&type=11p='+ num,
          method: 'get',
          callback: function (res) {
            that.dataSource = that.dataSource.concat(res.data.lists);
            that.$refs.loadmore.onBottomLoaded()
          }
        })
      }
    },
		mounted: function () {

      let that = this;
			utilAxios.get({
				url:'/m/index.php?ac=recommendlist_getLists&type=11&p=1',
				method:'get',
				callback:function(res){
					that.dataSource = that.dataSource.concat(res.data.lists);
          console.log(that.dataSource);
				}
			})
		}
	}
</script>
<style lang="scss">

</style>
