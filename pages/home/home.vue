<template>
	<view class="homeContainer">
		<view class="homeHeader">
			<!-- 头部用户信息 -->
			<view class="userInfo">
				<view class="userInfo_left">
					<view class="avatar">
						<u-icon name="account-fill" size="20" color="#fff"></u-icon>
					</view>
					<view class="nameAndPhone">
						<span class="userName">欢迎，{{ userName }}</span>
					</view>
				</view>
				<view class="userInfo_right">
					<span>退出</span>
				</view>
			</view>
			<view class="enteranceList">
				<view class="enteranceListItem" v-for="(item, index) in enteranceListInfo" :key="index">
					<u-icon :name="item.iconName" size="50" color="#fff"></u-icon>
					<span>{{ item.text }}</span>
				</view>
			</view>
		</view>
		<view class="container">
			<view class="module module-1"></view>
			<view class="module module-2"></view>
			<view class="module module-3"></view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			userName: '13900000000',
			pageValue: 0,
			enteranceListInfo: [{
				text: '检测信息',
				iconName: 'order',
				toPath: ''
			}, {
				text: '溯源信息',
				iconName: 'attach',
				toPath: ''
			}, {
				text: '从业人员',
				iconName: 'account',
				toPath: ''
			}]
		};
	}

}
</script>

<style lang="scss" scoped>
@import '@/uni.scss';

.homeContainer {
	position: relative;
	width: 100vw;

	.homeHeader {
		position: absolute;
		left: 0;
		top: 0;
		height: 200px;
		width: 100%;
		background-image: linear-gradient(90deg, $zodo-main-color-2, $zodo-main-color-1);
		border-radius: 0 0 15px 15px;
		box-shadow: 0 0 10px rgba($color: #000000, $alpha: .5);
		overflow: hidden;

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

		.userInfo {
			width: 100%;
			padding: 20px;
			box-sizing: border-box;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			z-index: 10;

			.userInfo_left {
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

			.userInfo_right {
				font-size: 12px;
				color: #fff;
			}
		}

		.enteranceList {
			width: 100%;
			height: 100px;
			padding: 0 20px;
			box-sizing: border-box;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			z-index: 100;

			.enteranceListItem {
				height: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;

				span {
					color: #fff;
					font-size: 15px;
					font-weight: 700;
					letter-spacing: $zodo-letter-space;
				}
			}
		}
	}
}
</style>
