<template>
	<div class="shoppingCart">
		<top-bar>购物车</top-bar>
		<!--1-->
		<div class="login-enpty" v-if="!login">
			<img src="../../public/img/nothing.png" />
			<p>登录后可同步购物车中商品</p>
			<router-link :to="{path:'/login',query:{from:'/cart'}}" class="weui-btn weui-btn_plain-primary">登录</router-link>
		</div>
		<!--2-->
		<shopes v-if='login'></shopes>
		<footeres></footeres>
	</div>
</template>

<script>
	import Footeres from '../components/Footeres'
	import TopBar from '../components/TopBar'
	import Shopes from '../components/Shopes'

	export default {
		name: 'cart',
		data() {
			return {};
		},
		computed: {
			login() {
				return this.$store.state.user.login;
			}
		},
		created() {
//			if(!this.login) {
//				this.$router.push({
//					path: './login',
//					query: {
//						from: './cart'
//					}
//				})
//			}
		},

		components: {
			Footeres,
			TopBar,
			Shopes,
		}
	}
</script>

<style scoped="scoped">
	.login-enpty {
		margin-top: 60px;
		text-align: center;
	}
	
	.login-enpty img {
		width: 60px;
	}
	
	.login-enpty p {
		font-size: 16px;
		color: rgba(51, 51, 51, .66);
		line-height: 24px;
		margin: 11px 0;
	}
	
	a {
		width: 60px;
		height: 30px;
		line-height: 30px;
		font-size: 14px;
		color: #e4393c;
		border: 1px solid #e4393c;
	}
</style>