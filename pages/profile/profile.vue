<template>
	<view class="profileContainer">
		<view class="header">
			<view class="header_left">
				<view class="avatar">
					<u-icon name="account-fill" size="50" color="#fff"></u-icon>
				</view>
				<view class="nameAndPhone">
					<span class="userName">{{ userName }}</span>
					<span class="userPhone">{{ userPhone }}</span>
				</view>
			</view>
			<view class="header_right">
				<u-icon name="arrow-right" size="30" color="#fff"></u-icon>
			</view>
		</view>
		<view class="container">
			<view class="cells">
				<u-cell title="用户管理" border isLink size="large">
					<template slot="icon">
						<u-icon name="plus-people-fill" size="25"></u-icon>
					</template>
				</u-cell>
			</view>
			<view class="logOutBtn" @click="logOut">退出登录</view>
		</view>

		<u-modal :show="showLogoutModal" @confirm="confirmLogout" @cancel="showLogoutModal = false" confirmColor="#1b9b66"
			showCancelButton ref="uModal" :asyncClose="true" title="提示" content="是否确定退出登录？"></u-modal>
	</view>
</template>

<script>
export default {
	data() {
		return {
			userName: '13900000000',
			userPhone: '13900000000',
			showLogoutModal: false
		}
	},
	methods: {
		logOut() {
			this.showLogoutModal = true
		},
		confirmLogout() {
			uni.redirectTo({
				url: `/pages/login/index`
			});
		}
	}
}
</script>

<style lang="scss" scoped>
@import '@/uni.scss';

.profileContainer {
	position: relative;
	width: 100vw;
	height: 100vh;
	background-color: $zodo-main-color-1;
	overflow: hidden;

	.header {
		position: absolute;
		width: 100%;
		height: 100px;
		top: 15%;
		transform: translateY(-50%);
		padding: 0 20px;
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		&::before {
			content: "";
			position: absolute;
			left: -100px;
			top: -150px;
			height: 200px;
			width: 500px;
			background-image: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, .3));
			transform: rotateZ(-45deg);
			z-index: 0;
		}

		&::after {
			content: "";
			position: absolute;
			left: 200px;
			top: -100px;
			height: 100px;
			width: 500px;
			background-image: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, .3));
			transform: rotateZ(-45deg);
			z-index: 0;
		}

		.header_left {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 20px;

			.avatar {
				border: 2px solid #fff;
				border-radius: 100%;
				padding: 5px;
			}

			.nameAndPhone {
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				gap: 10px;
				color: #fff;
			}
		}
	}

	.container {
		position: absolute;
		bottom: 0;
		left: 0;
		height: 70%;
		width: 100%;
		background-color: #fff;
		border-radius: 30px 30px 0 0;
		padding: 30px 20px;
		box-sizing: border-box;

		.logOutBtn {
			position: absolute;
			bottom: 30px;
			width: calc(100% - 40px);
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
