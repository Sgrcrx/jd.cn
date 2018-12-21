<template>
	<div class="admincrx">
		<header>
			<router-view name="header"></router-view>
		</header>
		<div class="main">
			<aside>
				<router-view name="aside"></router-view>
			</aside>
			<div class="content">
				<router-view></router-view>
			</div>
		</div>
		
	</div>
</template>

<script>
	
</script>

<style scoped="scoped">
	html,body,.admincrx .main,#app{
		width: 100%;
	}
	.admincrx{
		width: 100%;
		height: 100%;
		
	}
	.admincrx header{
		width: 100%;
		height: 60px;
		position: fixed;
		top: 0px;
		left: 0px;
		border-bottom: 1px solid #ccc;
	}
	.admincrx .main{
		width: 100%;
		height: 100%;
		box-sizing: border-box;
	}
	.admincrx .main aside{
		width: 260px;
		height: 100%;
		position: fixed;
		left: 0px;
		top: 60px;
		box-sizing: border-box;
		border-right: 1px solid #ccc;
	}
	.admincrx .main .content{
		width: 100%;
		height: 100%;
		padding-top: 60px;
		padding-left: 260px;
		overflow-y: auto;
		overflow-x: auto;
	}
	
</style>