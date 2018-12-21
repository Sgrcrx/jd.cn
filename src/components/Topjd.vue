<template>

	<div class="top-bar">
		<div class="go-back">
			<a href="#" @click.prevent="goBack">
				＜
			</a>
		</div>
		<div class="slot">
			<slot>京东登录</slot>
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {};
		},methods: {
			goBack() {
				window.history.length>1?this.$router.go(-1):this.$router.pish("/");
			}
		}
		
	}
</script>

<style scoped="scoped">
	.top-bar {
		font-size: 18px;
		width: 100%;
		color: #252525;
		height: 44px;
		text-align: center;
		display: flex;
		display: -webkit-flex;
		position: fixed;
		top: 0px;
		left: 0px;
		z-index: 9998;
		background-color: #fff;
		border-bottom: 1px solid #fff;
	}
	
	.top-bar a {
		color: #252525;
	}
	
	.top-bar .slot {
		line-height: 44px;
		flex: 1;
	}
	
	.top-bar .go-back {
		width: 40px;
		height: 44px;
		font-size: 22px;
		line-height: 44px;
		position: relative;
	}
	

	
</style>