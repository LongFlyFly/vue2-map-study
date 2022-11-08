<template>
	<div class="">
		<baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="11">
			<!-- 第一条路径 -->
			<bm-driving :start="start" :end="end" @searchcomplete="handleSearchComplete" :panel="false" @stop="reset"
				:autoViewport="true"></bm-driving>
			<!-- 第二条路径 -->
			<!-- <bm-driving :start="start1" :end="end1" @searchcomplete="handleSearchComplete1" :panel="false" @stop="reset1"
				:autoViewport="true"></bm-driving> -->

			<bml-lushu :path="path" :icon="icon" :play="play" :rotation="true">
			</bml-lushu>
			<!-- <bml-lushu :path="path1" :icon="icon1" :play="play1" :rotation="true">
			</bml-lushu> -->

		</baidu-map>

		<div class="control">
			出发地：<input ref="start" placeholder="请输入起点" value="天安门" /><br>
			目的地：<input ref="end" placeholder="请输入终点" value="奥林匹克公园" /><br>
			<el-button type="primary" @click="confirm">路径1</el-button><br>

			<!-- 出发地：<input ref="start1" placeholder="请输入起点" value="百度大厦" /><br>
			目的地：<input ref="end1" placeholder="请输入终点" value="奥林匹克公园" /><br>
			<el-button type="primary" @click="confirm1">路径2</el-button><br><br> -->
			
			时间阈值：<input  placeholder="请输入时间阈值"  /><br>
			距离阈值：<input  placeholder="请输入距离阈值"  /><br>
			<el-button type="primary">开始</el-button>
		</div>


		<div class="right">
			 <div class="block1">
				<el-date-picker
					v-model="value2"
					type="datetimerange"
					start-placeholder="开始日期"
					end-placeholder="结束日期"
					:default-time="['12:00:00']">
				</el-date-picker>
  			 </div>
				<br>
				<el-checkbox-group v-model="checkList">
					<el-checkbox label="里程"></el-checkbox>
					<el-checkbox label="速度"></el-checkbox>
					<el-checkbox label="途径点"></el-checkbox>
				</el-checkbox-group>

			<div>
				<span class="">轨迹回放:</span>
				<el-button type="success">点击回放</el-button>
			</div><br>
			
			<div class="block">
				<h3>颜色选择</h3>
				<el-color-picker v-model="color1"></el-color-picker>
			</div>

			 <div class="block">
				<span class="demonstration">轨迹线宽</span>
				<el-slider v-model="value1"></el-slider>
			</div>

		</div>

	</div>

</template>
 
<script>
	import {BmlLushu} from 'vue-baidu-map'
	
	export default {
		computed: {},
		components: {
			BmlLushu
		},
		data() {
			return {
				checkList: [],
				color1:null,
				value1: 10,
				value2:'',
				play: false,
				// play1: false,
				path: [],
				// path1:[],
				icon: {
					url: 'http://api.map.baidu.com/library/LuShu/1.2/examples/car.png',
					size: {
						width: 52,
						height: 26
					},
					opts: {
						anchor: {
							width: 27,
							height: 13
						}
					}
				},
				// icon1: {
				// 	url: 'http://api.map.baidu.com/library/LuShu/1.2/examples/car.png',
				// 	size: {
				// 		width: 52,
				// 		height: 26
				// 	},
				// 	opts: {
				// 		anchor: {
				// 			width: 27,
				// 			height: 13
				// 		}
				// 	}
				// },
				start: '天安门',
				
				// start1: '百度大厦',
				end: '奥林匹克公园',
			}
		},
		methods: {
			formatTooltip(val) {
				return val / 100;
			},
			reset () {
			      this.play = false
				//   this.play1 = false
			    },
			// reset1 () {
			     
			//     },
			handleSearchComplete(res) {
				this.path = res.getPlan(0).getRoute(0).getPath()
				// this.path1 = res.getPlan(0).getRoute(0).getPath()
			},
			// handleSearchComplete1(res1) {
				
			// },
			confirm() {
				this.start = this.$refs.start.value
				this.end = this.$refs.end.value
				this.play = true

				// this.start1 = this.$refs1.start1.value
				// this.end1 = this.$refs1.end1.value
				// this.play1 = true
			},
			// confirm1() {
				
			// }
		}
	}
</script>
 
<style scoped>
.el-date-editor--datetimerange.el-input, .el-date-editor--datetimerange.el-input__inner{
	width: 200px;
}
	.map {
		height: 600px;
		width: 100%;
	}
	.control{
		top: 100px;
		position: absolute;
		width: 20%;
		height: 300px;
		z-index: 5;
		background-color: rgba(225, 225, 225,0.7);
		text-align: center;
	}
	.right{
		top: 100px;
		right: 0px;
		position: absolute;
		width: 20%;
		height: 300px;
		z-index: 5;
		background-color: rgba(225, 225, 225,0.7);
		text-align: center;
	}
	
</style>