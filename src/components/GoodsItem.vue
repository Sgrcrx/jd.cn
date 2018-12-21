<template>
	<div class="goodsitem">
		
		<div class="goods">
			<div class="goods-item" v-for="(item,index) in goodes">
				<span v-text="item.title"></span>
				<i class="fa fa-angle-down"></i>
			</div>
		</div>
			
	</div>
</template>

<script>
	export default{
		data(){
			return{
				goodes:[{
					title:'综合'
				},{
					title:'销量'
				},{
					title:'品牌'
				},{
					title:'服务'
				},]
			}
		}
	}
</script>

<style scoped="scoped">
	.goodsitem{
		margin-top: 54px;
		border-bottom: 1px solid #eee;
	}
	.goods{
		display: flex;
		display: -webkit-flex;
	}
	.goods-item{
		flex: 1;
		width: 25%;
		height: 40px;
	}
	
</style>