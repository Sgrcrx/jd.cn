<template>
	<div class="userpay">
		<div class="pay">
			<div class="pay-item"  v-for="(item,index) in pays">
				<slot></slot>
				<i class="fa" :class="item.icon"></i>
				<span v-text="item.test"></span>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		data(){
			return{
				pays:[{
					icon:'fa-cc-paypal',
					test:'待付款'
				},{
					icon:'fa-truck',
					test:'待收货'
				},{
					icon:'fa-money',
					test:'退换/售后'
				},{
					icon:'fa-book',
					test:'全部订单'
				},]
			}
		}
	}
</script>

<style scoped="scoped">
	.userpay {
		box-sizing: border-box;
		width: 100%;
		height: 100px;
		background-color: #fff;
		margin-bottom: 1rem;
		/*background-color: salmon;*/
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
	
	.pay .pay-item i {
		display: block;
		padding-bottom: 10px;
		color: #dd9e58;
		font-size: 20px;
	}
	
	.pay .pay-item:last-of-type i{
		color: #e93b3d;
	}
	
	.pay .pay-item span {
		font-size: 12px;
	}
</style>