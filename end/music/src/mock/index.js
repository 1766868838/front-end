import Mock from 'mockjs'
import likes from './data/like'
Mock.mock('/mock/list','get',()=>{
    return likes.likes
})

Mock.mock('/mock/like','get', (req) =>{
    let body = JSON.parse(req.body)
    //console.log(body)
    let id = body.id
    //遍历喜欢的歌曲，若存在则返回错误码，否则添加指定歌曲
    likes.likes.map((item)=>{
        if(item.id == id) return {status:100}
    })
    likes.like(body)
    return {
        status: 200,
    }
})


Mock.mock('/mock/unlike','get', (req) =>{
    //console.log(req.body)
    let id = req.body
    //如果喜欢的歌单内存在该歌曲则删除
    likes.likes.map((item,index)=>{
        if(id == item.id) {
            likes.unlike(index)
            return {
                index: index,
                status: 200,
            }
        }
    })
    return {
        status:100
    }
})

Mock.mock('/mock/test','get', {
    states: 200,
    data: "you"
})
