$('.createPost').click(function(){
    let data={
        author:$('#authorinp').val(),
        title:$('#titleinp').val(),
        content:$('#postContent').val()
    }
    axios.post('/posts',data)
.then((res)=>{
    console.log(res.data)
    location.href='/'
})
})

function getPosts(){
    
        axios.get('http://localhost:3000/posts')
        .then((res)=>{
            console.log(res.data)

            for(let el of res.data){
                $('.postsArea').append(`
                <div class="postCard">
                <div class="title">${el.title}</div>
                <div class="content">${el.content}</div>
                <div class="author">${el.author}</div>
                </div>
                `)
            }
        })
        
}
getPosts()