<template class="head">
    <!-- 搜索与添加区域 -->
    <el-input placeholder="请输入内容" v-model="msg" >
        <template #append >
            <el-icon @click="search()"><Search /></el-icon>
        </template>
    </el-input>
</template>

<script setup>
import {ref} from 'vue'
import axios from 'axios'
import router from '../router/index';
import {useMusicStore} from '../stores/music'
const msg = ref('')
const store = useMusicStore()
function search(){
    axios.get("https://autumnfish.cn/search?keywords="+msg.value).then(function(response){
        store.setMusicArr(response.data.result.songs)
        router.push("/")
        console.log(response.data.result.songs)
    },function(err){
        console.log(err);
    });
}
</script>
<style scoped>

</style>