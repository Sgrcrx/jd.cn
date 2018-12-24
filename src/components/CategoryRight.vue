<template>
	<div class="category-right">
		<!--top-->
		<div class="top">
			<router-link to=''>
			<img src="../../public/img/newUser.png" />
			</router-link>
		</div>
		<!--hot-->
		<div class="hot">
			<div class="hot-item">
				热门分类
			</div>
			<div class="hot-up">
				<router-link to=''>
					<img src="../../public/img/ranks.png" /> 排行榜&nbsp;&nbsp;>
				</router-link>
			</div>
		</div>
		<!--分类图-->
		<div class="category-item">
			<ul>
				<li v-for="(item,index) in titles">
					<img :src="item.images" />
					<span v-text="item.name"></span>
				</li>
			</ul>

			<!---->
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				titles: [{
					images: require('../../public/img/phone1.png'),
					name: '手机1'
				}, {
					images: require('../../public/img/phone1.png'),
					name: '手机2'
				}, {
					images: require('../../public/img/phone1.png'),
					name: '手机3'
				}, {
					images: require('../../public/img/phone1.png'),
					name: '手机4'
				}, {
					images: require('../../public/img/phone1.png'),
					name: '手机5'
				}, ]
			};
		}
	}
</script>

<style scoped="scoped">
	body,
	#app {
		margin: 0;
		padding: 0;
	}
	
	.category-right {
		/*position: relative;*/
		width: 100%;
		height: 100%;
		box-sizing: border-box;
	}
	
	.category-right .top {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding: 8px 10px 10px;
	}
	
	.category-right .top img {
		width: 100%;
		height: auto;
		box-sizing: border-box;
	}
	
	.hot {
		display: block;
		content: '';
		clear: both;
		padding: 0px 10px;
		box-sizing: border-box;
	}
	
	.hot-item {
		display: inline-block;
		font-size: 14px;
		color: #333;
		font-weight: 700;
	}
	
	.hot-up {
		display: inline-block;
		float: right;
	}
	
	.hot-up img {
		width: 12px;
		height: 12px;
	}
	
	.hot-up a {
		color: #848689;
		font-size: 10px;
		line-height: 10px;
		margin-left: 4px;
		position: relative;
		top: 1px;
	}
	
	.category-item {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		border: 0;
		font-size: 0;
		padding: 7px 10px 0;
		overflow: hidden;
	}
	
	.category-item ul {
		display: flex;
		display: -webkit-flex;
		margin-top: 9px;
		background-color: #fff;
		display: block;
		margin: 0;
		padding: 0;
		list-style-type: none;
	}
	
	.category-item ul li {
		width: 32.8%;
		float: left;
		text-align: center;
		display: block;
		margin: 0;
		padding: 0;
		list-style-type: none;
	}
	
	.category-item ul li img {
		width: 70px;
		height: 70px;
	}
	
	.category-item ul li span {
		color: #333;
		height: 35px;
		margin-top: 2px;
		-webkit-box-pack: start;
		font-size: 12px;
		display: block;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>