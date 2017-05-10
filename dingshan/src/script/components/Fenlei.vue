<template>
	<div class="flyb">
		<section>
			<ul>
				<li>分类</li>
				<li>新品</li>
				<li>销量</li>
				<li>价格</li>
			</ul>
		</section>
		<div class="lists">
			<ul>
				<li v-for="(item,index) in listimg" :key="index"
				@click="isid()">
					<img :src="`http://d.zwzpy.com/upload/${item.gos_thumbnail}`" />
					<p class="name">{{item.gos_name}}</p>
					<span class="price">¥{{item.gos_price}}</span>
					<span class="lig">立即购买</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import axios from 'axios'
	import { Indicator } from 'mint-ui'
	import utilAxios from '../utils/axios'

	export default {
		data(){
			return{
				listimg:[]
			}
		},

		mounted:function(){
			let that = this
			axios({
				method:'get',
				url:'http://localhost:9000/feilei1'
			})
			.then(function(res){
				that.listimg = res.data.lists
				console.log(res.data.lists)
			})
		},

		methods:{
			isid:function(){
				let that = this
			axios({
				method:'post',
				url:'/m/index.php?flag=1',
				data:{"gos_id":576248}
			})
			.then(function(res){
				console.log(res)
			})
			}
		}
	}
	
</script>