<template>
	<div class="Groom">
		<div class="left"></div>
		<div class="center">为您推荐</div>
		<div class="right"></div>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style scoped="scoped">
	.Groom{
		display: block;
		content: '';
		clear: both;
	}
	.Groom .left,.Groom .right{
		width: 40%;
		height: 16px;
		border-bottom: 1px solid #ddd;
		margin-top: -4px;
	}
	
	.Groom .left{
		float: left;
	}
	.Groom .center{
		float: left;
		padding-left: 10px;
	}
	
	.Groom .right{
		float: right;
	}
</style>