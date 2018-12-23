<template>

	<footer>

		<ul>
			<li v-for="(item,index) in nav">
				<router-link :to="item.to">
					<span class="fa" :class="item.icon"></span>
					<span class="title" v-text="item.title"></span>
				</router-link>
			</li>
		</ul>

	</footer>

</template>

<script>
	export default {
		data() {
			return {
				nav: [{
					title: '首页',
					icon: 'fa-home',
					to: '/'
				}, {
					title: '分类',
					icon: 'fa fa-bars',
					to: 'Category'
				}, {
					title: '搜索',
					icon: 'fa-search',
					to: 'Search'
				}, {
					title: '购物车',
					icon: 'fa-shopping-cart',
					to: 'Cart'
				}, {
					title: '未登录',
					icon: 'fa-user',
					to: 'User'
				}]
			}
		},
		methods: {

		},
		computed: {
			login() {
				return this.$store.state.user.login;
			}
		},
		watch: {
			login(val) {
				console.log(val);
				if(val) {
					this.nav[4].title = '我的';
				} else {
					this.nav[4].title = '未登录';
				};

			}
		},
		created() {
			if(this.login) {
				this.nav[4].title = '我的';
			}
			console.log(this.login);
		}
	}
</script>

<style scoped="scoped">
	footer {
		width: 100%;
		height: 50px;
		background-color: red;
		position: fixed;
		bottom: 0px;
		left: 0px;
		color: #353535;
		text-align: center;
		background-color: #fff;
		box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, .6);
		-webkit-box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, .6);
		-moz-box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, .6);
	}
	
	footer a {
		color: #353535;
		text-decoration: none;
	}
	
	footer a.router-link-exact-active {
		color: #f23030;
	}
	
	footer ul {
		margin: 0;
		padding: 0;
		display: flex;
		display: -webkit-flex;
	}
	
	footer ul li {
		flex: 1;
		padding-top: 5px;
		list-style: none;
	}
	
	footer ul li span.fa {
		font-size: 20px;
	}
	
	footer ul li .title {
		display: block;
		font-size: 12px;
	}
</style>