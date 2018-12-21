<template>
	<div class="search">
		<!--<input type="text" name="" id="" value="" v-model="keyword" @focus="show=ture" /><button @click="search">搜索</button>-->

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
				<input type='text' name='' id='' value='' placeholder='请输入搜索内容' v-model="keyword"  @focus="show=true" />
			</div>
			<div class='user'>
				<button>搜索</button>
			</div>
		</header>

		<search-click v-model='show' @search='search'></search-click>

		<goods-item></goods-item>
		<goods-choese></goods-choese>
		<goods-more  v-for="(item,index) in mores" :id='item.id' :title='item.title' :images='item.images' :money='item.money' :talks='item.talks' :ads='item.ads'></goods-more>

		<div class="crx"></div>
		<footeres></footeres>
	</div>
</template>

<script>
	import axios from 'axios'
	import Footeres from '../components/Footeres'
	import SearchClick from '../components/SearchClick'
	import GoodsItem from '../components/GoodsItem'
	import GoodsChoese from '../components/GoodsChoese'
	import GoodsMore from '../components/GoodsMore'
	import qs from 'qs'

	export default {
		data() {
			return {
				keyword: '',
//				productss: [],
				show: false,
				mores:[],
//				mores: [{
//					id:12,
//					images: require('../../public/img/ThinkCentre.jpg'),
//					title: '联想（ThinkCentre）E74英特尔六代酷睿大机箱商用台式机电脑 win10系统串并口台式机 主机+19.5英寸显示器 0KCD I3-6100/4G/500G 无光驱',
//					money: 3499,
//					talks: '200+条评价&nbsp;好评率99%',
//					ads: '广告>'
//				},{
//					id:13,
//					images: require('../../public/img/ThinkPad.jpg'),
//					title: '联想ThinkPad&nbsp;翼480（0VCD）英特尔8代酷睿14英寸轻薄窄边框笔记本电脑（i5-8250U&nbsp;8G&nbsp;128GSSD+500G&nbsp;2G独显)',
//					money: 4999,
//					talks: '200+条评价&nbsp;好评率99%',
//					ads: '查看同款二手>'
//				},{
//					id:14,
//					images: require('../../public/img/ThinkCentre.jpg'),
//					title: '联想（ThinkCentre）E74英特尔六代酷睿大机箱商用台式机电脑 win10系统串并口台式机 主机+19.5英寸显示器 0KCD I3-6100/4G/500G 无光驱',
//					money: 3499,
//					talks: '200+条评价&nbsp;好评率99%',
//					ads: '广告>'
//				}, {
//					id:15,
//					images: require('../../public/img/ThinkCentre.jpg'),
//					title: '联想（ThinkCentre）E74英特尔六代酷睿大机箱商用台式机电脑 win10系统串并口台式机 主机+19.5英寸显示器 0KCD I3-6100/4G/500G 无光驱',
//					money: 3499,
//					talks: '200+条评价&nbsp;好评率99%',
//					ads: '广告>'
//				}, {
//					id:16,
//					images: require('../../public/img/ThinkCentre.jpg'),
//					title: '联想（ThinkCentre）E74英特尔六代酷睿大机箱商用台式机电脑 win10系统串并口台式机 主机+19.5英寸显示器 0KCD I3-6100/4G/500G 无光驱',
//					money: 3499,
//					talks: '200+条评价&nbsp;好评率99%',
//					ads: '广告>'
//				}, {
//					id:17,
//					images: require('../../public/img/ThinkCentre.jpg'),
//					title: '联想（ThinkCentre）E74英特尔六代酷睿大机箱商用台式机电脑 win10系统串并口台式机 主机+19.5英寸显示器 0KCD I3-6100/4G/500G 无光驱',
//					money: 3499,
//					talks: '200+条评价&nbsp;好评率99%',
//					ads: '广告>'
//				},{
//					id:18,
//					images: require('../../public/img/ThinkCentre.jpg'),
//					title: '联想（ThinkCentre）E74英特尔六代酷睿大机箱商用台式机电脑 win10系统串并口台式机 主机+19.5英寸显示器 0KCD I3-6100/4G/500G 无光驱',
//					money: 3499,
//					talks: '200+条评价&nbsp;好评率99%',
//					ads: '广告>'
//				},{
//					id:19,
//					images: require('../../public/img/ThinkPad.jpg'),
//					title: '联想ThinkPad&nbsp;翼480（0VCD）英特尔8代酷睿14英寸轻薄窄边框笔记本电脑（i5-8250U&nbsp;8G&nbsp;128GSSD+500G&nbsp;2G独显)',
//					money: 4999,
//					talks: '200+条评价&nbsp;好评率99%',
//					ads: '查看同款二手>'
//				},]
			};
		},

		name: 'search',
		components: {
			Footeres,
			SearchClick,
			GoodsItem,
			GoodsChoese,
			GoodsMore
		},
		
		
		methods: {
			search(val){
				console.log(this.mores);
				this.mores = val;
			}
			
		},
		created() {
			console.log(this.$route);
			console.log(this.$router);
			console.log("search-bar");
			//
			if(this.$route.params.product!=null){
				this.mores = this.$route.params.product;
			}
		}
	}
</script>

<style scoped="scoped">
	.search {
		text-align: center;
	}
	
	body {
		margin: 0px;
	}
	
	header {
		width: 100%;
		height: 44px;
		display: flex;
		z-index: 9999;
		position: fixed;
		top: 0;
		left: 0;
		box-sizing: border-box;
		padding: 0px 10px;
		border-bottom: 1px solid #eee;
		/*background-color: salmon;*/
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