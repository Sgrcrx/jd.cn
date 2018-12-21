<template>
	<div class="categorys">
		<!--search1-->
	<header>
			<span class="lefts">
				<a href="#" @click.prevent="hide"><i class="fa fa-angle-left"></i></a>
			</span>
			<div class='category'>
				<i class=' fa fa-category'></i>
			</div>
			<div class='search-input'>
				<div class='tu'>
					<i class='fa fa-search'></i>
				</div>
				<input type='text' name='' id='' value='' placeholder='请输入搜索内容'  @focus="show=true" />
			</div>
			<div class='user'>
				<button>搜索</button>
			</div>
	</header>
	
		
		
	<!--search2-->
		<search-click v-model="show"></search-click>
		<category-layout></category-layout>
		<footeres></footeres>
	</div>
</template>

<script>
	import Footeres from '@/components/Footeres'
	import SearchClick from '../components/SearchClick'
	import CategoryLayout from '../views/CategoryLayout'

	export default {
		data() {
			return {
				show: false
			}
		},
		name: 'category',
		components: {
			Footeres,
			SearchClick,
			CategoryLayout
		},
		methods:{
			hide(){
				this.show = false;
				this.$emit('input',false);
				document.body.style.overflow = "hidden";
			}
		},
	}
</script>

<style scoped="scoped">
	.searchclick {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0px;
		bottom: 0px;
		right: 0px;
		left: 0px;
		background-color: #fff;
	}
	
	body {
		margin: 0px;
	}
	
	header {
		width: 100%;
		height: 44px;
		display: flex;
		/*z-index: 9999;*/
		position: fixed;
		top: 0;
		left: 0;
		box-sizing: border-box;
		padding: 0px 10px;
		background-color: #fff;
		z-index: 999;
		border-bottom: 1px solid #eee;
	}
	
	header.fixed {
		background-color: #e43130;
	}
	
	a {
		text-decoration: none;
		color: #333;
	}
	
	.lefts {
		/*width: 30px;*/
		height: 100%;
		line-height: 54px;
		margin-right: 10px;
		/*background-color: skyblue;*/
	}
	
	.lefts i {
		font-size: 3rem;
	}
	
	.category,
	.user {
		color: #fff;
		font-size: 20px;
		text-align: center;
		line-height: 44px;
	}
	
	.category {
		height: 44px;
		box-sizing: border-box;
		/*background-color: blue;*/
	}
	
	.search-input {
		width: 100%;
		box-sizing: border-box;
		flex: 1;
		border: none;
		line-height: 44px;
		position: relative;
		/*		background-color: saddlebrown;*/
	}
	
	.tu {
		display: inline-block;
		position: absolute;
		top: -1px;
		left: 5px;
	}
	
	.tu i {
		width: 20px;
		position: relative;
		top: 2px;
		left: 2px;
		color: #ccc;
		/*background-color: salmon;*/
	}
	
	.search-input input {
		width: 100%;
		height: 30px;
		border-radius: 15px;
		border: none;
		outline: none;
		padding-left: 50px;
		box-sizing: border-box;
		background-color: #eee;
	}
	
	.user {
		width: 50px;
		height: 30px;
		line-height: 30px;
		box-sizing: border-box;
		/*background-color: blue;*/
	}
	
	.swiper-container {}
	
	.swiper-container a {}
	
	.swiper-container img {
		width: 100%;
	}
	/*下拉*/
	
	.crx {
		height: 2000px;
	}
	/*图*/
	
	.bg01 img {
		width: 100%;
	}
	
	button {
		width: 40px;
		height: 30px;
		border: none;
		outline: none;
		border-radius: 6px;
		margin-top: 8px;
		font-size: 14px;
		background-color: #e93b3d;
	}
</style>