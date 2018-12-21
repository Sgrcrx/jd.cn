<template>
	<div class="goodes">
		<!--<h1>详情</h1>-->
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<a href="#">
						<img src="../../public/img/der.jpg" />
					</a>
				</div>
				<div class="swiper-slide">
					<a href="#">
						<img src="../../public/img/der.jpg" />
					</a>
				</div>
				<div class="swiper-slide">
					<a href="#">
						<img src="../../public/img/der.jpg" />
					</a>
				</div>
				<div class="swiper-slide">
					<a href="#">
						<img src="../../public/img/der.jpg" />
					</a>
				</div>

			</div>
			<div class="swiper-pagination"></div>
		</div>

		<!--swiper end-->

		<div class="xiang white">
			<!--der-->
			<h1 class="der">
			戴尔（DELL） XPS13-9370 13.3英寸轻薄高清微窄边框i7固态硬盘笔记本电脑 i7-8550U 16G 256G固态 金色标配
		</h1>
			<!--der1-->
			<span class="der1">
			<i class="fa fa-search" aria-hidden="true"></i>
			<p>已关注</p>
		</span>
		</div>
		<!--tests-->
		<div class="white">
			<p class="texts">新款八代xps轻薄本，1.2KG轻薄机身，咨询客服好礼相送</p>
			<div class="mon">
				<span class="money">
			￥<span class="price">12999</span> .00
				</span>
				<a class="tixing" href="#">
					<button>降价提醒</button>
				</a>
			</div>
		</div>
		<div class="boder"></div>

		<!--白条-->
		<div class="baitiao white">
			<span class="bai">白条</span>
			<p class="xi">白条支付即享3期免息/6期息费五折</p>
			<!--<span class="ellipsis">...</span>-->
			<div class="menu">
				<a href="#" @click.prevent="menuShow=true">
					<span class="ellipsis">...</span>
				</a>
				<ul class="menu-list" v-show="menuShow">
					<li v-for="(item,index) in menu">
						<router-link :to="item.to">
							<i class="fa" :class="item.icon"></i>
							<span v-text="item.title"></span>
						</router-link>
					</li>
				</ul>
			</div>
			<div class="header-mask" v-show="menuShow" @click="menuShow=false;"></div>
		</div>

		<div class="boder"></div>

		<!--促销-->
		<div class="cuxiao white">
			<span class="cu">
				<span class="chu">促销</span>
			<span class="zencu">
					<div class="xin">
						 <span class="zen">赠品</span> 戴尔（DELL） 鼠标赠品单拍不发货 赠品样式颜色随机发货如不满意请勿差评 黑色 X1，赠品13.3内胆包单拍不发货 赠品样式颜色随机发货如不满意请勿差评 黑色 X1，戴尔（DELL） 赠品单拍不发货 赠品样式颜色随机发货如不满意请勿差评 黑色 X1
		</div>
		<div class="xin">
			<span class="zen">加价购</span> 满1000元以折扣价在购物车换购热销商品
		</div>
		</span>
		</span>
		<div class="menu ss">
			<a href="#" @click.prevent="menuShow=true">
				<span class="ellipsis">...</span>
			</a>
			<ul class="menu-list" v-show="menuShow">
				<li v-for="(item,index) in menu">
					<router-link :to="item.to">
						<i class="fa" :class="item.icon"></i>
						<span v-text="item.title"></span>
					</router-link>
				</li>
			</ul>
		</div>
		<div class="header-mask" v-show="menuShow" @click="menuShow=false;"></div>
	</div>
	<div class="boder"></div>
	
	<!--已选-->
	<div class="ying white clear">
		<span class="bai left">已选</span>
		<p class="xi yixuan left">i7-8550U 16G 256G固态 金色标配,1个</p>
		<div class="menu right">
			<a href="#" @click.prevent="menuShow=true">
				<span class="ellipsis">...</span>
			</a>
			<ul class="menu-list" v-show="menuShow">
				<li v-for="(item,index) in menu">
					<router-link :to="item.to">
						<i class="fa" :class="item.icon"></i>
						<span v-text="item.title"></span>
					</router-link>
				</li>
			</ul>
		</div>
		<div class="header-mask" v-show="menuShow" @click="menuShow=false;"></div>
	</div>
	<div class="boder"></div>
	<!--送至-->
	<div class="white wh clear">
		<div class="left se">
				<span class="yf">送至</span>
				<div class="cc">
					<p class="xin">上海市某某某某某某某某某某某某某某</p>
					<div class="xian red">现货<span class="black">由商家从北京发货</span></div>
				</div>
		</div>
			<div class="left yun">
				<span class="yf">运费</span>
				<div class="cc">
					<p class="xin">免运费</p>
				</div>
			</div>
		
		<div class="menu right">
			<a href="#" @click.prevent="menuShow=true">
				<span class="ellipsis">...</span>
			</a>
			<ul class="menu-list" v-show="menuShow">
				<li v-for="(item,index) in menu">
					<router-link :to="item.to">
						<i class="fa" :class="item.icon"></i>
						<span v-text="item.title"></span>
					</router-link>
				</li>
			</ul>
		</div>
		<div class="header-mask" v-show="menuShow" @click="menuShow=false;"></div>
	</div>
	<div class="boder"></div>
		
	<!--商家-->
	<div class="white shop clear">
		<div class="sh01 left">
			<span>商家发货&售后</span>
			<span>7天无理由退货（激活后不支持）</span>
			<span>急速审核</span>
			<span>运送费险</span>
			<span>货到付款</span>
		</div>
		
		<div class="menu right">
			<a href="#" @click.prevent="menuShow=true">
				<span class="ellipsis">...</span>
			</a>
			<ul class="menu-list" v-show="menuShow">
				<li v-for="(item,index) in menu">
					<router-link :to="item.to">
						<i class="fa" :class="item.icon"></i>
						<span v-text="item.title"></span>
					</router-link>
				</li>
			</ul>
		</div>
		<div class="header-mask" v-show="menuShow" @click="menuShow=false;"></div>
	</div>
	<div class="boder"></div>
	<!--下拉-->
	<div class="crx"></div>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	export default {
		data: function() {
			return {
				id: 0,
				menuShow: false,
				menu: [{
					title: '首页',
					icon: 'fa-home',
					to: '/'
				}, {
					title: '分类搜索',
					icon: 'fa-search',
					to: '/category'
				}, {
					title: '购物车',
					icon: 'fa-shopping-cart',
					to: '/cart'
				}, {
					title: '我的京东',
					icon: 'fa fa-user',
					to: '/user'
				}, {
					title: '浏览记录',
					icon: 'fa-paw',
					to: '/history'
				}]
			};
		},
		methods: {
			goBack() {
				window.history.length > 1 ? this.$router.go(-1) : this.$router.pish("/");
			}
		},
		created() {
			this.id = this.$route.params.id;
		},
		mounted() {
			console.log("初始化轮播图！");
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

	.goodes {
		background-color: #e8e8ed;
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
	/*轮播图*/
	
	.swiper-slide {
		width: 100%;
		height: 100%;
	}
	
	.swiper-container {}
	
	.swiper-container a {
		display: block;
	}
	
	.swiper-container img {
		width: 100%;
	}
	/**/
	
	.xiang {
		display: flex;
		display: -webkit-flex;
	}
	
	h1.der {
		font-size: 16px;
		font-weight: normal;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		text-align: left;
		box-sizing: border-box;
		padding: 0px 10px;
		flex: 1;
	}
	
	.der1 {
		width: 50px;
		height: 70px;
		margin-right: 10px;
		/*background-color: salmon;*/
	}
	
	.der1 p {
		margin-top: 4px;
		/*background-color: aqua;*/
	}
	
	i.fa-heart {
		text-align: center;
		color: red;
	}
	
	p.texts {
		font-size: 12px;
		color: #e4393c;
		box-sizing: border-box;
		padding: 0px 10px;
	}
	
	span.money {
		color: #e4393c;
		font-size: 12px;
		margin-left: 10px;
	}
	
	span.money .price {
		font-size: 14px;
		font-weight: bold;
	}
	
	a.tixing {
		width: 60px;
		height: 20px;
		float: right;
		margin-right: 10px;
	}
	
	.mon {
		display: block;
		content: "";
		clear: both;
	}
	
	.boder {
		border-bottom: 1px solid #ddd;
		margin-top: 4px;
	}
	
	.baitiao {
		display: flex;
		display: -webkit-flex;
		box-sizing: border-box;
		height: 40px;
		padding: 0px 10px;
		line-height: 40px;
		/*background-color: saddlebrown;*/
	}
	
	.bai {
		color: #666;
		width: 50px;
	}
	
	.xi {
		font-weight: 500;
		flex: 1;
	}
	/*.baitiao .ellipsis{
		font-weight: 800;
	}*/
	
	.menu {
		width: 40px;
		height: 44px;
		font-size: 22px;
		line-height: 44px;
		text-align: right;
		position: relative;
		/*background-color: saddlebrown;*/
	}
	
	.menu-list {
		position: absolute;
		z-index: 9999;
		width: 125px;
		top: 53px;
		right: 10px;
		font-size: 14px;
		margin: 0;
		padding: 0px;
		list-style: none;
		text-align: left;
		background: rgba(0, 0, 0, .9);
	}
	
	.menu-list a {
		color: #fff;
		text-decoration: none;
	}
	
	.menu-list li {
		height: 40px;
		line-height: 40px;
		margin-left: 40px;
		position: relative;
		border-bottom: 1px solid hsla(0, 0%, 100%, .2);
	}
	
	.menu-list i.fa {
		width: 40px;
		height: 40px;
		line-height: 40px;
		display: block;
		text-align: center;
		position: absolute;
		top: 0px;
		font-size: 15px;
		left: -40px;
	}
	
	.header-mask {
		position: fixed;
		top: 0px;
		bottom: 0px;
		left: 0px;
		right: 0px;
		z-index: 9998;
	}
	
	.fa-ellipsis-h {
		/*background-color: aqua;*/
	}
	
	.ellipsis {
		position: relative;
		top: -6px;
		/*background-color: saddlebrown;*/
	}
	
	.cuxiao {
		height: 72px;
		width: 100%;
	}
	
	
	.cuxiao .cu {
		box-sizing: border-box;
		padding: 0px 10px;
		display: block;
		content: "";
		clear: both;
	}
	
	.cuxiao .chu {
		width: 50px;
		height: 50px;
		float: left;
		line-height: 50px;
		/*background-color: saddlebrown;*/
	}
	
	.cuxiao .zencu {
		float: left;
		box-sizing: border-box;
		/*background-color: aqua;*/
	}
	
	.cuxiao .zen {
		border: 1px solid #E4393C;
		color: #E4393C;
		font-size: 12px;
		margin-right: 8px;
		/*background-color: aqua;*/
	}
	
	.cuxiao .xin {
		width: 260px;
		font-size: 12px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		/*background-color: lawngreen;*/
	}
	.cuxiao .menu{
		/*background-color: aqua;*/
	}
	
	.cuxiao .ss {
		float: right;
		margin-right: 10px;
		margin-top: -10px;
	}
	
	.xins {
		display: block;
	}
	
	.wh {
		width: 100%;
		height: 80px;
	}
	
	.cc {
		display: inline-block;
/*		background-color: slateblue;*/
	}
	
	.xin,
	.xian {
		line-height: 30px;
	}
	
	.cc .xin {}
	
	.cc .xian {}
	.wh .xin{
		margin: 0px;
		padding: 0px;
		font-size: 16px;
		font-weight: normal;
		line-height: 20px;
	}
	.se{
		position: relative;
	}
	.yun{
		margin-top: -10px;
	}
	.yf {
		display: inline-block;
		width: 50px;
		height: 40px;
		position: relative;
		bottom: 16px;
		left: 0px;
		font-size: 16px;
		line-height: 50px;
	}
	.wh .menu{
		position: absolute;
		/*bottom: -30px;*/
		right: 10px;
	}
	
	.shop{
		
	}
	.shop .menu{
		/*background-color: sandybrown;*/
	}
	.sh01{
		font-size: 12px;
		color: #999;
		width: 330px;
		box-sizing: border-box;
		padding: 0px 6px;
		/*background-color: skyblue;*/
	}
	.sh01 span{
		padding: 0px 6px;
	}
	.shop .menu{
		/*background-color: #10AEFF;*/
		text-align: center;
	}
	
	/*.sed{
		background-color: salmon;
	}*/
	
	.ying{}
	.ying .menu{
		text-align: center;
/*		background-color: salmon;*/
	}
	.yixuan{
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	/*下拉*/
	
	.crx {
		height: 2000px;
	}
</style>