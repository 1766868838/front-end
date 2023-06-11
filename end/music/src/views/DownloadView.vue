<template>
    <el-tabs v-model="activeName"  class="demo-tabs" >
        <el-tab-pane label="全部任务" name="first">
            <el-row class="tabs-top">
                <el-col :span="1"  @click="test()">#</el-col>
                <el-col :span="8">歌曲名</el-col>
                <el-col :span="5">进度</el-col>
                <el-col :span="4">状态</el-col>
                <el-col :span="3">品质</el-col>
                <el-col :span="3">操作</el-col>
            </el-row>
        </el-tab-pane>
        <el-tab-pane label="正在下载" name="second">
            <el-row class="tabs-top">
                <el-col :span="1">#</el-col>
                <el-col :span="8">歌曲名</el-col>
                <el-col :span="5">进度</el-col>
                <el-col :span="4">状态</el-col>
                <el-col :span="3">品质</el-col>
                <el-col :span="3">操作</el-col>
            </el-row>
        </el-tab-pane>
        <el-tab-pane label="已暂停" name="third">
            <el-row class="tabs-top">
                <el-col :span="1">#</el-col>
                <el-col :span="8">歌曲名</el-col>
                <el-col :span="5">进度</el-col>
                <el-col :span="4">状态</el-col>
                <el-col :span="3">品质</el-col>
                <el-col :span="3">操作</el-col>
            </el-row>
        </el-tab-pane>
        <el-tab-pane label="出错" name="fourth">
            <el-row class="tabs-top">
                <el-col :span="1">#</el-col>
                <el-col :span="8">歌曲名</el-col>
                <el-col :span="5">进度</el-col>
                <el-col :span="4">状态</el-col>
                <el-col :span="3">品质</el-col>
                <el-col :span="3">操作</el-col>
            </el-row>
        </el-tab-pane>
        <el-tab-pane label="下载完成" name="fifth">
            <el-row class="tabs-top">
                <el-col :span="1">#</el-col>
                <el-col :span="8">歌曲名</el-col>
                <el-col :span="5">进度</el-col>
                <el-col :span="4">状态</el-col>
                <el-col :span="3">品质</el-col>
                <el-col :span="3">操作</el-col>
            </el-row>
        </el-tab-pane>
    </el-tabs>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios'
const activeName = ref('first')

function test(){
    console.log("jksldf")
    axios.get('/mock/test').then((res)=>{
        console.log(res)
    })
}

</script>

<style scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.tabs-top{
    margin-top: -5px;
    font-size: 13px;
}
</style>