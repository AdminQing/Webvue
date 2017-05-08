
<!--首页商品组件-->

<template>
	<div class="board-theme">
		<div class="theme-top">
			<img :src="dataBoos1">
			<div class="theme-bottom">
				<li v-for="(item,index) in dataTheme">
					<img :src="item.img">
				</li>
			</div>
		</div>
		<div class="theme-bot">
			<img :src="dataBoos2">
			<div class="theme-bottom">
				<li v-for="(item,index) in dataThemeBo">
					<img :src="item.img">
				</li>
			</div>
		</div>
		<div class="cen-img">
			<img :src="dataBoos3">
		</div>
		<div class="theme-foo">
			<img src="/static/images/bont1.png">
			<div class="foo-img">
				<p><img src="/static/images/bont2.jpg"></p>
				<ul>
					<li><img src="/static/images/bont3.jpg"></li>
					<li>
						<img src="/static/images/bont4.jpg">
						<img src="/static/images/bont5.jpg">
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
	
	export default{
		data(){
			return {
				dataBoos1:"/static/images/th1.png",
				dataBoos2:"/static/images/flx1.png",
				dataBoos3:"/static/images/con1.jpg",
				dataTheme:[],
				dataThemeBo:[]
			}
			
		},

		mounted:function(){
			let that = this
			axios({
				method:'get',
				url:'http://localhost:9000/swiper'
			})
			.then(function(res){
				that.dataTheme = that.dataTheme.concat(res.data.themeTop);
				that.dataThemeBo = that.dataThemeBo.concat(res.data.themeBottom);
			})
		}
	}
</script>