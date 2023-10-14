<template>
	<view class="homeContainer">
		<u-sticky>
			<u-transition :show="headerShow" mode="fade-down" :duration="1000">
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
							<span style="font-weight: 700;">退出</span>
						</view>
					</view>
					<view class="enteranceList">
						<view class="enteranceListItem" v-for="(item, index) in enteranceListInfo" :key="index">
							<u-icon :name="item.iconName" size="40" color="#fff"></u-icon>
							<span>{{ item.text }}</span>
						</view>
					</view>
				</view>
			</u-transition>
		</u-sticky>
		<view class="container">
			<view class="module module-1">
				<view class="info">
					<view class="infoItem" v-for="(item, index) in mainDataList" :key="index">
						<span class="value">
							<u-count-to :startVal="0" :endVal="item.value" color="#1b9b66" fontSize="35"
								:bold="true"></u-count-to>
						</span>
						<span class="label">{{ item.label }}</span>
					</view>
				</view>
			</view>
			<view class="module module-2">
				<!-- <view class="title">采购管理</view> -->
				<view class="info">
					<view class="infoLeft">
						<view style="font-size: 18px; font-weight: 700; display: flex;gap: 5px;"><span>进场申报</span><u-icon
								name="arrow-right" color="#fff"></u-icon></view>
						<span style="font-size: 12px;">提前申报快速入场</span>
					</view>
					<view class="infoRight">
						<u-image class="icon" width="100px" height="150px"
							:src="require('../../static/onlineClass.png')"></u-image>
					</view>
				</view>
			</view>
			<view class="module module-3">
				<view class="title" style="width: 50%;">
					<u-subsection :list="list" :current="current" active-color="#1b9b66"
						@change="subsectionChange"></u-subsection>
				</view>
				<!-- 商品库 -->
				<u-transition :show="current === 0" mode="slide-left" :duration="200">
					<view class="info" v-if="current === 0">
						<view class="infoLeft">
							<view class="barItem">
								<view class="barTitle">
									<span style="color:#66cc33">启用</span>
									<span style="color:#66cc33">1</span>
								</view>
								<u-line-progress :percentage="7" activeColor="#66cc33" :showText="false"
									height="10"></u-line-progress>
							</view>
							<view class="barItem">
								<view class="barTitle">
									<span style="color:#ffb74d">审核中</span>
									<span style="color:#ffb74d">2</span>
								</view>
								<u-line-progress :percentage="30" activeColor="#ffb74d" :showText="false"
									height="10"></u-line-progress>
							</view>
							<view class="barItem">
								<view class="barTitle">
									<span style="color:#adb0b8">停用</span>
									<span style="color:#adb0b8">3</span>
								</view>
								<u-line-progress :percentage="30" activeColor="#adb0b8" :showText="false"
									height="10"></u-line-progress>
							</view>
						</view>
						<view class="infoRight">
							<view class="rightBtn">
								<span class="label">商品库</span>
								<u-icon name="arrow-right" color="#fff"></u-icon>
							</view>
							<view class="rightBtn">
								<span class="label">商品申请</span>
								<u-icon name="arrow-right" color="#fff"></u-icon>
							</view>
						</view>
					</view>
				</u-transition>
				<!-- 供应商 -->
				<u-transition :show="current === 1" mode="slide-right" :duration="200">
					<view class="info" v-if="current === 1">
						<view class="infoLeft">
							<view class="barItem">
								<view class="barTitle">
									<span style="color:#66cc33">启用</span>
									<span style="color:#66cc33">1</span>
								</view>
								<u-line-progress :percentage="7" activeColor="#66cc33" :showText="false"
									height="10"></u-line-progress>
							</view>
							<view class="barItem">
								<view class="barTitle">
									<span style="color:#ffb74d">审核中</span>
									<span style="color:#ffb74d">2</span>
								</view>
								<u-line-progress :percentage="30" activeColor="#ffb74d" :showText="false"
									height="10"></u-line-progress>
							</view>
							<view class="barItem">
								<view class="barTitle">
									<span style="color:#adb0b8">停用</span>
									<span style="color:#adb0b8">3</span>
								</view>
								<u-line-progress :percentage="30" activeColor="#adb0b8" :showText="false"
									height="10"></u-line-progress>
							</view>
						</view>
						<view class="infoRight">
							<view class="rightBtn">
								<span class="label">供应商</span>
								<u-icon name="arrow-right" color="#fff"></u-icon>
							</view>
							<view class="rightBtn">
								<span class="label">供应商申请</span>
								<u-icon name="arrow-right" color="#fff"></u-icon>
							</view>
						</view>
					</view>
				</u-transition>
			</view>
			<view class="module module-5">
				<view class="info">
					<view class="infoLeft">
						<view style="font-size: 18px; font-weight: 700; display: flex;gap: 5px;"><span>在线培训</span><u-icon
								name="arrow-right" color="#fff"></u-icon></view>
						<span style="font-size: 12px;">方便快捷的培训方案</span>
					</view>
					<view class="infoRight">
						<u-image class="icon" width="100px" height="150px"
							:src="require('../../static/approachICon.png')"></u-image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			headerShow: true,
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
			}],
			mainDataList: [
				{
					label: '待采样',
					value: '100'
				},
				{
					label: '不合格数量',
					value: '55'
				}
			],
			list: [
				{
					name: '商品库'
				},
				{
					name: '供应商'
				}
			],
			current: 0
		};
	},
	methods: {
		subsectionChange(e) {
			this.current = e
		}
	}

}
</script>

<style lang="scss" scoped>
@import '@/uni.scss';

.homeContainer {
	width: 100vw;

	.homeHeader {
		position: relative;
		height: 160px;
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
			height: 60px;
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

	.container {
		.module {
			width: 100%;
			padding: 15px;
			margin: 10px 0;
			box-sizing: border-box;

			.title {
				font-size: 18px;
				font-weight: 700;
				letter-spacing: $zodo-letter-space;
				color: #3a3a3a;
				margin-bottom: 15px;
			}

			.info {
				background-color: #eee;
				box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.2);
				border-radius: 10px;
			}
		}

		.module-1 {

			.info {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-around;
				padding: 15px;

				.infoItem {
					display: flex;
					flex-direction: column;
					align-items: center;

					.label {
						color: #666666;
						font-size: 12px;
						letter-spacing: $zodo-letter-space;
					}
				}
			}
		}

		.module-2,
		.module-5 {
			overflow-y: visible;

			.info {
				position: relative;
				width: 100%;
				background-image: linear-gradient(90deg, #b5d95b, #daecad);
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				padding: 15px;
				z-index: 1;
				box-sizing: border-box;
				overflow-y: visible;


				&::before {
					content: '';
					position: absolute;
					top: -10px;
					right: 100px;
					width: 30px;
					height: 30px;
					border-radius: 100%;
					background-color: rgba($color: #ffffff, $alpha: 0.3);
				}

				&::after {
					content: '';
					position: absolute;
					bottom: -10px;
					left: 100px;
					width: 60px;
					height: 60px;
					border-radius: 100%;
					background-color: rgba($color: #ffffff, $alpha: 0.3);
				}

				.infoLeft {
					display: flex;
					flex-direction: column;
					gap: 10px;
					color: #fff;
					letter-spacing: $zodo-letter-space;
				}

				.infoRight {
					position: absolute;
					right: 10px;
					top: -15px;

					.icon {
						position: absolute;
						z-index: 10;
					}
				}
			}
		}

		.module-3 {
			.info {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-around;
				gap: 15px;
				padding: 10px;

				.infoLeft,
				.infoRight {
					width: 50%;
					height: 135px;
					padding: 10px;
					border-radius: 10px;
					display: flex;
					flex-direction: column;
					justify-content: space-between;

					.barItem {
						display: flex;
						flex-direction: column;
						gap: 5px;

						.barTitle {
							font-size: 12px;
							color: #666666;
							display: flex;
							justify-content: space-between;

							span{
								&:nth-child(2){
									font-weight: 700;
								}
							}
						}
					}
				}

				.infoLeft {
					background-color: #fff;
					box-sizing: border-box;
				}

				.infoRight {
					padding: 0;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					gap: 10px;

					.rightBtn {
						padding: 20px 10px;
						display: flex;
						align-items: center;
						justify-content: space-between;
						border-radius: 10px;

						.label {
							color: #fff;
							letter-spacing: $zodo-letter-space;
							font-size: 18px;
							font-weight: 700;
						}

						&:nth-child(1) {
							position: relative;
							background-image: linear-gradient(90deg, #f5bc68, #f9d7a4);
							overflow: hidden;

							&::before {
								content: '';
								position: absolute;
								top: 10px;
								right: 100px;
								width: 20px;
								height: 20px;
								border-radius: 100%;
								background-color: rgba($color: #ffffff, $alpha: 0.2);
							}

							&::after {
								content: '';
								position: absolute;
								bottom: -10px;
								left: 100px;
								width: 50px;
								height: 50px;
								border-radius: 100%;
								background-color: rgba($color: #ffffff, $alpha: 0.2);
							}
						}

						&:nth-child(2) {
							position: relative;
							background-image: linear-gradient(90deg, #7075c3, #a9acdb);
							overflow: hidden;

							&::before {
								content: '';
								position: absolute;
								top: 10px;
								right: 30px;
								width: 30px;
								height: 30px;
								border-radius: 100%;
								background-color: rgba($color: #ffffff, $alpha: 0.2);
							}

							&::after {
								content: '';
								position: absolute;
								bottom: 10px;
								left: 50px;
								width: 60px;
								height: 60px;
								border-radius: 100%;
								background-color: rgba($color: #ffffff, $alpha: 0.1);
							}
						}
					}
				}
			}
		}

		.module-5 {
			.info {
				background-image: linear-gradient(90deg, #a375d1, #e0d1f0);
			}
		}
	}
}
</style>
