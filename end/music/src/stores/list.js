import { ref } from 'vue'
import { defineStore } from 'pinia'

/**
 * 歌单信息
 */
export const useListStore = defineStore('list', () => {
    const List = ref([])
    const Song = ref([])
    const Name = ref('')
    const Description = ref('')
    const Img = ref('')
    function setList(list) {
      List.value= list
    }
    function setSong(song){
      Song.value = song
    }
    function setName(name){
      Name.value = name
    }
    function setDescription(description){
      Description.value = description
    }
    function setImg(img){
      Img.value = img
    }
  return {List,Song,Name,Description,Img,setList,setSong,setName,setDescription,setImg}
})

/**
 * 喜欢的歌单
 */
export const useLikeListStore = defineStore('likeList', () => {
  const likeList = ref([])

  function setList(list) {
    likeList.value= list
  }
  return {likeList,setList}
})
