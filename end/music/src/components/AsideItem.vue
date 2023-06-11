<template>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      :collapse="isCollapse">
      <el-menu-item index="1" @click="search()">
        <el-icon class="el-icon"><Search /></el-icon>
        <template #title>搜索</template>
      </el-menu-item>
      <el-menu-item index="2" @click="list()">
        <el-icon class="el-icon"><MessageBox /></el-icon>
        <template #title>歌单</template>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon class="el-icon"><List /></el-icon>
        <template #title>排行榜</template>
      </el-menu-item>
      <el-menu-item index="4" @click="myList()">
        <el-icon class="el-icon" ><Star /></el-icon>
        <template #title>我的列表</template>
      </el-menu-item>
      <el-menu-item index="5" @click="download()">
        <el-icon class="el-icon"><Download /></el-icon>
        <template #title>下载</template>
      </el-menu-item>
      <el-menu-item index="6" @click="setting()">
        <el-icon class="el-icon"><Setting /></el-icon>
        <template #title>设置</template>
      </el-menu-item>
    </el-menu>
  </template>
  
<script setup>
import {useListStore,useLikeListStore} from '../stores/list'
import router from '../router/index'
import { ref } from 'vue'
import axios from 'axios'

const listStore = useListStore()
const likeListStore = useLikeListStore()
function search(){
  router.push("/")
}
function list(){
  axios.get("https://autumnfish.cn/top/playlist").then(function(response){
    //console.log(response.data.playlists);
    //that.MusicArr=response.data.result.songs
    listStore.setList(response.data.playlists);
  },function(err){
      console.log(err);
  });
  router.push("list")
}
function download(){
  router.push("download")
}
function setting(){
  router.push("setting")
}
function myList(){
  axios.get("/mock/list").then(function(response){
    //console.log(response)
    likeListStore.setList(response.data)
  })
  router.push("myList")
}
const isCollapse = ref(true)
</script>
  
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
width: 200px;
min-height: 400px;
}

.el-menu-vertical-demo{
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    height: 100%;
}
</style>