import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import BaiduMap from 'vue-baidu-map'
import AMap from 'vue-amap'
import VueAMap from "vue-amap";


Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'UFsh7C5xsVZ8pHBylPikF217zV5OlyHk'
})

AMap.initAMapApiLoader({
  key: '597c5c3a47b28328c6d3e1d82a8446b4',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
})

Vue.use(VueAMap);

Vue.use(AMap)
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
