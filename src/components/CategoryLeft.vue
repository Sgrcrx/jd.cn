<template>
	<div class="category-left">
		<div class="left-crx" v-for="(item,index) in clicks">
			<span class="titles">
				<router-link :to="item.to" v-text='item.texts'></router-link>
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				clicks: [{
					texts: '热门推荐',
					to: ''
				}, {
					texts: '手机数码',
					to: ''
				}, {
					texts: '家用电器',
					to: ''
				}, {
					texts: '电脑办公',
					to: ''
				}, {
					texts: '计生情趣',
					to: ''
				}, {
					texts: '美妆护肤',
					to: ''
				}, {
					texts: '个护清洁',
					to: ''
				}, {
					texts: '汽车用品',
					to: ''
				}, {
					texts: '京东超市',
					to: ''
				}, {
					texts: '男装',
					to: ''
				}, {
					texts: '男鞋',
					to: ''
				}, {
					texts: '女装',
					to: ''
				}, {
					texts: '女鞋',
					to: ''
				}, {
					texts: '母婴童装',
					to: ''
				}, {
					texts: '图书音像',
					to: ''
				}, {
					texts: '运动户外',
					to: ''
				}, {
					texts: '内衣配饰',
					to: ''
				}, {
					texts: '食品生鲜',
					to: ''
				}, {
					texts: '酒水饮料',
					to: ''
				}, {
					texts: '家具家装',
					to: ''
				}, {
					texts: '家具厨具',
					to: ''
				}, {
					texts: '箱包手袋',
					to: ''
				}, {
					texts: '钟表珠宝',
					to: ''
				}, {
					texts: '玩具乐器',
					to: ''
				}, {
					texts: '医药保健',
					to: ''
				}, {
					texts: '宠物生活',
					to: ''
				}, {
					texts: '礼品鲜花',
					to: ''
				}, {
					texts: '农资绿植',
					to: ''
				}, {
					texts: '生活旅游',
					to: ''
				}, {
					texts: '奢侈品',
					to: ''
				}, {
					texts: '海囤全球',
					to: ''
				}, {
					texts: '艺术邮币',
					to: ''
				}, {
					texts: '二手商品',
					to: ''
				}, {
					texts: '特产馆',
					to: ''
				}, {
					texts: '京东金融',
					to: ''
				}, {
					texts: '国际名牌',
					to: ''
				}, {
					texts: '拍卖',
					to: ''
				}, {
					texts: '房产',
					to: ''
				}, ]
			}
		},
		methods: {
			
			var offsetTop = 0;
			var startY = 0;
			var item = document.querySelector(".left-crx");
			var items = document.querySelector(".left-crx .titles");
			var ot = item.height() - items.height()-150;
			item.on({
				touchstart:function(e){
					startY = e.originalEvent.changedTouches[0].clientY;
				},
				touchmove:function(e){
					var y = e.originalEvent.changedTouches[0].clientY;
					var tmp = offsetTop+(y-startY);
					
					// 下拉的越界处理
					tmp = tmp>150?150:tmp;
					// 上拉的越界处理
					tmp = tmp<ot?ot:tmp;
					
					items.css("top",tmp+"px");
				},
				touchend:function(e){
					var y = e.originalEvent.changedTouches[0].clientY;
					
					offsetTop = offsetTop+(y-startY);
					
					// 松手后回到最顶部
					offsetTop = offsetTop>0?0:offsetTop;
					// 松手后回到最底部
					offsetTop = offsetTop<(ot+150)?(ot+150):offsetTop;
					
					items.animate({"top":offsetTop+"px"},200);
					
				},
				touchcancel:function(e){},
			});
		}
	}
</script>

<style scoped="scoped">
	.category-left {
		height: 100%;
		width: 86px;
		overflow: hidden;
		float: left;
		position: relative;
		background-color: white;
		box-sizing: border-box;
	}
	
	.left-crx {
		width: 100%;
		height: 100%;	
	}
	
	.titles {
		width: 86px;
		height: 46px;
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
		/*background-color: salmon;*/
	}
	
	.checked {
		background-color: #fff;
	}
</style>