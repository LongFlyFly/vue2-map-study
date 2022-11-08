import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GaoDeView from '@/components/GaoDeView'
import BaiDuView from '@/components/BaiDuView'
import GaoDeView3D from '@/components/GaoDeView3D'
import BaiDuView2 from '@/components/BaiDuView2'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/GaoDeView',
      name: 'GaoDeView',
      component: GaoDeView
    },
    {
      path: '/BaiDuView',
      name: 'BaiDuView',
      component: BaiDuView
    },
    {
      path: '/GaoDeView3D',
      name: 'GaoDeView3D',
      component: GaoDeView3D
    },
    {
      path: '/BaiDuView2',
      name: 'BaiDuView2',
      component: BaiDuView2
    }
  ]
})
