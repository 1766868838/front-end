<!-- eslint-disable vue/no-deprecated-slot-scope-attribute -->
<template>
    <el-row>
        <el-col :span="4"><img :src=listStore.Img style="width: 80%;"/></el-col>
        <el-col :span="20" style="display:grid;">
            <el-text class="name">{{ listStore.Name }}</el-text>
            <el-text class="description">{{ listStore.Description }}</el-text>

        </el-col>
    </el-row>
    

    <el-table :data="musicData" style="width: 100%"  @row-dblclick="show">
        <el-table-column fixed type="index" label="#" width="50" />
        <el-table-column prop="name" label="歌曲名" min-width="180" />
        <el-table-column  label="艺术家" key="slot" >
            <template #default="scope">
            <span >{{scope.row.ar[0].name}}</span>
            </template>
        </el-table-column>
        <el-table-column prop="al.name" label="专辑名"  min-width="150"/>
        <el-table-column label="时长" key="slot"  width="60">
            <template #default="scope">
            <span >{{formatDuring(scope.row.dt)}}</span>
            </template>
        </el-table-column>
    </el-table>
</template>

<script setup>
import { useListStore } from '../stores/list';
import {usePlayStore} from '../stores/play'
import { computed } from 'vue';
import axios from 'axios'
const listStore = useListStore()
const playStore = usePlayStore()
const musicData = computed(() => listStore.List);
console.log(listStore.List)

function show(row){
  
  playStore.setMusicInf(row)
  console.log(playStore.MusicInf)
  axios.get("https://autumnfish.cn/song/url?id="+row.id).then(function(response){
    console.log(response);
    //that.MusicArr=response.data.result.songs
    playStore.setMusicUrl(response.data.data[0].url);
  },function(err){
      console.log(err);
  });
  axios.get("https://autumnfish.cn/song/detail?ids="+row.id).then(function(response){
    playStore.setMusicImg(response.data.songs[0].al.picUrl);
      //console.log(response.data.songs[0].al.picUrl);
  },function(err){
      console.log(err);
  });
  //console.log(store.MusicArr)
}


/**
 * 毫秒转分钟秒
* @param {number} mss
*/
function formatDuring(mss) {
  // @ts-ignore
  var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.ceil((mss % (1000 * 60)) / 1000);
  return  minutes + ":" + seconds ;
}
</script>

<style scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.name{
    font-size: 20px;
    margin-bottom: 20px;
}
</style>