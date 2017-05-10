

<!--首页分类-->

<template>
		<div class="m-fenlei">
			<ul>
				<router-link tag="li" :to="`/fen/${index}`" v-for="(item,index) in fenleiTop" :key="index">
					<img :src="item.img">
					<span>{{item.title}}</span>
				</router-link>
			</ul>
			<ul>
				<router-link tag="li" :to="`/fen/${index+5}`" v-for="(item,index) in fenleiBottem" :key="index">
					<img :src="item.img">
					<span>{{item.title}}</span>
				</router-link>
			</ul>
		</div>
</template>

<script>
	import Vue from 'vue'
	import axios from 'axios'
	
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
		}
	}
// </script>