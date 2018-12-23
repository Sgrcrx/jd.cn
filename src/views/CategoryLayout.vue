<template>
	<div class="category-layout">
		<category-left></category-left>
		<category-right></category-right>
	</div>
</template>

<script>
	import CategoryLeft from '../components/CategoryLeft'
	import CategoryRight from '../components/CategoryRight'
	export default {
		components: {
			CategoryLeft,
			CategoryRight
		},
	}
</script>

<style scoped="scoped">
	.category-layout {
		display: flex;
		display: -webkit-flex;
		padding: 45px 0px 60px;
		box-sizing: border-box;
		height: 100%;
		position: relative;
	}
	
	.category-layout .category-left {
		width: 86px;
		height: 100%;
		overflow: hidden;
		position: relative;
		background-color: white;
	}
	
	.category-layout .category-right {
		flex: 1;
		max-width: 100%;
		height: 100%;
		overflow: hidden;
	}
</style>