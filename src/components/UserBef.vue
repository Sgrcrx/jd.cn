<template>
	<div class="userbef">
		<topjd></topjd>
		<!--1.用户名、邮箱、已验证手机-->
		<div class="user-load">
			<h3>用户名/邮箱/已验证手机</h3>
		</div>
		<!--2.请输入密码  -- 忘记密码-->
		<div class="passwords">
			<!--<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
				<el-form-item label="密码" prop="pass">
					<el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="确认密码" prop="checkPass">
					<el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
				</el-form-item>
			</el-form>-->
			<span class="pass">请输入密码</span>
			<i></i>
			<span class="yi">|</span>
			<span class="nopass">忘记密码</span>

		</div>
		<!--3.登录按钮-->
		<a href="User">
			<div class="load">
				<button>登录</button>
			</div>
		</a>
		<!--4.一件登录-->
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
	import Topjd from '../components/Topjd'
	export default {
		data() {
			var validatePass = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请输入密码'));
				} else {
					if(this.ruleForm2.checkPass !== '') {
						this.$refs.ruleForm2.validateField('checkPass');
					}
					callback();
				}
			};
			var validatePass2 = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请再次输入密码'));
				} else if(value !== this.ruleForm2.pass) {
					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};
			return {
				ruleForm2: {
					pass: '',
					checkPass: '',

				},
				rules2: {
					pass: [{
						validator: validatePass,
						trigger: 'blur'
					}],
					checkPass: [{
						validator: validatePass2,
						trigger: 'blur'
					}]
				}
			};
		},
		components: {
			Topjd
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		}
	}
</script>

<style scoped="scoped">
	a{
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
	
	.user-load h3 {
		font-size: 14px;
		font-weight: normal;
		line-height: 36px;
	}
	
	.passwords {
		margin-top: 16px;
		display: flex;
		display: -webkit-flex;
		padding-bottom: 10px;
		border-bottom: 1px solid #eee;
	}
	
	.passwords form {
		height: 20px;
	}
	
	.pass {
		flex: 1;
	}
	
	.yi {
		margin-right: 10px;
	}
	
	.nopass {
		width: 80px;
		font-size: 12px;
		color: #333;
	}
	
	.load {
		text-align: center;
		margin-top: 30px;
	}
	
	.load button,
	.loadonce button {
		width: 94%;
		height: 40px;
		border: none;
		outline: none;
		border-radius: 20px;
	}
	
	.load button {
		color: #fff;
		background-image: linear-gradient(90deg, #fab3b3, #ffbcb3 73%, #ffcaba);
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
	.info{
		display: flex;
		display: -webkit-flex;
		margin-top: 20px;
		font-size: 10px;
		padding: 0px 14px;
	}
	.info1{
		flex: 1;
	}
	.info2{
		flex: 1;
		text-align: right;
	}
	p{
		text-align: center;
		font-size: 10px;
		margin-top: 50px;
	}
	.admin{
		width: 100%;
		height: 100%;
		/*background-color: salmon;*/
		text-align: center;
		display: flex;
		display: -webkit-flex;
	}
	.loads{
		flex: 1;
	}
	
	i.fa-qq{
		font-size: 20px;
		width: 40px;
		height: 40px;
		line-height: 40px;
		background-color: #e7f7fe;
		border-radius: 50%;
		color: #45c7f8;
		
	}
	.qq{
		display: block;
		font-size: 8px;
	}
	h1{
		font-size: 12px;
		font-weight: normal;
		text-align: center;
	}
	h1 a{
		color: #75b9ff;
		text-decoration: none;
	}
</style>