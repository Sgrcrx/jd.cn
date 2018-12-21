<template>
	<div class="usertools">
		<div class="pay">
			<div class="pay-item"  v-for="(item,index) in pays">
				<slot></slot>
				<i class="fa" :class="item.icon"></i>
				<span v-text="item.test"></span>
			</div>
		</div>
		<div class="pay">
			<div class="pay-item"  v-for="(item,index) in payss">
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
					icon:'fa-clock-o',
					test:'我的预约'
				},{
					icon:'fa-train',
					test:'京东火车票'
				},{
					icon:'fa-windows',
					test:'应用推荐'
				},{
					icon:'fa-institution',
					test:'京东通信营业厅'
				},],
				
				payss:[{
					icon:'fa-credit-card-alt',
					test:'用户福利'
				},{
					icon:'fa-plane',
					test:'京东机票'
				},{
					icon:'fa-hotel',
					test:'京东酒店'
				},{
					icon:'',
					test:''
				}]
			}
		}
	}
</script>

<style>
	.usertools{
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
	
	.pay .pay-item i {
		display: block;
		padding-bottom: 10px;
		color: #dd9e58;
		font-size: 20px;
	}
	
	.pay .pay-item span {
		font-size: 12px;
	}
</style>