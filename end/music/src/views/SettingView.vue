<template>
  <el-tabs :tab-position="tabPosition" style="height: 200px" class="demo-tabs">
    <el-tab-pane label="基本设置">User</el-tab-pane>
    <el-tab-pane label="搜索设置">Config</el-tab-pane>
    <el-tab-pane label="下载设置">Role</el-tab-pane>
    <el-tab-pane label="列表设置">Task</el-tab-pane>
  </el-tabs>
</template>
<script setup>
import { ref } from 'vue'

const tabPosition = ref('left')
</script>
<style scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
  height: 100%;
}
</style>
