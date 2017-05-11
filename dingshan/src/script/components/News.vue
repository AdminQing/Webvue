<template>
	
	<div class="m-news">
		<div>
			<span>全部</span>
			<span class="yo-ico" @click="btn">&#xf031</span>
			<Modal v-if="isShow">
				<ul v-if="isShow">
					<li v-for="(item, index) in catList" active-class="active">
						<router-link :to="`/News`">{{item.cat_name1}}</router-link>
					</li>
					
				</ul>
			</Modal>
			
		</div>
		
		<div class="list">	
			<dl v-for="(item, index) in list">
				<dt>
					<router-link :to="`/board`">
						<img :src="`http://d.zwzpy.com/upload/${item.cms_image}`" />
					</router-link>
				</dt>
				<dd>					
					<h1><router-link :to="`/board`">{{item.cms_title}}</router-link></h1>					
					<p>{{item.cms_content}}</p>
				</dd>
			</dl>
		</div>
		
	</div>
	
</template>

<script>
	import Vue from 'vue'
	import { Loadmore } from 'mint-ui';
	Vue.component(Loadmore.name, Loadmore);
	
	//import Modal from 'yo3/component/modal';
	import utilAxios from '../utils/axios'
	export default {
		data(){
			return {
				catList: [{cat_name1:'全部'}],
				list: [],
				isShow: false,
				num: 1
			}
		},
		methods: {
			btn: function(){
				if(!this.isShow){
					this.isShow = true
				}else{
					this.isShow = false
				}
			},
			loadTop: function () {
		        let num = this.num;
		        num-=1;
		        this.num = num;
		        let that = this;
		        utilAxios.get({
	  				url:'/m/index.php?ac=cms_mbNewsLists&ajax=1&p='+ num,
	  				method:'get',
	  				callback:function(res){
	  					that.list = that.dataSource.concat(res.data.list);
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
		        	url:'/m/index.php?ac=cms_mbNewsLists&ajax=1&p='+ num,
		          	method: 'get',
		          	callback: function (res) {
		            	that.list = that.list.concat(res.data.list);
		            	that.$refs.loadmore.onBottomLoaded();
		            	//Indicator.close()
		          	}
		        })
      		}
		},
		mounted: function(){	
			let that = this;
			utilAxios.get({
				url: '/m/index.php?ac=cms_mbNewsLists&ajax=1&p=1',
				method: 'get',
				callback: function(res){
					that.list = that.list.concat(res.data.list);
					that.catList = that.catList.concat(res.data.catList);
					console.log(that.catList);
				}
			})
		}
	}
</script>