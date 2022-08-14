<template>
	<view class="base_body">
		<map :markers="markers" id="map1" style="width: 100%; height: 70%;" :latitude="latitude" :longitude="longitude">
			<cover-view slot="callout">
				<block v-for="(item,index) in markers" :key="index">
					<cover-view class="customCallout" :marker-id="item.id">
						<cover-view class="content">
							{{item.title}}
						</cover-view>
					</cover-view>
				</block>
			</cover-view>
		</map>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				map: '',
				latitude: 39.890, // 地图默认显示的维度
				longitude: 116.39752, // 地图默认显示的纬度

				markers: [{ // 标记点
					id: 1,
					latitude: 39.890,
					longitude: 116.39752,
					title: "点击提示1",
					joinCluster: true,
				}, {
					id: 2,
					latitude: 39.891,
					longitude: 116.39752,
					title: "点击提示2",
					joinCluster: true,
				}, {
					id: 3,
					latitude: 39.892,
					longitude: 116.39752,
					title: "点击提示3",
					joinCluster: true,
				}, {
					id: 4,
					latitude: 39.893,
					longitude: 116.39752,
					title: "点击提示4",
					joinCluster: false,
				}, ],
			}
		},
		onLoad() {

		},
		onReady() {
		},
		methods: {

		}
	}
</script>

<style>
	.base_body {
		width: 100%;
		height: 100%;
		position: absolute;
	}

	/* 水平，垂直居中 */
	.base_all_center {
		justify-content: center;
		align-items: center;
	}

	/* 垂直居中 */
	.base_center_vertical {
		display: flex;
		align-items: center;
	}

	/* 水平居中 */
	.base_center_horizontal {
		display: flex;
		justify-content: center;
	}

	/* 垂直布局 */
	.base_column {
		display: flex;
		flex-direction: column;
	}

	/* 横向布局 */
	.base_row {
		display: flex;
		flex-direction: row;
	}

	/* 基础dialog */
	.base_dialog {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0px;
		background: rgba(0, 0, 0, 0.5);
	}

	/* *************************************** */
	.customCallout {
		box-sizing: border-box;
		background-color: #fff;
		border: 1px solid #ccc;
		border-radius: 30px;
		width: 150px;
		height: 40px;
		display: inline-flex;
		padding: 5px 20px;
		justify-content: center;
		align-items: center;
	}

	.content {
		flex: 0 1 auto;
		margin: 0 10px;
		font-size: 14px;
	}
</style>

