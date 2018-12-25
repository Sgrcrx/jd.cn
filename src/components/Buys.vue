<template>
	<div class="buys">
		<div class="buys_item">
			<div class="buys-it1">
				<router-link to="">
					<i class="fa fa-commenting"></i>
					<span>联系客服</span>
				</router-link>
				<router-link to="">
					<i class="fa fa-institution"></i>
					<span>进店</span>
				</router-link>
				<router-link to="">
					<i class="fa fa-shopping-cart"></i>
					<span>购物车</span>
				</router-link>
			</div>
			<div class="buys-it2">
				<router-link to="">加入购物车</router-link>
			</div>
			<div class="buys-it3">
				<router-link to="">立即购买</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{};
		},
		methods:{},
		components:{}
	}
</script>

<style scoped="scoped">
	.buys{
		width: 100%;
		position: fixed;
		z-index: 9999;
		left: 0px;
		bottom: 0px;
	}
	.buys .buys_item{
		width: 100%;
		height: 50px;
		display: flex;
		display: -webkit-flex;
		box-sizing: border-box;
		/*background-color: salmon;*/
	}
	
	.buys .buys_item .buys-it1{
		flex: 3;
		display: flex;
		display: -webkit-flex;
		box-sizing: border-box;
		background-color: #fff;
	}
	
	.buys .buys_item .buys-it1 a{
		flex: 1;
		height: 100%;
		color: #666;
		text-align: center;
		line-height: 24px;
		box-sizing: border-box;
		/*background-color: springgreen;*/
	}
	.buys .buys_item .buys-it1 a i{}
	.buys .buys_item .buys-it1 a span{
		display: block;
	}
	.buys .buys_item .buys-it2{
		flex: 2;
		text-align: center;
		line-height: 50px;
		background-color: #ff9600;
	}
	.buys .buys_item .buys-it3{
		flex: 2;
		text-align: center;
		line-height: 50px;
		background-color: #e4393c;
	}
	
	.buys .buys_item a{
		color: #fff;
	}
</style>