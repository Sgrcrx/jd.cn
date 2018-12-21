<template>
	<div class="goods-choese">
		<div class="goods-item" v-for="(item,index) in choose">
			<a href="#">
				<span v-text="item.title"></span>
			</a>
		</div>
		
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				choose:[{
					title:'12.12'
				},{
					title:'新品'
				},{
					title:'品牌'
				},{
					title:'价格'
				},]
			}
		}
	}
</script>

<style scoped="scoped">
	.goods-choese{
		display: flex;
		display: -webkit-flex;
		box-sizing: border-box;
	}
	.goods-item{
		flex: 1;
		box-sizing: border-box;
	}
	
	.goods-item a{
		text-decoration: none;
		color: #666;
	}
	.goods-item span{
		padding: 0.4rem 1.6rem;
		line-height: 4rem;
		border-radius: 0.3rem;
		box-sizing: border-box;
		background-color: #f2f2f7;
	}
</style>