<template>
	<div class="router">
		
		
		
		<!--编程式导航-->
		<button @click="$router.push('/')">首页</button>
		<button @click="$router.push({path:'/category'})">分类</button>
		<button @click="$router.push({name:'search',parames:{userId:123},query: {plan: 'private'}})">搜索</button>
		<button>购物车</button>
		<button>用户</button>
		<br />
		<!--router-link-->
		<router-link to="/">首页-router-link</router-link><br />
		<router-link :to="{path:'/category'}">分类-router-link</router-link><br />
		<router-link :to="{name:'search',parames:{userId:123},query: {plan: 'private'}}">搜索-router-link</router-link><br />
		<!--router.go-->
		<button @click="$router.go(-1)">上一页</button>
		<button @click="$router.go(1)">下一页</button>
		
		
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style>
	button{
		margin: 20px;
	}
</style>