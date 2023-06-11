export default{
    /**喜欢的歌单，每次重启项目都会清空 */
    likes:[],
    /**
     * 表示喜欢歌曲，存入歌曲信息
     * @param {*} body 
     */
    like(body){
        this.likes.push({
            id: body.id,
            artist: body.artist,
            name: body.name,
            album: body.name,
            duration: body.duration,
        })
        console.log(this.likes)
    },
    /**
     * 从喜欢歌单中删去指定下标歌曲
     * @param {number} index 歌曲下标
     */
    unlike(index){
        this.likes.splice(index,1)
    }
}