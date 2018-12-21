<template>
	<div class="recommend">
		<div class="nav white">
			<span class="left"><a href="#" class="red">配件推荐</a></span>
			<span class="right"><a href="#">猜你喜欢</a></span>
		</div>
		<div class="border"></div>
		<!--商品-->
		<div class="flex">
			<!--1-->
			<div class="flex-item">
				<img src="../../public/img/DELL01.jpg" />
				<h1>惠普(HP)星 13-an0002TU 13.3英寸轻薄笔记本电脑(i5-8265U 8G 256G PCIE SSD UMA FHD IPS 72%色域)银</h1>
				<span class="red">￥<span class="red big">4999</span>.00</span>
			</div>
			<!--2-->
			<div class="flex-item">
				<img src="../../public/img/DELL01.jpg" />
				<h1>惠普(HP)星 13-an0002TU 13.3英寸轻薄笔记本电脑(i5-8265U 8G 256G PCIE SSD UMA FHD IPS 72%色域)银</h1>
				<span class="red">￥<span class="red big">4999</span>.00</span>
			</div>
			<!--3-->
			<div class="flex-item">
				<img src="../../public/img/DELL01.jpg" />
				<h1>惠普(HP)星 13-an0002TU 13.3英寸轻薄笔记本电脑(i5-8265U 8G 256G PCIE SSD UMA FHD IPS 72%色域)银</h1>
				<span class="red">￥<span class="red big">4999</span>.00</span>
			</div>
		</div>
		<!---->
		<div class="flex">
			<!--1-->
			<div class="flex-item">
				<img src="../../public/img/DELL01.jpg" />
				<h1>惠普(HP)星 13-an0002TU 13.3英寸轻薄笔记本电脑(i5-8265U 8G 256G PCIE SSD UMA FHD IPS 72%色域)银</h1>
				<span class="red">￥<span class="red big">4999</span>.00</span>
			</div>
			<!--2-->
			<div class="flex-item">
				<img src="../../public/img/DELL01.jpg" />
				<h1>惠普(HP)星 13-an0002TU 13.3英寸轻薄笔记本电脑(i5-8265U 8G 256G PCIE SSD UMA FHD IPS 72%色域)银</h1>
				<span class="red">￥<span class="red big">4999</span>.00</span>
			</div>
			<!--3-->
			<div class="flex-item">
				<img src="../../public/img/DELL01.jpg" />
				<h1>惠普(HP)星 13-an0002TU 13.3英寸轻薄笔记本电脑(i5-8265U 8G 256G PCIE SSD UMA FHD IPS 72%色域)银</h1>
				<span class="red">￥<span class="red big">4999</span>.00</span>
			</div>
		</div>
		<!---->
		<div class="flex">
			<!--1-->
			<div class="flex-item">
				<img src="../../public/img/DELL01.jpg" />
				<h1>惠普(HP)星 13-an0002TU 13.3英寸轻薄笔记本电脑(i5-8265U 8G 256G PCIE SSD UMA FHD IPS 72%色域)银</h1>
				<span class="red">￥<span class="red big">4999</span>.00</span>
			</div>
			<!--2-->
			<div class="flex-item">
				<img src="../../public/img/DELL01.jpg" />
				<h1>惠普(HP)星 13-an0002TU 13.3英寸轻薄笔记本电脑(i5-8265U 8G 256G PCIE SSD UMA FHD IPS 72%色域)银</h1>
				<span class="red">￥<span class="red big">4999</span>.00</span>
			</div>
			<!--3-->
			<div class="flex-item">
				<img src="../../public/img/DELL01.jpg" />
				<h1>惠普(HP)星 13-an0002TU 13.3英寸轻薄笔记本电脑(i5-8265U 8G 256G PCIE SSD UMA FHD IPS 72%色域)银</h1>
				<span class="red">￥<span class="red big">4999</span>.00</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {}
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
	
	.nav {
		margin-top: 20px;
		box-sizing: border-box;
		padding: 0px 80px;
		width: 100%;
		height: 44px;
		line-height: 44px;
	}
	
	.flex {
		display: flex;
		display: -webkit-flex;
		box-sizing: border-box;
	}
	
	.flex .flex-item {
		flex: 1;
		width: 33%;
		height: auto;
		font-size: 12px;
		margin: 1px;
		box-sizing: border-box;
	}

	.flex .flex-item img {
		width: 100%;
	}
	
	.flex .flex-item h1 {
		box-sizing: border-box;
		padding: 0px 2px;
		overflow: hidden;
		font-size: 12px;
		font-weight: normal;
		color: #333;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}
	
	.flex .flex-item span {
		
	}
</style>