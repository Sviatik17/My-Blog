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
