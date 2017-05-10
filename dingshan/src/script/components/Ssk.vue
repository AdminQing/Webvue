
<!--首页商品组件-->

<template>
	<div>
		<div class="yo-search">
			<label class="action">
				<span class="yo-ico"></span>
				<input type="text" @keyup.enter="search" v-model="keywords" class="input input-shrink" placeholder="输入搜索关键字...">
			</label>
			<span class="cancel">取消</span>
		</div>
	<!-- 	<div class="result">
			<ul>
				<li v-for="(item,index) in list">
					<p>{{item.gos_name}}</p>
				</li>
			</ul>
		</div> -->
		<div class="search_land">
			<div class="hot-search">
				<strong>热搜</strong>
				<div class="search_replace" @click="shuax">刷新</div>
				<div class="search-list">
					<ul>
						<li v-for="(item,index) in listBB" @click="idbox">
							{{item.tok_name}}
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import { Indicator } from 'mint-ui'
import utilAxios from '../utils/axios'
	
	export default{
		data(){
			return {
				keywords:'',
				result:[],
				list:[],
				listBB:[
					{"tok_name":"纸巾"},
					{"tok_name":"衣架"},
					{"tok_name":"运动鞋"},
					{"tok_name":"蔬菜"},
					{"tok_name":"牙膏"},
					{"tok_name":"女装"}
				]
			}
		},
 		 methods:{
 		 	search:function(){
 		 		let that = this

 		 		Indicator.open({
 		 			text:'加载中...',
 		 			spinnerType:'fading-circle'
 		 		});

 		 		utilAxios.get({
 		 			url:'http://localhost:9000/swiper',
 		 			method:'get',
 		 			callback:function(res){
 		 				console.log(res.data.lists);
 		 				that.list = res.data.lists;
 		 				Indicator.close()
 		 			}
 		 		})
 		 	},
 		 	shuax:function(){
 		 		let that = this

 		 		utilAxios.get({
 		 			url:'/m/index.php?ac=tophead_getrand',
 		 			method:'get',
 		 			callback:function(res){
 		 				that.listBB = res.data.lists
 		 				//console.log(res)
 		 			}
 		 		})
 		 	},
 		 	idbox:function(){
 		 		location.href='http://localhost:8080/#/fenlei'
 		 	}
 		 }
	}
</script>