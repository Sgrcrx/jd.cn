<template>

	<div class="category-page">
		<search-bars></search-bars>

		<div class="container weui-flex">

			<div class="aside"  @touchstart="asideTouchStart" @touchmove="asideTouchMove" @touchend="asideTouchEnd" >

				<ul  :style="{top:asideTop+'px'}">
					<li :class="{active:navIndex==index}" v-for="(item,index) in nav" v-text="item.title" @click="navIndex=index;getContentList(item.id);"> </li>
				</ul>

			</div>

			<div class="content weui-flex__item"></div>

		</div>

		<footeres></footeres>
	</div>
</template>

<script>
	import SearchBars from "@/components/SearchBars"
	import Footeres from "@/components/Footeres"
	export default {
		data() {
			return {
				nav: [{
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '热门推荐'
				}, {
					id: 1,
					'title': '热门推荐'
				}],
				navIndex: 0,
				asideTop:0,
				asideTopTmp:0,
				asideStartY:0
			};
		},
		methods: {
			asideTouchStart(event){
				this.asideStartY = event.changedTouches[0].clientY;
				
			},
			asideTouchMove(event){
				var y = event.changedTouches[0].clientY;
				this.asideTop = (this.asideTopTmp + y-this.asideStartY)>150?150:(this.asideTopTmp + y-this.asideStartY);
			},
			asideTouchEnd(event){
				var y = event.changedTouches[0].clientY;
				this.asideTopTmp = this.asideTopTmp +  (y-this.asideStartY);
				
				this.asideTop = this.asideTop>0?0:this.asideTop;
				this.asideTopTmp = this.asideTop==0?0:this.asideTopTmp;
				this.asideStartY = y;
			},
			getContentList(id) {
				console.log('获取右边数据')
			}
		},
		components: {
			Footeres,
			SearchBars,
		}
	}
</script>

<style>
	html,
	body,
	#app,
	.category-page {
		height: 100%;
	}
	
	.category-page {}
	
	.category-page .search-bar {
		background-color: #e43130;
	}
	
	.category-page .container {
		background-color: red;
		height: 100%;
		padding: 45px 0px 50px;
		box-sizing: border-box;
	}
	
	.category-page .aside {
		height: 100%;
		width: 85px;
		overflow: hidden;
		position: relative;
		background-color: #f8f8f8;
	}
	
	.category-page .aside ul {
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
		/*-webkit-transition: top 0.2s linear;
		transition: top 0.1s linear;*/
	}
	
	.category-page .aside li {
		height: 46px;
		line-height: 46px;
		text-align: center;
		border-bottom: solid 1px #CCCCCC;
		box-sizing: border-box;
		color: #333;
		font-size: 14px
	}
	
	.category-page .aside li.active {
		color: #f23030;
	}
</style>