<template>
  <div class="footerItem">
    <el-image style="width: 70px; height: 70px" :src="MusicImg" >
      <template #error>
      </template>
    </el-image>
    <el-text style="padding: 10px;">{{ musicName }}</el-text>
    <div class="footerRight">

      <audio  :src="MusicUrl"  autoplay controls></audio>
      <!-- <el-text>00:00</el-text>
      <div class="footerProgress">
        <el-progress :percentage="percentage" :color="customColorMethod" />
      </div>
      <el-text>04:17</el-text> -->
      <div class="footerMenu">
        <el-icon class="el-icon"><Star /></el-icon>
        <el-icon class="el-icon"><Notification /></el-icon>
      </div>
      <div class="footerController">
        <el-icon><DArrowLeft /></el-icon>
        <el-icon><VideoPlay /></el-icon>
        <el-icon><DArrowRight /></el-icon>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { computed } from 'vue';
import { usePlayStore } from '../stores/play';
const playStore = usePlayStore()

//const musicName = "nihao"

const musicName = computed(() => playStore.MusicInf["name"])
const MusicUrl = computed(() => playStore.MusicUrl)
const MusicImg = computed(() => playStore.MusicImg)
//const percentage = ref(20)

</script>
  
<style scoped>
.footerRight {
  margin-bottom: 15px;
  margin-left: auto;
  flex-direction: row;
  justify-content: flex-end;
  display: flex;
  align-items: center;
}
.footerProgress{
  margin: 0 20px;
  width: 350px;
}
.footerMenu{
  font-size: 20px;
}
.el-icon{
  margin-left: 10px;
}
.footerItem{
  display: flex;
  height: auto;
  border-top: 1px solid;
  padding: 20px 80px 20px 0;
  text-align: center;
}

.footerController{
  font-size: 30px;
}
</style>
  