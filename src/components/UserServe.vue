<template>
	<div class="user-surve">
		<a href="#">
			<span class="serve">客户服务</span>
			<i class="fa fa-angle-right"></i>
		</a>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style scoped="scoped">
	.user-surve{
		box-sizing: border-box;
		width: 100%;
		height: 40px;
		line-height: 40px;
		background-color: #fff;
		margin-bottom: 1rem;
		margin-top: 110px;
	}
	
	a{
		text-decoration: none;
		color: #666;
		display: block;
		content: '';
		clear: both;
	}
	
	span.serve{
		padding-left: 1rem;
	}
	
	i{
		float: right;
		line-height: 40px;
		padding-right: 1rem;
	}
</style>