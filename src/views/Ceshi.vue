<template>
	<div class="ceshi">
	<search-bars></search-bars>
		<swipera></swipera>
		<navss1></navss1>
		<recommends></recommends>
		<!--<goods></goods>-->
		
		
		<div class="crx"></div>
		<footeres></footeres>
	</div>
</template>

<script>
	import SearchBars from '../components/SearchBars'
	import Swipera from '../components/Swipera'
	import Navss1 from'../components/Navss1'
	import Recommends from'../components/RecommendProductList'
//	import Goods from'../components/Goods'
	import Footeres from '../components/Footeres'
	import axios from "axios"
	export default {
		data() {
			return {
				product: []
			};
		},
		components: {
			SearchBars,
			Swipera,
			Footeres,
			Navss1,
//			Goods,
			Recommends
		},
		created() {
			// 当前页面的路由对象
			console.log(this.$route);
			console.log(this.$router);
		}
	}
</script>

<style scoped="scoped">
		.ceshi{
			width: 100%;
			height: 100%;
		}
		.crx{
			height: 1000px;
		}
</style>