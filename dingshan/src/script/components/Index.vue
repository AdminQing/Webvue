<template>
	<div class="m-index">
		<header class="yo-header yo-header-a">
				<span class="regret yo-ico font-w">&#xe609;</span>
				<input type="search" results="s" class="header-input" placeholder="请输入要搜索的内容" @click="one"></input>
				<span class="yo-ico header-right font-w">&#xe686;</span>
				<span class="affirm yo-ico font-w">&#xe631;</span>
		</header>
		<section>
				<router-view></router-view>
		</section>
		<nav>
			<ul>
				<router-link tag="li" to="/board" active-class="active" class="yo-ico">
					<span>&#xe62d;<b>首页</b></span>
				</router-link>
				<router-link tag="li" to="/search" active-class="active" class="yo-ico">
					<span>&#xeb89;<b>鼎善客服</b></span>
				</router-link>
				<router-link tag="li" to="/shop" active-class="active" class="yo-ico">
					<span>&#xec0b;<b>购物车</b></span>
				</router-link>
				<router-link tag="li" to="/news" active-class="active" class="yo-ico">
					<span>&#xe757;<b>新闻资讯</b></span>
				</router-link>
				<router-link tag="li" to="/login" active-class="active" class="yo-ico">
					<span>&#xe609;<b>我的鼎善</b></span>
				</router-link>
			</ul>
		</nav>
	</div>
</template>

<script>
	export default{
		methods:{
			one:function(){
				location.href='http://localhost:8080/#/ssk'
			}
		}
	}
</script>
