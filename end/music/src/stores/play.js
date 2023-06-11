import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePlayStore = defineStore('play', () => {
    const MusicUrl = ref('')
    const MusicImg = ref('')
    const MusicInf = ref([])
    function setMusicUrl(url) {
        MusicUrl.value= url
    }
    function setMusicImg(Img) {
        MusicImg.value= Img
    }
    function setMusicInf(Inf){
        MusicInf.value = Inf
    }
  return {MusicInf, MusicUrl, MusicImg ,setMusicUrl,setMusicImg ,setMusicInf}
})
