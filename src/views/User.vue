<template>
	<div class="UserCenter">
		<tops></tops>
		<user-ele></user-ele>
		<user-pay></user-pay>
		<user-coupon></user-coupon>
		<user-foots></user-foots>
		<user-tools></user-tools>
		<user-serve></user-serve>
		<groom></groom>
		<goods></goods>
		<div class="crx"></div>
		<footeres></footeres>
	</div>
</template>

<script>
	import Footeres from '../components/Footeres'
	import Tops from '../components/Tops'
	import UserEle from '../components/UserEle'
	import UserPay from '../components/UserPay'
	import UserCoupon from '../components/UserCoupon'
	import UserFoots from '../components/UserFoots'
	import UserTools from '../components/UserTools'
	import UserServe from '../components/UserServe'
	import Groom from '../components/Groom'
	import Goods from'../components/Goods'

	export default {
		name: 'user',
		components: {
			Footeres,
			Tops,
			UserEle,
			UserPay,
			UserCoupon,
			UserFoots,
			UserTools,
			UserServe,
			Groom,
			Goods
		}
	}
</script>

<style scoped="scoped">
	.UserCenter {
		background-color: #f7f7f7;
	}
	
	.crx{
		height: 2000px;
	}
</style>