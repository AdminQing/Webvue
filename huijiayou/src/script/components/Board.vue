<template>
	<div class="m-board">
		<mt-swipe :auto="5000">
					 <mt-swipe-item>
							<img src="../../assets/lb1.jpg" />
					  </mt-swipe-item>
					  <mt-swipe-item>
							<img src="../../assets/lb2.jpg" />
					  </mt-swipe-item>
					  <mt-swipe-item>
							<img src="../../assets/lb3.jpg" />
					  </mt-swipe-item>  
					   <mt-swipe-item>
							<img src="../../assets/lb4.jpg" />
					  </mt-swipe-item>  
					   <mt-swipe-item>
							<img src="../../assets/lb5.jpg" />
					  </mt-swipe-item>  
					   <mt-swipe-item>
							<img src="../../assets/lb6.jpg" />
					  </mt-swipe-item>  
					   <mt-swipe-item>
							<img src="../../assets/lb7.jpg" />
					  </mt-swipe-item>  
					   <mt-swipe-item>
							<img src="../../assets/lb8.jpg" />
					  </mt-swipe-item>  
					  <!--  <mt-swipe-item v-for="item in images">
							<img :src="item" />
					    </mt-swipe-item> -->
		</mt-swipe>
	</div>
</template>

<script>
	import Vue from 'vue'
	import VueRouter from 'vue-router'
	import 'mint-ui/lib/style.css'
	import { Swipe, SwipeItem } from 'mint-ui'
	import axios from 'axios'
	Vue.component(Swipe.name, Swipe)
	Vue.component(SwipeItem.name, SwipeItem)

	export default{
		// data(){
		// 	return {
		// 	  	images:[
		// 	  		"../../assets/lb1.jpg",
		// 	  		"../../assets/lb2.jpg",
		// 	  		"../../assets/lb3.jpg",
		// 	  		"../../assets/lb4.jpg"
		// 	  	]
		// 	}
		// }
		mounted:function(){
			console.log(0)
		}
	}
</script>