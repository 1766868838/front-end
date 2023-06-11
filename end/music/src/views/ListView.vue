<template>
    <el-row :gutter="20">
        <el-col class="card" v-for="(o, index) in list.List.length" :key="o" :span="8"
        >
            <el-card :body-style="{ padding: '0px'}" @dblclick="enterList(index)" shadow="hover">
                <img v-lazy="imgList[index]" class="image"/>
                <div style="padding: 14px">
                    <span class="nameSpan" >{{ nameList[index] }}</span>
                    <div class="bottom">
                        <el-icon><VideoPlay /></el-icon>
                        <div class="time">{{ playCountList[index] }}</div>
                        <el-icon><Headset /></el-icon>
                        <div class="time">{{ musicCountList[index] }}</div>
                    </div>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>
  
<script setup>
import axios from 'axios';
import { useListStore } from '../stores/list';
import router from '../router';
import { computed } from 'vue';
const list = useListStore()

//获取歌单图片地址
var imgList =computed(()=> list.List.map( (item) => {
	return item.coverImgUrl
})) 

//获取歌单名字
var nameList = computed(() => list.List.map( (item) => {
	return item.name
}));

//歌单播放次数
var playCountList = computed(() => list.List.map( (item) => {
	return item.playCount
}));
//歌单歌曲数量

var musicCountList = computed(() => list.List.map((item)=>{
    return item.trackCount
}));
//歌单id
var idList = computed(() => list.List.map((item)=>{
    return item.id
}));
/**
 * 获取歌单内的歌曲信息，这里分为两个请求，一个是通过歌单id找歌曲id，第二个是通过歌曲id显示歌曲信息
 * @param {*} index 
 */
function enterList(index){
    list.setName(nameList.value[index])
    list.setDescription(list.List[index].description)
    list.setImg(imgList.value[index])
    console.log(list.List[index].description) 
    axios.get("https://autumnfish.cn/playlist/detail",{
        params:{
            id : idList.value[index]
        }
    }).then(function(response){
        //获取歌单内的歌曲id
        console.log(response.data.playlist.trackIds);
        let idList = response.data.playlist.trackIds;
        let song = idList.map((item)=>{
            return item.id;
        })
        list.setSong(song)
        let songStr = song.join(",")
        console.log(songStr)

        axios.get("https://autumnfish.cn/song/detail",{
            params:{
                ids : songStr
            }
        }).then(function(response){
            console.log(response)

            list.setList(response.data.songs)

            router.push("enterList")
        }),function(err) {
            console.log(err)
        }
    },function(err){
        console.log(err);
    });
}
</script>
  
<style>
.time {
font-size: 10px;
color: #999;
}

.bottom {
margin-top: 13px;
line-height: 12px;
display: flex;
justify-content: flex-end;
align-items: center;
}

.button {
padding: 0;
min-height: auto;
}

.bottom>div{
    padding-right: 10px;
}
.card{
    margin-bottom: 20px;
}

.nameSpan{
    height: 40px ;
    display: flex ;
}

.image {
width: 100%;
display: block;
}
</style>