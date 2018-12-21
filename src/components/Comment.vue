<template>
	<div class="comment">
		<!--<h1>评价</h1>-->
		
		<div class="floor floor-1 white clear">
			<span class="pingjia left">
				评价
			</span>
			<span class="talk right">
				暂无评价，欢迎您购买之后留下宝贵的评价
			</span>
		</div>
		<div class="border"></div>
		<!--问答-->
		<div class="floor floor-2 white clear">
			<span class="pingjia left">
				问答专区
			</span>
			<span class="talk right">
				暂无提问信息，<a href="#">去提问></a>
			</span>
		</div>
		<div class="border"></div>
		
		
		
	</div>
</template>

<script>
	export default{}
</script>

<style scoped="scoped">
	.left{
		float: left;
	}
	.right{
		float: right;
	}
	.clear:after{
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
	.comment{
		background-color: #e8e8ed;
	}
	.floor{
		box-sizing: border-box;
		padding: 0px 10px;
		color: #666;
	}
	.floor-1{
		margin-top: 20px;
	}
	.floor-1 .pingjia{}
	.floor-1 .talk{}
	.border{
		border-bottom: 1px solid #ddd;
		/*margin-top: 1px;*/
	}
	.floor-2{
		width: 100%;
		height: 44px;
		line-height: 44px;
	}
</style>