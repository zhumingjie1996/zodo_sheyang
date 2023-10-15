<template>
	<view class="content">
		<view class="header">
			<view class="bgIcons">
				<view class="icon1"></view>
				<view class="icon2"></view>
			</view>
			<span class="title">{{ title }}</span>
		</view>
					<view class="form">
				<!-- 注意，如果需要兼容微信小程序，最好通过setRules方法设置rules规则 -->
				<u--form labelPosition="top" :model="model1" ref="loginForm">
					<text class="u-form-item__title">用户名</text>
					<u-form-item prop="loginInfo.username" ref="login_userName">
						<u-input placeholder="请输入用户名" border="bottom" clearable v-model="model1.loginInfo.username"></u-input>
					</u-form-item>
					<text class="u-form-item__title">密码</text>
					<u-form-item prop="loginInfo.password" ref="login_password">
						<u-input placeholder="请输入密码" :password="!isShowPassword" v-model="model1.loginInfo.password"
							border="bottom">
							<u-icon slot="suffix" :name="!isShowPassword ? 'eye-off' : 'eye-fill'" size="20"
								color="rgba(198,199,203)" @click="troggleShowPassword"></u-icon>
						</u-input>
					</u-form-item>
				</u--form>
				<view style="margin-top: 30px;">
					<u-checkbox-group>
						<u-checkbox activeColor="#1b9b66" label="记住我" :checked="isRememberMe" @change="changeRememberMe">
						</u-checkbox>
					</u-checkbox-group>
				</view>
				<view class="submitBtn" @click="doLogin">登录</view>
			</view>
			</view>
</template>

<script>
import loginApi from '@/api/login.js'
export default {
	data() {
		return {
			title: '智慧商户',
						// 是否显示密码
			isShowPassword: false,
			// 用户名密码
			model1: {
				loginInfo: {
					username: '',
					password: ''
				},
			},
			// 记住我
			isRememberMe: false,
			rules: {
				'loginInfo.username': [{
					type: 'string',
					required: true,
					message: '用户名不能为空',
					trigger: 'blur',
				},
				{
					validator: (rule, value, callback) => {
						return uni.$u.test.mobile(value);
					},
					message: '用户名格式不正确',
					trigger: 'blur',
				}
				],
				'loginInfo.password': {
					type: 'string',
					required: true,
					message: '密码不能为空',
					trigger: 'blur',
				},
			},
		}
	},
	onLoad() {
	},
	onReady() {
		uni.getStorage({
			key: 'zodo_loginInfo',
			success: (res) => {
				console.log(res.data)
				this.$set(this.model1, 'loginInfo', {
					username: res.data.username,
					password: res.data.password
				})
				this.isRememberMe = res.data.isRememberMe
			}
		})
	},
	methods: {
		// 切换显示密码
		troggleShowPassword() {
			this.isShowPassword = !this.isShowPassword
		},

		// 记住我
		changeRememberMe(e) {
			this.isRememberMe = e
		},

		// 登录
		doLogin() {
			this.$refs.loginForm.setRules(this.rules)
			this.$refs.loginForm.validate()
				.then(() => {
					const loginInfo = this.model1.loginInfo
					loginInfo.userSource = "SELLER_SYSTEM"
					return loginApi.login(loginInfo)
						.then(res => {
							uni.setStorage({
								key: 'zodo_token',
								data: res.data.token
							});
							if (this.isRememberMe) {
								const zodo_loginInfo = {
									...this.model1.loginInfo,
									isRememberMe: this.isRememberMe
								}
								// 记住密码
								uni.setStorage({
									key: 'zodo_loginInfo',
									data: zodo_loginInfo
								})
							} else {
								uni.removeStorage({
									key: 'zodo_loginInfo'
								});
							}

							// 跳转到首页，用户信息传过去
							// 在起始页面跳转到test.vue页面，并监听test.vue发送过来的事件数据
							uni.switchTab({
								url: '../home/home'
							});

						})
				})
				.catch(errors => {
					console.log('登录失败')
				})
		}
	}
}
</script>

<style lang="scss">
@import '@/uni.scss';

.content {
	position: relative;
	width: 100vw;
	height: 100vh;

	.header {
		position: absolute;
		top: 0;
		height: 30vh;
		width: 100%;
		background-image: linear-gradient(90deg, $zodo-main-color-1, $zodo-main-color-2);
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		.bgIcons {
			position: absolute;
			width: 100%;
			height: 100%;
			left: 0;
			top: 0;

			.icon1 {
				position: absolute;
				top: -50px;
				left: 50px;
				height: 250px;
				width: 100px;
				background-color: #1cab69;
				border-radius: 999px;
				transform: rotateZ(30deg);
			}

			.icon2 {
				position: absolute;
				top: 120px;
				right: 40px;
				height: 120px;
				width: 120px;
				background-color: #39c77f;
				border-radius: 100%;
				box-shadow: 0 0 20px #39c77f;
				opacity: 0.5;
			}
		}

		.title {
			display: block;
			width: 100%;
			text-align: center;
			color: #fff;
			font-size: 30px;
			letter-spacing: $zodo-letter-space;
			z-index: 100;
		}
	}

	.form {
		position: absolute;
		bottom: 0;
		height: 75vh;
		width: 100%;
		background-color: #fff;
		border-radius: 20px 20px 0 0;
		padding: 50px 30px;
		box-sizing: border-box;

		.u-form-item__title {
			display: block;
			padding: 20px 0 10px 0;
			box-sizing: border-box;
			color: $zodo-main-color-1;
			font-weight: 700;
			font-size: 16px;
			letter-spacing: $zodo-letter-space;
		}

		.submitBtn {
			position: absolute;
			bottom: 60px;
			width: 80vw;
			height: 45px;
			border-radius: 999px;
			box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
			background-color: $zodo-main-color-1;
			color: #fff;
			line-height: 45px;
			text-align: center;
			font-weight: 700;
			letter-spacing: $zodo-letter-space;
		}
	}
}
</style>