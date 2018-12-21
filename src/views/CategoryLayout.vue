<template>
	<div class="category-layout">
			<div class="cat-flex">
				<div class="cat-left">
					1<category-left></category-left>
				</div>
				<div class="cat-right">
					2<category-right></category-right>
				</div>
			</div>
		</div>
</template>

<script>
	import CategoryLeft from '../components/CategoryLeft'
	import CategoryRight from '../components/CategoryRight'
	export default{
	components: {
			CategoryLeft,
			CategoryRight
		},	
	}
</script>

<style scoped="scoped">
	.category-layout{
		margin-top: 45px;
		width: 100%;
		height: 100%;
		background-color: salmon;
	}
	.cat-flex{
		display: flex;
		display: -webkit-flex;
		background-color: skyblue;
	}
	.cat-flex .cat-left{
		width: 85px;
		height: 100%;
		background-color: #eee;
	}
	.cat-flex .cat-right{
		width: 100%;
		height: 100%;
		flex: 1;
		-webkit-flex: 1;
	}
	
	
	
</style>