<template>
	<div>
		<img :src="`http://d.zwzpy.com/upload/${list.gos_thumbnail}`">
	</div>
</template>


<script>
	import Vue from 'vue'
	import axios from 'axios'

	export default{
		data(){
			return {
				list:[]
			}
		},
		mounted:function(){
			let that = this
			var id = localStorage.getItem("name");
			id = JSON.parse(id)
			this.list = id
			console.log(this.list)
			// axios({
			// 	method:'get',
			// 	url:'/m/index.php?ac=recommendlist_getLists',
			// })
			// .then(function(res){
			// 	console.log(res)
			// })
		}
	}
</script>