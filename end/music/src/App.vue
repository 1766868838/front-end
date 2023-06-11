<!-- eslint-disable no-unused-vars -->
<script setup>
import { RouterView } from 'vue-router'
import AsideItem from './components/AsideItem.vue'
import HeaderItem from './components/HeaderItem.vue';
import FooterItem from './components/FooterItem.vue';
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="aside">
        <AsideItem></AsideItem >
      </el-aside>
      <el-container class="right">
        <el-header class="header">
          <HeaderItem></HeaderItem>
        </el-header>
        <el-container>
          <el-main class="main">
            <RouterView/>
          </el-main>
        </el-container>

        <el-footer class="footer">
          <FooterItem></FooterItem>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>

.el-container{
  padding-top: 0;
  height: 100%
}
.common-layout{
  height: 100vh;
}
.right{
  margin-left: 90px;
}
.main{
  margin:90px 0 115px 0;
}
.aside{
  left: 0;
  position: fixed;
  width:90px;
  height: 100vh
}
.footer{
  width: 100%;
  height: auto;
  bottom:0;
  position: fixed;
}


.header {
  top: 0;
  height: auto;
  padding-top: 50px;
  line-height: 1.5;
  max-height: 100vh;
  position: fixed;
}
html,body{
  margin:0;
  height:100%
}
</style>
