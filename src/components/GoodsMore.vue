<template>

	<div class="GoodsMore">

		<router-link :to="{path:'/product',query:{id:id}}">
			<div class="goods">
			<div class="images">
				<img :src="images" />
			</div>
			<div class="goods-item">
				<p v-text="title"></p>
				<span id="money">￥<span class="money" v-text="money"></span>.00</span>
				<span class="talks" v-text="talks"></span>
				<span class="ads" v-text="ads"></span>
			</div>
			</div>
		</router-link>

	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
			props:{
				id:{
					type:Number,
					default:0
				},
				title:{
					type:String,
					default:''
				},
				images:{
					type:'',
					default:''
				},
				money:{
					type:Number,
					default:0.00
				},
				talks:{
					type:String,
					default:''
				},
				ads:{
					type:String,
					default:''
				}
			}
	}
</script>

<style scoped="scoped">
	
	.GoodsMore {
		border-top: 1px solid #eee;
		margin-top: 0.2em;
		padding: 1rem;
		box-sizing: border-box;
	}
	
	.goods {
		text-decoration: none;
		color: #333;
		font-size: 15px;
		font-weight: normal;
		margin-top: 0.4rem;
		display: flex;
		display: -webkit-flex;
		box-sizing: border-box;
	}
	
	.images {
		width: 120px;
		height: 120px;
		box-sizing: border-box;
	}
	
	.images img {
		width: 120px;
		height: 120px;
		box-sizing: border-box;
		padding: 0.3rem;
	}
	
	.goods-item {
		flex: 1;
		box-sizing: border-box;
		/*background-color: salmon;*/
	}
	
	.goods-item p {
		width: 231px;
		text-align: left;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		box-sizing: border-box;
	}
	
	.goods-item span {
		text-align: left;
		display: block;
		font-size: 12px;
		color: #666;
	}
	
	#money {
		color: #e93b3d;
	}
	
	.goods-item span.money {
		display: inline-block;
		font-size: 14px;
		color: #e93b3d;
		font-weight: 400;
	}
	
	.goods-item span.talks {
		
	}
	
	.goods-item span.ads {
		text-align: right;
	}
</style>