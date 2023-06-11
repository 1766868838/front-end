import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMusicStore = defineStore('music', () => {
    const MusicArr = ref([])
    const MusicUrl = ref('')
    const MusicImg = ref('')
    function setMusicArr(arr) {  
      MusicArr.value= arr
      console.log(MusicArr.value)
    }
    function setMusicUrl(url) {
      MusicUrl.value= url
    }
    function setMusicImg(Img) {
      MusicImg.value= Img
    }

  return { MusicArr, MusicUrl, MusicImg ,setMusicArr,setMusicUrl,setMusicImg}
})
