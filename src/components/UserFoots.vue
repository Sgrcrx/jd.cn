<template>
	<div class="userfoots">
		<div class="pay">
			<div class="pay-item"  v-for="(item,index) in pays">
				<slot></slot>
				<span id="red" v-text="item.its">
				</span>
				<span v-text="item.test"></span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				pays:[{
					its:'184',
					test:'商品收藏'
				},{
					its:'37',
					test:'店铺收藏'
				},{
					its:'90',
					test:'我的足迹'
				}]
			}
		}
	}
</script>
	
<style scoped="scoped">
	.userfoots{
		box-sizing: border-box;
		width: 100%;
		height: 100px;
		background-color: #fff;
		margin-bottom: 1rem;
	}
	
	.pay {
		box-sizing: border-box;
		/*padding: 0rem 0.8rem;*/
		display: flex;
		display: -webkit-flex;
	}
	
	.pay .pay-item {
		width: 25%;
		height: 100px;
		flex: 1;
		background-color: #fff;
		text-align: center;
		padding-top: 30px;
	}
	
	.pay .pay-item span#red {
		display: block;
		padding-bottom: 10px;
		color: #333;
		font-weight: bold;
		font-size: 14px;
	}
	
	.pay .pay-item span {
		font-size: 12px;
		color: #666;
		margin-top: -0.1rem;
	}
</style>