<template>
	<div>
		{{$route.params.id}}
		
			<div class="top-bar">
				<div class="go-back">
					<a href="#" @click.prevent="goBack">
						＜
					</a>
				</div>
				<div class="slot">
					<slot>
						<div class="click">
							<router-link :to="'/productss/'+id+'/goodes'">商品</router-link>
							<router-link :to="'/productss/'+id+'/comment'">评价</router-link>
							<router-link :to="'/productss/'+id+'/detail'">详情</router-link>
							<router-link :to="'/productss/'+id+'/recommend'">推荐</router-link>
						</div>
					</slot>
				</div>
				<div class="menu">
					<a href="#" @click.prevent="menuShow=true">
						<span class="ellipsis">...</span>
					</a>
					<ul class="menu-list" v-show="menuShow">
						<li v-for="(item,index) in menu">
							<router-link :to="item.to">
								<i class="fa" :class="item.icon"></i>
								<span v-text="item.title"></span>
							</router-link>
						</li>
					</ul>
				</div>
				<div class="header-mask" v-show="menuShow" @click="menuShow=false;"></div>
			</div>
		
		<!---->
		<!--<goodes></goodes>-->
		<router-view/>
	</div>
</template>

<script>
//	import Shopes from '@/components/Goodes'
	export default {
		
		data() {
			return {
				id: 0,
				menuShow: false,
				menu: [{
					title: '首页',
					icon: 'fa-home',
					to: '/'
				}, {
					title: '分类搜索',
					icon: 'fa-search',
					to: '/category'
				}, {
					title: '购物车',
					icon: 'fa-shopping-cart',
					to: '/cart'
				}, {
					title: '我的京东',
					icon: 'fa fa-user',
					to: '/user'
				}, {
					title: '浏览记录',
					icon: 'fa-paw',
					to: '/history'
				}]
			};
		},
		created() {
			this.id = this.$route.params.id;
		},
		methods: {
			goBack() {
				window.history.length > 1 ? this.$router.go(-1) : this.$router.pish("/");
			}
		},
		components:{
//			Goodes
		}
	}
</script>

<style scoped="scoped">
	
	
	.top-bar {
		width: 100%;
		background-color: #fff;
		color: #252525;
		height: 44px;
		text-align: center;
		display: flex;
		display: -webkit-flex;
		position: fixed;
		top: 0px;
		left: 0px;
		border-bottom: solid 1px #e5e5e5;
		z-index: 9998;
	}
	
	.top-bar a {
		color: #252525;
	}
	
	.top-bar .slot {
		line-height: 44px;
		flex: 1;
	}
	
	.click {}
	
	.click a {
		padding: 0px 10px;
		font-size: 16px;
		line-height: 44px;
	}
	
	.top-bar .go-back,
	.top-bar .menu {
		width: 40px;
		height: 44px;
		font-size: 22px;
		line-height: 44px;
		position: relative;
	}
	
	.top-bar .menu-list {
		position: absolute;
		z-index: 9999;
		width: 125px;
		top: 53px;
		right: 10px;
		font-size: 14px;
		margin: 0;
		padding: 0px;
		list-style: none;
		text-align: left;
		background: rgba(0, 0, 0, .9);
	}
	
	.top-bar .menu-list a {
		color: #fff;
		text-decoration: none;
	}
	
	.top-bar .menu-list li {
		height: 40px;
		line-height: 40px;
		margin-left: 40px;
		position: relative;
		border-bottom: 1px solid hsla(0, 0%, 100%, .2);
	}
	
	.top-bar .menu-list i.fa {
		width: 40px;
		height: 40px;
		line-height: 40px;
		display: block;
		text-align: center;
		position: absolute;
		top: 0px;
		font-size: 15px;
		left: -40px;
	}
	
	.top-bar .header-mask {
		position: fixed;
		top: 0px;
		bottom: 0px;
		left: 0px;
		right: 0px;
		z-index: 9998;
	}
	
	.fa-ellipsis-h {
		/*background-color: aqua;*/
	}
	
	.ellipsis {
		position: relative;
		top: -6px;
		/*background-color: saddlebrown;*/
	}
</style>