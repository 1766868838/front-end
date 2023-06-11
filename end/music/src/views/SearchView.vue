<!-- eslint-disable vue/no-deprecated-slot-scope-attribute -->
<template>
    <el-tabs v-model="activeName"  class="demo-tabs" >
        <el-tab-pane label="wy" name="first">
            <el-table :data="musicData" style="width: 100%"  @row-dblclick="show">
              <el-table-column fixed type="index" label="#" width="50" />
              <el-table-column prop="name" label="歌曲名" min-width="180" />
              <el-table-column  label="艺术家" key="slot" >
                <template #default="scope">
                  <span >{{scope.row.artists[0].name}}</span>
                </template>
              </el-table-column>
              <el-table-column prop="album.name" label="专辑名" min-width="150"/>
              <el-table-column label="时长" key="slot" width="60">
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
                        <el-dropdown-item :icon="Star" @click="like(scope.row)">
                          喜欢
                        </el-dropdown-item>
                      </el-dropdown-menu>
                    </template>
                  </el-dropdown>
                </template>

              </el-table-column>
            </el-table>
        </el-tab-pane>
        <el-tab-pane label="qq" name="second">qq</el-tab-pane>
        <el-tab-pane label="kg" name="third">kg</el-tab-pane>
        <el-tab-pane label="kw" name="fourth">kw</el-tab-pane>
        <el-tab-pane label="mg" name="fifth">mg</el-tab-pane>
        <el-tab-pane label="bieji" name="sixth">
          <TestItem></TestItem>
        </el-tab-pane>

    </el-tabs>
</template>

<script setup>
import {
  ArrowDown,
  Star,
  VideoPlay,
} from '@element-plus/icons-vue'
import TestItem from '../components/TestItem.vue';
import { useMusicStore } from '../stores/music';
import {usePlayStore} from '../stores/play'
import { computed, ref } from 'vue';
import axios from 'axios'
const activeName = ref('first')
const musicStore = useMusicStore()
const playStore = usePlayStore()
//console.log(musicStore.MusicArr)

const musicData = computed(() => musicStore.MusicArr);

function like(row){
  console.log(row)
  axios.get("/mock/like",{
    data:{
      id:row.id,
      name:row.name,
      artist: row.artists[0].name,
      album: row.album.name,
      duration: row.duration,
    }
  }).then(function(response){
    console.log(response)
  })
}

/**
 * 双击或者点击播放键后，通过歌曲的id获取其url地址与图片
 * @param {*} row 
 */
function show(row){
  
  playStore.setMusicInf(row)
  console.log(playStore.MusicInf)
  axios.get("https://autumnfish.cn/song/url?id="+row.id).then(function(response){
    console.log(response);
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