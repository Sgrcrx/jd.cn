<template>

	<div class="product-list clear">
		<div class='product' v-for="(item,index) in products">
			<a :href='item.id'>
				<div class='product-image'>
					<img :src='item.image'>
				</div>
				<div class='product-title' v-text='item.title'></div>
				<div class='product-info'>
					<div class='product-price'>￥<span v-text='item.price'></span></div>
					<div class='product-similar'></div>
				</div>
				<div class='similar-info'></div>
			</a>
		</div>
	</div>
</template>

<script>
	import axios from "axios"

	export default {
		data() {
			return {
				products: []
			};
		},
		methods: {
			getProductList() {
				axios.get(this.serveRoot + "/index.php/api/index/productList").then(res => {
					console.log(res);
					this.products = res.data;
				}).catch(err => {});
			}
		},
		created() {
			this.getProductList();
		}
	}
</script>

<style scoped="scoped">
	img {
		border: 0 none;
		vertical-align: top;
	}
	
	.left {
		float: left;
	}
	
	.right {
		float: right;
	}
	
	.clear:after {
		display: block;
		content: "";
		clear: both;
	}
	
	.product {
		width: 50%;
		float: left;
		padding-right: 2px;
		padding-bottom: 4px;
		box-sizing: border-box;
	}
	
	.product a {
		background-color: #FFFFFF;
		display: block;
		text-decoration: none;
	}
	
	.product:nth-child(2n) {
		padding-right: 0px;
		padding-left: 2px;
	}
	
	.product-image img {
		width: 100%;
	}
	
	.product-title {
		box-sizing: border-box;
		height: 31px;
		font-size: 13px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		word-break: break-word;
		color: #232326;
		margin-top: 5px;
		line-height: 16px;
		margin-bottom: 3px;
		padding: 0 4px;
		background-color: #fff;
	}
	
	.product-price {
		color: #f23030;
		display: inline-block;
		padding: 0 5px 0 4px;
		position: relative;
		top: 1px;
		height: 25px;
		line-height: 25px;
	}
	
	.similar-info {
		height: 26px;
	}
</style>