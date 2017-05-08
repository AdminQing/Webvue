

<!--首页-->

<template>
	<div class="m-board">
		<mt-swipe :auto="5000">
			<!--轮播图-->
		    <mt-swipe-item v-for="(item,index) in dataSource" :key="index">
				<img :src="item.name" />
			  </mt-swipe-item>  
		</mt-swipe>
		<div>
			
		</div>
		<!-- <div class="m-fenlei">
			<ul>
				<router-link tag="li" to="/fen" v-for="(item,index) in fenleiTop" :key="index">
					<img :src="item.img">
					<span>{{item.title}}</span>
				</router-link>
			</ul>
			<ul>
				<router-link tag="li" to="/fen" v-for="(item,index) in fenleiBottem" :key="index">
					<img :src="item.img">
					<span>{{item.title}}</span>
				</router-link>
			</ul>
		</div> -->
		<Fenlei></Fenlei>
		<Theme></Theme>
	</div>
</template>

<script>
	import Vue from 'vue'
	import VueRouter from 'vue-router'
	import 'mint-ui/lib/style.css'
	import { Swipe, SwipeItem } from 'mint-ui'
	import axios from 'axios'
	import Fenlei from './Board-feilei'   //分类
	import Theme from './Board-theme'
	Vue.component(Swipe.name, Swipe)
	Vue.component(SwipeItem.name, SwipeItem)

	export default{
		data(){
			return {
				dataSource:[],
				fenleiTop:[],
				fenleiBottem:[]
			}
			
		},

		mounted:function(){
			let that = this
			axios({
				method:'get',
				url:'http://localhost:9000/swiper'
			})
			.then(function(res){
				//console.log(res.data.lunbo)
				that.dataSource = that.dataSource.concat(res.data.lunbo);
				that.fenleiTop = that.fenleiTop.concat(res.data.fenleiTop);
				that.fenleiBottem = that.fenleiBottem.concat(res.data.fenleiBottem);
			})
		},
		components:{
			Fenlei,Theme
		}
	}
</script>