<template>
	<div>
	    <div id="container"></div>

		<div class="control">
			<div class="block">
				<span>
					<h2 class="el-icon-setting">回放显示</h2>
				</span>
				<div class="block">
					<el-date-picker
					v-model="value1"
					type="datetime"
					placeholder="选择日期时间">
					</el-date-picker>
				</div>
				<br>
				<el-button type="primary">开始回放</el-button>
					<div class="choseColor">
						<h2>轨迹颜色：<el-color-picker v-model="color1"></el-color-picker></h2>
					</div>
					
					<div class="block">
						<span class="demonstration">大小</span>
						<el-slider v-model="slider"></el-slider>
					</div>

			</div>
		</div>

	    <div class="input-card">
	      <h4>轨迹回放控制</h4>
	      <div class="input-item">
	        <input type="button" class="btn" value="开始动画" id="start" @click="startAnimation()" />
	        <input type="button" class="btn" value="暂停动画" id="pause" @click="pauseAnimation()" />
	      </div>
	      <div class="input-item">
	        <input type="button" class="btn" value="继续动画" id="resume" @click="resumeAnimation()" />
	        <input type="button" class="btn" value="停止动画" id="stop" @click="stopAnimation()" />
	      </div>

		

	    </div>
	  </div>
</template>
 
<script type="text/javascript" src="https://webapi.amap.com/maps?v=1.4.15&key=您申请的key值"></script>
<script>
	//请求路径
	//import {
		//playbacklist,
	//} from "@/api/obd/playback";
 
	export default {
	    mounted() {
	      this.initMap();
	    },
	    beforeDestroy() {
	      this.map && this.map.destroy();
	    },
	    data() {
	      return {
			 pickerOptions: {
				shortcuts: [{
				text: '今天',
				onClick(picker) {
				picker.$emit('pick', new Date());
				}
			}, {
				text: '昨天',
				onClick(picker) {
				const date = new Date();
				date.setTime(date.getTime() - 3600 * 1000 * 24);
				picker.$emit('pick', date);
				}
			}, {
				text: '一周前',
				onClick(picker) {
				const date = new Date();
				date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
				picker.$emit('pick', date);
				}
			}]
        },
			slider:0,
			value1: '',
			color1:null,
	        map: null,
	        marker: null,
	        lineArr: [
	          [116.478935, 39.997761],
	          [116.478939, 39.997825],
	          [116.478912, 39.998549],
	          [116.478912, 39.998549],
	          [116.478998, 39.998555],
	          [116.478998, 39.998555],
	          [116.479282, 39.99856],
	          [116.479658, 39.998528],
	          [116.480151, 39.998453],
	          [116.480784, 39.998302],
	          [116.480784, 39.998302],
	          [116.481149, 39.998184],
	          [116.481573, 39.997997],
	          [116.481863, 39.997846],
	          [116.482072, 39.997718],
	          [116.482362, 39.997718],
	          [116.483633, 39.998935],
	          [116.48367, 39.998968],
	          [116.484648, 39.999861]
	        ]
	      };
	    },
	    methods: {
			 formatTooltip(val) {
				return val / 100;
			},


	      initMap() {
	        this.map = new AMap.Map("container", {
	          resizeEnable: true,
	          center: [116.397428, 39.90923],
	          zoom: 17
	        });
	

	        this.marker = new AMap.Marker({
	          map: this.map,
	          position: [116.478935, 39.997761],
	          icon: "https://a.amap.com/jsapi_demos/static/demo-center-v2/car.png",
	          offset: new AMap.Pixel(-26, -15),
	          autoRotation: true,
	          angle: -90
	        });
	
	        // 绘制轨迹
	        let polyline = new AMap.Polyline({
	          map: this.map,
	          path: this.lineArr,
	          showDir: true,
	          strokeColor: "#28F", //线颜色
	          // strokeOpacity: 1,     //线透明度
	          strokeWeight: 6 //线宽
	          // strokeStyle: "solid"  //线样式
	        });
	
	        let passedPolyline = new AMap.Polyline({
	          map: this.map,
	          // path: this.lineArr,
	          strokeColor: "#AF5", //线颜色
	          // strokeOpacity: 1,     //线透明度
	          strokeWeight: 6 //线宽
	          // strokeStyle: "solid"  //线样式
	        });
	
	        this.marker.on("moving", function (e) {
	          passedPolyline.setPath(e.passedPath);
	        });
	
	        this.map.setFitView();
	      },
	      startAnimation() {
	        this.marker.moveAlong(this.lineArr, 200);
	      },
	      pauseAnimation() {
	        this.marker.pauseMove();
	      },
	      resumeAnimation() {
	        this.marker.resumeMove();
	      },
	      stopAnimation() {
	        this.marker.stopMove();
	      }
	    }
	  };
</script>
 
<style  scoped>
	@import url('https://a.amap.com/jsapi_demos/static/demo-center/css/demo-center.css');
	
	  #container {
	    height: 1000px;
	    width: 100%;
	  }
	  .choseColor{
		display: flex;
		justify-content: space-between;
	  }
		.control{
		top: 100px;
		position: absolute;
		width: 20%;
		height: 300px;
		z-index: 5;
		background-color: rgba(198, 198, 198, 0.7);
		text-align: center;
	}
	  .input-card .btn {
	    margin-right: 1.2rem;
	    width: 9rem;
	  }
	
	  .input-card .btn:last-child {
	    margin-right: 0;
	  }
	  
	  .btn {
	    display: inline-block;
	    font-weight: 400;
	    text-align: center;
	    white-space: nowrap;
	    vertical-align: middle;
	    -webkit-user-select: none;
	    -moz-user-select: none;
	    -ms-user-select: none;
	    user-select: none;
	    border: 1px solid transparent;
	    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
	    background-color: transparent;
	    background-image: none;
	    color: #25A5F7;
	    border-color: #25A5F7;
	    padding: .25rem .5rem;
	    line-height: 1.5;
	    border-radius: 1rem;
	    -webkit-appearance: button;
	    cursor:pointer;
	  }
	  
	  .input-item {
	    position: relative;
	    display: -ms-flexbox;
	    display: flex;
	    -ms-flex-wrap: wrap;
	    flex-wrap: wrap;
	    -ms-flex-align: center;
	    align-items: center;
	    width: 100%;
	    height: 3rem;
	  }
	  
	  .input-card {
	    display: flex;
	    flex-direction: column;
	    min-width: 0;
	    word-wrap: break-word;
	    background-color: #fff;
	    background-clip: border-box;
	    border-radius: .25rem;
	    width: 22rem;
	    border-width: 0;
	    border-radius: 0.4rem;
	    box-shadow: 0 2px 6px 0 rgba(114, 124, 245, .5);
	    position: fixed;
	    bottom: 1rem;
	    right: 1rem;
	    -ms-flex: 1 1 auto;
	    flex: 1 1 auto;
	    padding: 0.75rem 1.25rem;
	  }
</style>