<template>

	<div>

		<top-bar>

			<ul>
				<li :class="{active:navIndex==index}" v-for="(item,index) in nav" @click="navIndex=index;scroll(item.ref)"> <span v-text="item.title"></span> </li>
			</ul>

		</top-bar>

		<div class="wap">
			<div id="product" ref="product">
				<goodes></goodes>
			</div>
			<div id="comment" ref="comment">
				<comment></comment>
			</div>
			<div id="detail" ref="detail">
				<detail></detail>
			</div>
			<div id="recommend" ref="recommend">
				<recommend></recommend>
			</div>
		</div>
		<!--footer-->
		<buys></buys>
	</div>

</template>

<script>
	import TopBar from "@/components/TopBar";
	import Goodes from '@/components/Goodes'
	import Detail from '@/components/Detail'
	import Comment from '@/components/Comment'
	import Recommend from '@/components/Recommend'
	import Buys from '@/components/Buys'

	export default {
		data() {
			return {
				nav: [{
					ref: 'product',
					title: '商品'
				}, {
					ref: 'comment',
					title: '评价'
				}, {
					ref: 'detail',
					title: '详情'
				}, {
					ref: 'recommend',
					title: '推荐'
				}],
				navIndex: 0,
			};
		},

		methods: {
			scroll(ref) {

				console.log(this.$refs[ref]);
				var top = this.$refs[ref].offsetTop;
				//				var tmp = document.documentElement.scrollTop;
				//				var count = 20;
				//				var step = (top-tmp)/count;
				//				var t = setInterval(()=>{
				//					
				//					tmp += step;
				//					document.documentElement.scrollTop = tmp;
				//					count--;
				//					
				//					if(count<=0){
				//						clearInterval(t);
				//					}
				//					
				//				},50);

				document.documentElement.scrollTop = top;
				//				document.body.scrollTop = top;
			}
		},
		mounted() {

			console.log(document.body.scrollTop);

		},
		components: {
			TopBar,
			Goodes,
			Comment,
			Detail,
			Recommend,
			Buys
		}
	}
</script>

<style>
	.top-bar {
		width: 100%;
		position: fixed;
		top: 0px;
		left: 0px;
	}
	
	.top-bar ul {
		margin: 0;
		padding: 0;
		text-align: center;
		list-style: none;
		padding: 0px 40px;
	}
	
	.top-bar ul li {
		float: left;
		width: 25%;
	}
	
	.top-bar ul li.active span {
		color: #e4393c;
		font-weight: bold;
		padding-left: 13px;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAYBAMAAAABjmA/AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURek7PUdwTO49Peg6Peo6Puc6Pek6POk6POg6POg7PeY8POg6POk6PApBjXgAAAANdFJOU/8ADttQPYvEqJYqW/KuifCQAAAAjklEQVQI10XOsRGCQBAF0D8eA6Imn4ERMh0tgDE2UDqgA2Ij7UA6gA6MjCnB0vzLBlxw92Z379+B/F7DgwQraI3C05AQc0ElfBCac40NOlzIE2LUuJM5gtpHMtPxc+yW1tuH15j8+hYHD1yhdPQoHO3yKG+GSNgbXsI81AocgNS+qlgLFwrrGNjFdFS9tj82HhIeoIR1QQAAAABJRU5ErkJggg==) no-repeat 0;
		background-size: 8px;
	}
	.wap{
		box-sizing: border-box;
		padding: 44px 0px 50px;
		overflow: hidden;
	}
</style>