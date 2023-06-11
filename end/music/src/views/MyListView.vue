<!-- eslint-disable vue/no-deprecated-slot-scope-attribute -->
<template>
    <el-tabs class="demo-tabs" >
        <el-table :data="musicData" style="width: 100%"  @row-dblclick="show">
            <el-table-column fixed type="index" label="#" width="50" />
            <el-table-column prop="name" label="歌曲名" min-width="180" />
            <el-table-column prop="artist" label="艺术家" />
            <el-table-column prop="album" label="专辑名" min-width="150"/>
            <el-table-column label="时长" key="slot" width="60" >
                <template #default="scope">
                    <span >{{formatDuring(scope.row.duration)}}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="120">
            <template  #default="scope">
                <el-dropdown trigger="click" >
                <span class="el-dropdown-link">
                    菜单<el-icon class="el-icon--right"><arrow-down /></el-icon>
                </span>
                <template #dropdown >
                    <el-dropdown-menu>
                    <el-dropdown-item :icon="VideoPlay" @click="show(scope.row)">播放</el-dropdown-item>
                    <el-dropdown-item :icon="Star" @click="unlike(scope.row)">
                        取消
                    </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
                </el-dropdown>
            </template>

            </el-table-column>
        </el-table>
    </el-tabs>
</template>

<script setup>
import {
  ArrowDown,
  Star,
  VideoPlay,
} from '@element-plus/icons-vue'
import {useLikeListStore} from '../stores/list'
import {usePlayStore} from '../stores/play'
import { computed } from 'vue';
import axios from 'axios'
const playStore = usePlayStore()
const likeListStore = useLikeListStore()
//console.log(musicStore.MusicArr)

const musicData = computed(() => likeListStore.likeList);

function unlike(row){
  //console.log(row)

  axios.get("/mock/unlike",{
    data:row.id
  }).then(function(response){
    likeListStore.likeList = likeListStore.likeList.splice(response.data.index,1)
  })
}

function show(row){
  
  playStore.setMusicInf(row)
  //console.log(playStore.MusicInf)
  axios.get("https://autumnfish.cn/song/url?id="+row.id).then(function(response){
    //console.log(response);
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
</style>