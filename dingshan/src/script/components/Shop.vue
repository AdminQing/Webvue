<template>
	<div class="shop-main">

			<div class="shop-none">
				<p>购物车空空如也，快去购物吧</p>
				<input type="button" name="" value="去购物">
			</div>
			<div class="line_01">
				<div class="line-left">
				</div>
				看了又看
				<div class="line-right">
				</div>
			</div>
			<div class="shop-more">
				<ul >
					<li v-for='(item,index) in dataSource' :key="index">
						<img :src="`http://d.zwzpy.com/upload/${item.gos_thumbnail}`" alt="">
						<p class="shop-name">{{item.gos_name}}</p>
						<p class="shop-price">￥{{item.gos_price}}</p>
						<input type="button" name="" value="立即购买">
					</li>
				</ul>
			</div>


	</div>
</template>
<script>
import Vue from 'vue'
import utilAxios from '../utils/axios'
import { Loadmore } from 'mint-ui';

Vue.component(Loadmore.name, Loadmore);


export default {
	data(){
		return {
			dataSource:[]
		}
	},

	mounted:function(){
		let that=this;
		utilAxios.get({
        url: '/m/index.php?ac=cart_ajaxlists',
        method: 'get',
        callback: function (res) {
					console.log(res)
          that.dataSource=that.dataSource.concat(res.data.goodlist);

        }
      })
	}
}
</script>
