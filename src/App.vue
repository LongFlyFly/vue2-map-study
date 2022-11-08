<template>
<div id="app">

  <div class="all">
      <div class="item">
        <el-menu :default-active="activeIndex" 
                class="el-menu-demo" 
                mode="horizontal"
              >
              <el-menu-item index="0" @click="Home"><img src="./assets/logo.png"></el-menu-item>
              <el-menu-item index="0"><h2>轨迹分段系统</h2></el-menu-item>
              
          </el-menu>
      </div>

      <div class="content">
          <el-menu :default-active="activeIndex" 
            class="el-menu-demo" 
            mode="horizontal"
      >
        <el-submenu index="1">
          <template slot="title">地图</template>
            <el-menu-item index="1-1" @click="toGaoDe">高德地图</el-menu-item>
            <el-menu-item index="1-2" @click="toBaiDu">百度地图</el-menu-item>
            <el-menu-item index="1-3" @click="toGaoDe3D">高德地图3D</el-menu-item>
            <el-menu-item index="1-4" @click="toBaidu2">百度地图2</el-menu-item>
        </el-submenu>
     
        <el-submenu index="2">
          <template slot="title">场景</template>
          <el-menu-item index="2-1">路径规划</el-menu-item>
        </el-submenu>

      <el-menu-item index="3">关于</el-menu-item>
    </el-menu>
  </div>
  
</div>
<router-view/>

  </div>
</template>

<script>
export default {
  name: 'App',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
      };
    },
    methods: {
      toGaoDe(){
        this.$router.push('/GaoDeView')
      },
      Home(){
        this.$router.push('/')
      },
      toBaiDu(){
        this.$router.push('/BaiDuView')
      },
      toGaoDe3D(){
        this.$router.push('/GaoDeView3D')
      },
      toBaidu2(){
         this.$router.push('/BaiDuView2')
      }
    }
}
</script>

<style>

img{
  width: 100%;
  height: 50px;
}
.all{
  display: flex;
  justify-content: space-between;
}
h2{
  line-height: 30px;
}
.el-menu--popup{
  min-width: 80px !important;
}
</style>
