<template>
	<div class="category-layout">
		<!--<category-left></category-left>-->
		<div class="category-left" ref='aside' @touchstart="asideTouchStart" @touchmove="asideTouchMove" @touchend="asideTouchEnd">
			<ul :style="{top:asideTop+'px'}" ref='aside-ul' :class="{transition:transition}">
				<li :class="{active:catIndex==index}" v-for="(item,index) in clicks" @click="catIndex=index;getContentList(item.id);">
					<span class="titles" v-text='item.texts'></span>
				</li>
			</ul>
		</div>

		<!--<category-right></category-right>-->
		<div class="category-right" ref='content' @touchstart="contentTouchStart" @touchmove="contentTouchMove" @touchend="contentTouchEnd">

			<div class="rights" :style="{top:contentTop+'px'}" ref='content-right' v-for="(row,i) in products">
				<!--top-->
				<div class="top">
					<router-link to=''>
						<img :src="row.images" />
					</router-link>
				</div>
				<!--hot-->
				<div class="hot clear">
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
						<li>
							<img :src="row.images" />
							<span v-text="row.name"></span>
						</li>
					</ul>
					<!---->
				</div>
			  	<!--<div class="crx"></div>-->
			</div>
		</div>
		<!--3-->
	</div>
</template>

<script>
	import CategoryLeft from '../components/CategoryLeft'
	import CategoryRight from '../components/CategoryRight'
	export default {
		data() {
			return {
				clicks: [{
					texts: '热门推荐',
					id: 1
				}, {
					texts: '手机数码',
					id: 2
				}, {
					texts: '家用电器',
					id: 3
				}, {
					texts: '电脑办公',
					id: 4
				}, {
					texts: '计生情趣',
					id: 5
				}, {
					texts: '美妆护肤',
					id: 6
				}, {
					texts: '个护清洁',
					id: 7
				}, {
					texts: '汽车用品',
					id: 8
				}, {
					texts: '京东超市',
					id: 9
				}, {
					texts: '男装',
					id: 10
				}, {
					texts: '男鞋',
					id: 11
				}, {
					texts: '女装',
					id: 12
				}, {
					texts: '女鞋',
					id: 13
				}, {
					texts: '母婴童装',
					id: 14
				}, {
					texts: '图书音像',
					id: 15
				}, {
					texts: '运动户外',
					id: 16
				}, {
					texts: '内衣配饰',
					id: 17
				}, {
					texts: '食品生鲜',
					id: 18
				}, {
					texts: '酒水饮料',
					id: 19
				}, {
					texts: '家具家装',
					id: 20
				}, {
					texts: '家具厨具',
					id: 21
				}, {
					texts: '箱包手袋',
					id: 22
				}, {
					texts: '钟表珠宝',
					id: 23
				}, {
					texts: '玩具乐器',
					id: 24
				}, {
					texts: '医药保健',
					id: 25
				}, {
					texts: '宠物生活',
					id: 26
				}, {
					texts: '礼品鲜花',
					id: 27
				}, {
					texts: '农资绿植',
					id: 28
				}, {
					texts: '生活旅游',
					id: 29
				}, {
					texts: '奢侈品',
					id: 30
				}, {
					texts: '海囤全球',
					id: 31
				}, {
					texts: '艺术邮币',
					id: 32
				}, {
					texts: '二手商品',
					id: 33
				}, {
					texts: '特产馆',
					id: 34
				}, {
					texts: '京东金融',
					id: 35
				}, {
					texts: '国际名牌',
					id: 36
				}, {
					texts: '拍卖',
					id: 37
				}, {
					texts: '房产',
					id: 38
				}, ],
				catIndex: 0,
				asideTop: 0,
				asideTopTmp: 0,
				asideStart: 0,
				minTop: 0,
				transition: false,
				contentStart: 0,
				contentTop: 0,
				contentTopTmp: 0,
				contentMinTop: 0,
				products:[],
				category:[{
					images: require('../../public/img/newUser.png'),
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
				}, {
					images: require('../../public/img/phone1.png'),
					name: '手机4'
				}, {
					images: require('../../public/img/phone1.png'),
					name: '手机5'
				}, {
					images: require('../../public/img/phone1.png'),
					name: '手机4'
				}, {
					images: require('../../public/img/phone1.png'),
					name: '手机5'
				}, {
					images: require('../../public/img/phone1.png'),
					name: '手机4'
				}, {
					images: require('../../public/img/phone1.png'),
					name: '手机5'
				}, {
					images: require('../../public/img/phone1.png'),
					name: '手机4'
				}, {
					images: require('../../public/img/phone1.png'),
					name: '手机5'
				}, {
					images: require('../../public/img/phone1.png'),
					name: '手机4'
				}, {
					images: require('../../public/img/phone1.png'),
					name: '手机5'
				}, {
					images: require('../../public/img/phone1.png'),
					name: '手机4'
				}, {
					images: require('../../public/img/phone1.png'),
					name: '手机5'
				}, ],
				}]
				
				
				

			};
		},
		methods: {
			getContentList(id) {
				this.products = {...this.categogy[(Math.random() > 0.5 ? 1 : 0)]};
				console.log(id);
			},
			asideTouchStart(event) {
				this.asideStartY = event.changedTouches[0].clientY;
				this.transition = false;
			},
			asideTouchMove(event) {
				var y = event.changedTouches[0].clientY;
				var t = this.asideTopTmp + y - this.asideStartY;
				//				console.log(t);
				//上下拉的阈值
				t = t < this.minTop ? this.minTop : t;
				t = t > 150 ? 150 : t;
				this.asideTop = t;
			},
			asideTouchEnd(event) {
				this.transition = true;
				this.asideTop = this.asideTop > 0 ? 0 : this.asideTop;
				this.asideTop = this.asideTop < (this.minTop + 150) ? (this.minTop + 150) : this.asideTop;
				this.asideTopTmp = this.asideTop;
			},
			
			//content内容下拉
			contentTouchStart(event) {
				this.contentStartY = event.changedTouches[0].clientY;
				this.transition = false;
			},
			contentTouchMove(event) {
				var y = event.changedTouches[0].clientY;
				var t = this.contentTopTmp + y - this.contentStartY;
				//console.log(t);
				//上下拉的阈值
				t = t < this.contentMinTop ? this.contentMinTop : t;
				t = t > 150 ? 150 : t;
				this.contentTop = t;
			},
			contentTouchEnd(event) {
				this.transition = true;
				this.contentTop = this.contentTop > 0 ? 0 : this.contentTop;
				this.contentTop = this.contentTop < (this.contentMinTop + 150) ? (this.contentMinTop + 150) : this.contentTop;
				this.contentTopTmp = this.contentTop;
			},

		},
		mounted() {
			//dom操作
			console.log(document.querySelector('.category-left').clientHeight);
			console.log(document.querySelector('.category-left ul').clientHeight);
			//数据型
			console.log(this.$refs['aside'].clientHeight);
			console.log(this.$refs['aside-ul'].clientHeight);
			//
			this.minTop = this.$refs['aside'].clientHeight - 150 - this.$refs['aside-ul'].clientHeight;
			this.contentMinTop = this.$refs['content'].clientHeight - 150 - this.$refs['content-right'].clientHeight;

			console.log(this.minTop);
		},
		components: {
			CategoryLeft,
			CategoryRight
		},
	}
</script>

<style scoped="scoped">
	html,
	body,
	#app,
	.category-page {
		height: 100%;
		margin: 0;
		padding: 0;
	}
	
	.clear:after {
		display: block;
		content: '';
		clear: both;
	}
	
	a {
		text-decoration: none;
	}
	
	.category-layout {
		height: 100%;
		display: flex;
		display: -webkit-flex;
		padding: 45px 0px 50px;
		box-sizing: border-box;
	}
	/**/
	
	.category-left {
		height: 100%;
		width: 85px;
		overflow: hidden;
		position: relative;
		background-color: #f8f8f8;
	}
	
	.category-left ul {
		margin: 0;
		padding: 0;
		list-style: none;
		width: 100%;
		position: absolute;
		left: 0px;
		top: 0px;
		border-right: solid 1px #CCCCCC;
		border-top: solid 1px #CCCCCC;
		box-sizing: border-box;
	}
	
	li {
		height: 46px;
		line-height: 46px;
		text-align: center;
		border-bottom: solid 1px #CCCCCC;
		box-sizing: border-box;
		color: #333;
		font-size: 14px
	}
	
	.category-left ul li.active {
		color: #f23030;
	}
	
	.titles {
		width: 86px;
		height: 46px;
		font-size: 12px;
		box-sizing: border-box;
	}
	
	.category-left a {
		text-decoration: none;
		color: #333333!important;
		text-align: center;
		font-size: 16px;
		display: block;
		width: 100%;
		height: auto;
		line-height: 46px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	/*right*/
	
	.category-right {
		flex: 1;
		max-width: 100%;
		height: 100%;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		overflow: hidden;
		position: relative;
	}
	
	.category-right .rights {
		position: absolute;
		top: 0px;
		left: 0px;
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
	}
	
	.category-item ul {
		display: flex;
		display: -webkit-flex;
		/*margin-top: 12px;*/
		background-color: #fff;
		display: block;
		margin: 0;
		padding: 0;
		list-style-type: none;
	}
	
	.category-item ul li {
		width: 32.8%;
		height: 100%;
		float: left;
		text-align: center;
		display: block;
		margin: 0;
		padding: 0;
		border: none;
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
	
	.transition {
		-webkit-transition: top 0.3s linear;
		transition: top 0.3s linear;
	}
	.crx{
		height: 500px;
	}
</style>