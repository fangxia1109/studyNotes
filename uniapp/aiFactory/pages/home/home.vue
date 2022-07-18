<template>
	<view>
		<view class="uni-margin-wrap">
			<swiper 
				class="swiper" 
				circular 
				:indicator-dots="indicatorDots" 
				:indicator-active-color="indicatorActiveColor"
				:autoplay="autoplay" 
				:interval="interval"
				:duration="duration">
				<swiper-item v-for="(item, index) in swiperDataList" :key="index">
					<view class="swiper-item uni-bg-red" :style="{'background-color': item.color, 'color': '#ffffff'}">{{item.name}}</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="saleClass">
			<view class="title">
				<text class="left">全球销量TOP3</text>
				<text class="right">
					<text class="right-content">更多</text>
					<img src="@/static/image/png/arrow-right.png" alt="">
				</text>
			</view>
			<view class="middle-line"></view>
			<view class="content">
				<view class="content-item" v-for="(item, index) in globalDataList" :key="index">
					<text class="name">{{item.name}}</text>
					<text class="num">{{item.num}}万</text>
				</view>
			</view>
		</view>
		<view class="saleClass">
			<view class="title">
				<text class="left">全国销量TOP3</text>
				<text class="right">
					<text class="right-content">更多</text>
					<img src="@/static/image/png/arrow-right.png" alt="">
				</text>
			</view>
			<view class="middle-line"></view>
			<view class="content">
				<view class="content-item" v-for="(item, index) in countryDataList" :key="index">
					<text class="name">{{item.name}}</text>
					<text class="num">{{item.num}}万</text>
				</view>
			</view>
		</view>
		<view class="saleClass">
			<view class="title">
				<text class="left">生产分析</text>
			</view>
			<view class="middle-line"></view>
			<view class="content1">
				<view class="content-item1">
					<view class="item green">
						<img src="@/static/image/png/data-view.png" alt="">
						<text class="item-title">产线</text>
					</view>
					<view class="item-content">
						<view class="itemItem">
							<text class="itemItem-title">实际产能</text>
							<text class="itemItem-num greenFont">{{productData[0].actualCapacity}}</text>
						</view>
						<view class="itemItem">
							<text class="itemItem-title">计划产能</text>
							<text class="itemItem-num greenFont">{{productData[0].planCapacity}}</text>
						</view>
						<view class="itemItem">
							<text class="itemItem-title">达成率</text>
							<text class="itemItem-num greenFont">{{productData[0].achievementRate}}<text class="percent">%</text></text>
						</view>
					</view>
				</view>
				<view class="content-item1">
					<view class="item blue">
						<img src="@/static/image/png/electronics.png" alt="">
						<text class="item-title">设备</text>
					</view>
					<view class="item-content">
						<view class="itemItem">
							<text class="itemItem-title">
								稼动时间
								<text class="unit">(分钟)</text>
							</text>
							<text class="itemItem-num blueFont">{{productData[1].moveTime}}</text>
						</view>
						<view class="itemItem">
							<text class="itemItem-title">
								生产时间
								<text class="unit">(分钟)</text>
							</text>
							<text class="itemItem-num blueFont">{{productData[1].productTime}}</text>
						</view>
						<view class="itemItem">
							<text class="itemItem-title">稼动率</text>
							<text class="itemItem-num blueFont">{{productData[1].mobilizationRate}} <text class="percent">%</text></text>
						</view>
					</view>
				</view>
			</view>
			<view class="content1">
				<view class="content-item1">
					<view class="item red">
						<img src="@/static/image/png/setting.png" alt="">
						<text class="item-title">故障</text>
					</view>
					<view class="item-content">
						<view class="itemItem">
							<text class="itemItem-title">故障总次数</text>
							<text class="itemItem-num redFont">{{productData[2].faultSumNum}}</text>
						</view>
						<view class="itemItem">
							<text class="itemItem-title">
								故障累计时间
								<text class="unit">(分钟)</text>
							</text>
							<text class="itemItem-num redFont">{{productData[2].faultSumTime}}</text>
						</view>
					</view>
				</view>
				<view class="content-item1">
					<view class="item grey">
						<img src="@/static/image/png/ashbin.png" alt="">
						<text class="item-title">抛料</text>
					</view>
					<view class="item-content">
						<view class="itemItem">
							<text class="itemItem-title">抛料次数</text>
							<text class="itemItem-num greyFont">{{productData[3].throwMaterialNum}}</text>
						</view>
						<view class="itemItem">
							<text class="itemItem-title">吸着次数</text>
							<text class="itemItem-num greyFont">{{productData[3].absorptionNum}}</text>
						</view>
						<view class="itemItem">
							<text class="itemItem-title">抛料PPM</text>
							<text class="itemItem-num greyFont">{{productData[3].throwMaterialPPM}}</text>
						</view>
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
				swiperDataList: [
					{
						name: '1',
						url: '',
						color: 'red'
					},
					{
						name: '2',
						url: '',
						color: 'blue'
					},
					{
						name: '3',
						url: '',
						color: 'green'
					}
				],
				globalDataList: [
					{
						name: '中国',
						num: 666
					},
					{
						name: '加拿大',
						num: 389
					},
					{
						name: '德国',
						num: 199
					}
				],
				countryDataList: [
					{
						name: '上海',
						num: 666
					},
					{
						name: '北京',
						num: 389
					},
					{
						name: '广州',
						num: 199
					}
				],
				productData: [
					{
						type: '产线',
						actualCapacity: 2800,
						planCapacity: 3000,
						achievementRate: 93
					},
					{
						type: '设备',
						moveTime: 500,
						productTime: 600,
						mobilizationRate: 60
					},
					{
						type: '故障',
						faultSumNum: 50,
						faultSumTime: 40
					},
					{
						type: '抛料',
						throwMaterialNum: 30,
						absorptionNum: 10000,
						throwMaterialPPM: 3000
					}
				],
				indicatorDots: true,
				indicatorActiveColor: '#ffffff',
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		methods: {
	
		}
	}
</script>

<style>
	page {
		background-color: #ececec;
	}
	.uni-margin-wrap {
		width: 100%;;
	}
	/* .swiper {
		height: 300rpx;
	} */
	.swiper-item {
		display: block;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
	}
	.swiper-list {
		margin-top: 40rpx;
		margin-bottom: 0;
	}
	.uni-common-mt{
		margin-top:60rpx;
		position:relative;
	}
	.info {
		position: absolute;
		right:20rpx;
	}
    .uni-padding-wrap {
        width: 550rpx;
        padding:0 100rpx;
    }
	.saleClass {
		display: flex;
		flex-direction: column;
		margin: 30rpx 0 ;
		background-color: #ffffff;
	}
	.title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx 8rpx 4rpx;
	}
	.left {
		font-size: 30rpx;
	}
	.right {
		font-size: 26rpx;
	}
	.middle-line {
		height: 4rpx;
		background-color: #ececec;
	}
	.content {
		display: flex;
		justify-content: space-around;
		padding: 20rpx 0
	}
	.content-item {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.name {
		font-size: 30rpx;
	}
	.num {
		font-size: 40rpx;
	}
	.content1 {
		display: flex;
		/* justify-content: space-around; */
		/* flex-wrap: wrap; */
		/* padding: 20rpx 0; */
		background-color: #f5f5f5;
	}
	.content-item1 {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 10rpx;
		margin: 10rpx;
		background-color: #ffffff;
		border-radius: 10rpx;
	}
	.content-item1 img {
		width: 30rpx;
		height: 30rpx;
	}
	.item {
		width: 100%;
		font-size: 30rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 10rpx;
	}
	.item-content {
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	.itemItem {
		margin-top: 4rpx;
		display: flex;
		justify-content: space-between;
	}
	.greenFont {
		color: #54a4a3
	}
	.blueFont {
		color: #2995fc
	}
	.redFont {
		color: #ee5771
	}
	.greyFont {
		color: #616969
	}
	.green {
		background-color: #daf9f5;
		color: #54a4a3
	}
	.blue {
		background-color: #cef1ff;
		color: #2995fc
	}
	.red {
		background-color: #fddde6;
		color: #ee5771
	}
	.grey {
		background-color: #ededed;
		color: #616969
	}
	.unit {
		font-size: 24rpx;
	}
	.percent {
		font-size: 26rpx;
	}
</style>