<template>
	<div class="userbef">
		<topjd></topjd>
		
		<!--1.用户名、邮箱、已验证手机-->
		<div class="user-load">
			<input class="user-login" type="text" v-model="name" name="user-login" id="user-login" value="" placeholder='用户名/邮箱/已验证手机' />
		</div>
		<!--2.请输入密码  -- 忘记密码-->
		<div class="passwords">

			<input class="pass" type="password" v-model="pwd" name="pass" id="pass" value="" placeholder='请输入密码' />
			<i></i>
			<span class="yi">|</span>
			<a class="nopass">忘记密码</a>
		</div>
		<!--3.登录按钮-->

		<div class="weui-btn-area ">
			<a class="weui-btn weui-btn_primary" :class="{'weui-btn_disabled':!loginEnable}" @click.prevent="login">登录</a>
		</div>

		<!--3.other-->
		<div id="loadingToast" :class="{'toast-hidden':!loading}">
			<div class="weui-mask_transparent"></div>
			<div class="weui-toast">
				<i class="weui-loading weui-icon_toast"></i>
				<p class="weui-toast__content">登录中</p>
			</div>
		</div>

		<div id="toast" class="toast-hidden">
			<div class="weui-mask_transparent"></div>
			<div class="weui-toast">
				<i class="weui-icon-success-no-circle weui-icon_toast"></i>
				<p class="weui-toast__content">已完成</p>
			</div>
		</div>


		<a href="User">
			<div class="loadonce">
				<button>一键登录</button>
			</div>
		</a>
		<!--5.短信验证码登录  -- 手机快速注册-->
		<a href="User" class="info">
			<span class="info1">短信验证码登录</span>
			<span class="info2">手机快速注册</span>
		</a>
		<!--6.其他登录方式-->
		<p><span class="le"></span>其他登录方式<span class="ri"></span></p>
		<div class="admin">
			<div class="loads">
				<i class="fa fa-qq"></i>
				<span class="qq">QQ</span>
			</div>
		</div>
		<!--7.登录隐私-->
		<h1>登录即代表您已同意<a href="#">京东隐私政策</a></h1>
		<!--end-->
	</div>
</template>

<script>
	import qs from 'qs'
	import axios from 'axios'
	import Topjd from '../components/Topjd'
	export default {
		data() {

			return {
				loginUrl: "http://api.niyinlong.com/index.php/api/index/login",
				name: '',
				pwd: '',
				from:'',
				loading: false
			};
		},
		methods: {

//			login() {
//				// 提交数据:name,pwd
//				// 地址：loginUrl
//				// 方式：post
//				// 现在我们可以访问原生事件对象
//				//if(event) event.preventDefault();
//				//console.log(message);
//
//				if(this.disabled) {
//					this.loading = true;
//					axios.post(this.loginUrl, qs.stringify({
//						name: this.name,
//						pwd: this.pwd
//					})).then(res => {
//						alert(res.data.msg);
//						if(res.data.code > 0) {
//
//							this.$store.commit('setLoign', true);
//							this.loading = false;
//							switch(this.from){
//								case '/cart':this.$router.push('/cart');break;
//								case '/user':this.$router.push('/user');break;
//								default:this.$router.push('/');break;
//							}
//						}
//					}).catch(err => {
//						this.loading = false;
//					});
//
//				}
//			}

login() {
				// 提交数据:name,pwd
				// 地址：loginUrl
				// 方式：post

				if(this.loginEnable) {
					this.loading = true;
					axios.post(this.loginUrl, qs.stringify({
						name: this.name,
						pwd: this.pwd
					})).then(res => {
						alert(res.data.msg);
						if(res.data.code>0){
							this.$store.commit('setLoign',true);
							this.loading = false;
							// 控制登录后该去的地方
							switch(this.from){
								case '/cart':this.$router.push('/cart');break;
								case '/user':this.$router.push('/user');break;
								default:this.$router.push('/');break;
							}
						}
					}).catch(err => {
						this.loading = false;
					});

				}

			}
		},
		watch: {

		},
//		computed: {
//				disabled() {
//				if(this.name.length > 4 && this.pwd.length > 4) {
//					return true;
//				} else {
//					return false;
//				}
//			}
//
//		},


computed: {
			loginEnable() {
				if(this.name.length >4 && this.pwd.length > 4) {
					return true;
				} else {
					return false;
				}
			}
		},
//		created() {
//			this.from = this.$route.query.from;
//		},

created() {
			// 获取来的方向
			this.from = this.$route.query.from;
			
			// 当前页的路由对象
			console.log(this.$route);
			// 全局路由对象
			console.log(this.$router);
			
		},
		mounted() {},
		components: {
			Topjd
		}

	}
</script>

<style scoped="scoped">
	a {
		text-decoration: none;
		color: #999;
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
	
	.userbef {
		color: #999;
		margin-top: 54px;
		box-sizing: border-box;
		padding: 0px 20px;
	}
	
	.user-load {
		height: 40px;
		width: 100%;
		/*background-color: salmon;*/
		border-bottom: 1px solid #eee;
	}
	
	.user-load .user-login {
		font-size: 14px;
		width: 100%;
		font-weight: normal;
		line-height: 36px;
		border: none;
	}
	
	.passwords {
		margin-top: 16px;
		display: flex;
		display: -webkit-flex;
		padding-bottom: 10px;
		border-bottom: 1px solid #eee;
	}
	
	.user-load input,.passwords input{
		outline: none;
	}
	
	.passwords form {
		height: 20px;
	}
	
	.pass {
		flex: 1;
		border: none;
	}
	
	.yi {
		margin-right: 10px;
	}
	
	.nopass {
		width: 80px;
		font-size: 12px;
		color: #333;
	}
	
	.weui-btn-area {
		text-align: center;
		margin-top: 30px;
	}
	
	.weui-btn-area a,
	.loadonce button {
		width: 90%;
		height: 40px;
		border: none;
		outline: none;
		border-radius: 20px;
	}
	
	.weui-btn-area a {
		color: #fff;
		font-size: 16px;
		width: 100%;
	}
	
	.loadonce {
		text-align: center;
		margin-top: 10px;
	}
	
	.loadonce button {
		border: 1px solid #ff2000;
		color: #f10000;
		background-color: #fff;
	}
	
	.info {
		display: flex;
		display: -webkit-flex;
		margin-top: 20px;
		font-size: 10px;
		padding: 0px 14px;
	}
	
	.info1 {
		flex: 1;
	}
	
	.info2 {
		flex: 1;
		text-align: right;
	}
	
	p {
		text-align: center;
		font-size: 10px;
		margin-top: 50px;
	}
	
	.admin {
		width: 100%;
		height: 100%;
		/*background-color: salmon;*/
		text-align: center;
		display: flex;
		display: -webkit-flex;
	}
	
	.loads {
		flex: 1;
	}
	
	i.fa-qq {
		font-size: 20px;
		width: 40px;
		height: 40px;
		line-height: 40px;
		background-color: #e7f7fe;
		border-radius: 50%;
		color: #45c7f8;
	}
	
	.qq {
		display: block;
		font-size: 8px;
	}
	
	h1 {
		font-size: 12px;
		font-weight: normal;
		text-align: center;
	}
	
	h1 a {
		color: #75b9ff;
		text-decoration: none;
	}
	
	.toast-hidden {
		opacity: 0!important;
		display: none!important;
	}
</style>