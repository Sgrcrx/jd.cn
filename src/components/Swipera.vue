<template>
	
		<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="(item,index) in data">
				<router-link :to="item.url">
					<img :src="item.image">
				</router-link>
			</div>
		</div>
		<div class="swiper-pagination"></div>
	</div>
	
</template>

<script>
	import Swiper from "swiper"
	import axios from "axios"
	export default {
		data() {
			return {
				data: [],
			};
		},
		methods: {
			getSwiper() {
				axios.get(this.serveRoot+'/index.php/api/index/getSwiper').then(res => {
					this.data = res.data;
				});
			}
		},
		created() {
			this.getSwiper();
		},
		mounted() {
			console.log(this.data);
		},
		updated() {
			// 初始化轮播图
			new Swiper('.swiper-container', {
				pagination: {
					el: '.swiper-pagination',
				},
				autoplay: true
			});
		}
	}
</script>

<style scoped="scoped">
	@import url("../assets/css/swiper.min.css");
	/*轮播图*/
	
	.swiper-container {
		width: 100%;
		height: 100%;
		/*background-color: mistyrose;*/
	}
	
	.swiper-container a {
		display: block;
	}
	
	.swiper-container img {
		width: 100%;
	}
</style>