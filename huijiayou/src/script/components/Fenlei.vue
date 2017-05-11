<template>
 <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" ref="loadmore">
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
				@click="isid(index)">
					<img :src="`http://d.zwzpy.com/upload/${item.gos_thumbnail}`" />
					<p class="name">{{item.gos_name}}</p>
					<span class="price">¥{{item.gos_price}}</span>
					<span class="lig">立即购买</span>
				</li>

			</ul>
		</div>
	</div>
	 </mt-loadmore>
</template>

<script>
	import Vue from 'vue'
	import axios from 'axios'
	import { Indicator } from 'mint-ui'
	import { Loadmore } from 'mint-ui';
	Vue.component(Loadmore.name, Loadmore);
	import utilAxios from '../utils/axios'

	export default {
		data(){
			return{
				listimg:[],
				objxqy:[]
			}
		},
		mounted:function(){
			// let that = this
			// console.log(this.$route.params.id)
			// axios({
			// 	method:'get',
			// 	url:'http://localhost:9000/feilei1'
			// })
			// .then(function(res){
			// 	that.listimg = res.data.lists
			// 	//console.log(res.data.lists)
			// })
		},

		methods:{
			isid:function(index){
			let that = this
			axios({
				method:'get',
				url:'http://localhost:9000/feilei1',
			})
			.then(function(res){
				 var arr=res.data.lists[index]
				 arr = JSON.stringify(arr)
				//that.objxqy = res.data.lists[index]
				localStorage.setItem("name",arr)
				location.href='http://localhost:8080/#/xqy'
				//console.log(res.data.lists[index])
			})
				//console.log(item.gos_id)
				//location.href='http://localhost:8080/#/xqy'
			},
			loadTop:function(){
			        let that = this;
			        utilAxios.get({
		  				url:'/m/index.php?ac=recommendlist_getLists&type=11&p=1',
		  				method:'get',
	  					callback:function(res){
	  						that.listimg =  res.data.lists
	  					// that.dataSource = that.dataSource.concat(res.data.lists);
	       //      		that.$refs.loadmore.onTopLoaded();
	       					//console.log(res)
	       					console.log(1)
	       					that.$refs.loadmore.onTopLoaded();
  				}
  			})
			},
			loadBottom:function(){
				let that = this
				console.log(this.$route.params.id)
				axios({
					method:'get',
					url:'http://localhost:9000/feilei1'
				})
				.then(function(res){
					console.log('dawdwa')
					that.listimg = res.data.lists
					//console.log(res.data.lists)
				})
			}
		}
	}
	
</script>