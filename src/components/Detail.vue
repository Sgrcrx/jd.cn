<template>
	<div class="detail">
		<div class="flex">
			<div class="flex-item selected">
				商品介绍
			</div>
			<div class="flex-item">
				规格参数
			</div>
			<div class="flex-item">
				售后保障
			</div>
		</div>
		<!--1-->
		<div class="images" v-for="(item,index) in intor">
			<img :src="item.images"/>
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				intor:[{
					id: 1,
					images:require('../../public/img/xi001.jpg')
				},{
					id: 2,
					images:require('../../public/img/xi002.jpg')
				},{
					id: 3,
					images:require('../../public/img/xi003.jpg')
				},{
					id: 4,
					images:require('../../public/img/xi004.jpg')
				},{
					id: 5,
					images:require('../../public/img/xi005.jpg')
				},{
					id: 6,
					images:require('../../public/img/xi006.jpg')
				},{
					id: 7,
					images:require('../../public/img/xi007.jpg')
				},{
					id: 8,
					images:require('../../public/img/xi008.jpg')
				},{
					id: 9,
					images:require('../../public/img/xi009.jpg')
				},{
					id: 10,
					images:require('../../public/img/xi010.jpg')
				},{
					id: 11,
					images:require('../../public/img/xi011.jpg')
				},{
					id: 12,
					images:require('../../public/img/xi012.jpg')
				},{
					id: 13,
					images:require('../../public/img/xi013.jpg')
				},{
					id: 14,
					images:require('../../public/img/xi014.jpg')
				},{
					id: 15,
					images:require('../../public/img/xi015.jpg')
				},{
					id: 16,
					images:require('../../public/img/xi016.jpg')
				},{
					id: 17,
					images:require('../../public/img/xi017.jpg')
				},{
					id: 18,
					images:require('../../public/img/xi018.jpg')
				},{
					id: 19,
					images:require('../../public/img/xi019.jpg')
				},]
			};
		},
	}
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
	
	.detail{
		margin-top: 20px;
	}
	.flex{
		height: 44px;
		line-height: 44px;
		display: flex;
		display: -webkit-flex;
	}
	.flex .flex-item{
		flex: 1;
		text-align: center;
		border: 1px solid #ddd;
	}
	.selected{
		color: #e4393c;
	}
	
	.images{
		width: 100%;
		height: 100%;
		box-sizing: border-box;
	}
	.images img{
		width: 100%;
		height: 100%;
		box-sizing: border-box;
	}
</style>