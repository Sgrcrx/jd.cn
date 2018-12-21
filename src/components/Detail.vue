<template>
	<div class="detail">
		<div class="flex">
			<div class="flex-item selected">
				商品介绍
			</div>
			<div class="flex-item">
				规格参数
			</div>
			<div class="flex-item">
				售后保障
			</div>
		</div>
		
		
		
		
	</div>
</template>

<script>
	export default{}
</script>

<style scoped="scoped">
	.left {
		float: left;
	}
	
	.right {
		float: right;
	}
	
	.clear:after {
		display: block;
		content: '';
		clear: both;
	}
	
	.white {
		background-color: #fff;
	}
	
	.red {
		color: #e4393c;
	}
	
	.black {
		color: #333;
	}
	
	.big {
		font-size: 16px;
	}
	
	.recommend {
		background-color: #e8e8ed;
	}
	
	.floor {
		box-sizing: border-box;
		padding: 0px 10px;
		color: #666;
	}
	
	a {
		text-decoration: none;
		color: #333;
	}
	
	.border {
		border-bottom: 1px solid #ddd;
	}
	
	.detail{
		margin-top: 20px;
	}
	.flex{
		height: 44px;
		line-height: 44px;
		display: flex;
		display: -webkit-flex;
	}
	.flex .flex-item{
		flex: 1;
		text-align: center;
		border: 1px solid #ddd;
	}
	.selected{
		color: #e4393c;
	}
</style>