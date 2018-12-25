<template>
	<div class="comment-item">
		<!--评价区-->
		<div class="pingjia" v-for="(item,index) in prods">
			<div class="jia1 clear">
				<div class="user" v-text="item.user"></div>
				<div class="star" v-for="(cow,j) in item.star">
					<i class="fa" :class="item.star[j].fa"></i>
				</div>
				<div class="day" v-text="item.day"></div>
			</div>
			<div class="jia2">
				<span v-text="item.title"></span>
			</div>
			<div class="border"></div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				prods:[{
					id: 1,
					user: 'aaa',
					day: '2018.12.25',
					title: '配置整体够用，很流畅。屏幕显示很棒，颜色很真实。省电，静音，基本没有发热。便携性也不错，第一天用很满意。',
					star:[{
						fa: 'fa-star'
					},{
						fa: 'fa-star'
					},{
						fa: 'fa-star'
					},{
						fa: 'fa-star'
					},{
						fa: 'fa-star'
					}]
				},{
					id: 2,
					user: 'bbb',
					day: '2018.08.01',
					title: '正品 发货速度很快 物流也很好 没有质量问题 很满意',
					star:[{
						fa: 'fa-star'
					},{
						fa: 'fa-star'
					},{
						fa: 'fa-star'
					},{
						fa: 'fa-star'
					}]
				},{
					id: 3,
					user: 'ccc',
					day: '2018.11.22',
					title: '性价比高，运行较顺畅，长时间运行没发现有问题，办公首选',
					star:[{
						fa: 'fa-star'
					},{
						fa: 'fa-star'
					},{
						fa: 'fa-star'
					}]
				},{
					id: 4,
					user: 'ddd',
					day: '2018.10.05',
					title: '机子一开机就卡卡的声音还有温度特别高把更新都已经结束了都还是有这个问题 平时直接打开微信聊个天都是高温度 叫我自己去找售后检测 但是售后又无法给检测报告(明确的意思就是不能退嘛)我找客户 不管我怎么说 都是有一句7天内有问题就不能退换 但是我一送检测时间肯定不只是7天。',
					star:[{
						fa: 'fa-star'
					},{
						fa: 'fa-star'
					}]
				},{
					id: 5,
					user: 'eee',
					day: '2017.05.12',
					title: '整体还不错，降噪控制的还行',
					star:[{
						fa: 'fa-star'
					},{
						fa: 'fa-star'
					},{
						fa: 'fa-star'
					},{
						fa: 'fa-star'
					},{
						fa: 'fa-star'
					}]
				},]
			};
		},
	}
</script>

<style scoped="scoped">
	.clear:after{
		display: block;
		content: '';
		clear: both;
	}
	.comment-item{
		background-color: #fff;
	}
	.border{
		border-bottom: 1px solid #ddd;
		margin-top: 5px;
	}
	.comment-item .pingjia{
		box-sizing: border-box;
		padding: 0px 10px;
		margin-bottom: 5px;
/*		background-color: skyblue;*/
		
	}
	.comment-item .pingjia .jia1{
		height: 30px;
		line-height: 30px;
		/*background-color: salmon;*/
	}
	.comment-item .pingjia .jia1 .user{
		width: 50px;
		display: inline-block;
		/*background-color: salmon;*/
	}
	.comment-item .pingjia .jia1 .star{
		display: inline-block;
		/*background-color: palegoldenrod;*/
	}
	.comment-item .pingjia .jia1 .star i{
		color: #ff9600;
		/*background-color: saddlebrown;*/
	}
	.comment-item .pingjia .jia1 .day{
		width: 80px;
		display: inline-block;
		float: right;
		/*background-color: skyblue;*/
	}
	.comment-item .pingjia .jia2{}
	.comment-item .pingjia .jia2 span{}
</style>