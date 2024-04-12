const express =require('express');
const mongoose=require('mongoose');
const path=require('path');
const bodyParser=require('body-parser')
const PORT=3000;

const app=express();
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));

mongoose.connect(`mongodb+srv://root:jbjhg76t476f@cluster0.ebopdt7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

    const Post=mongoose.model('Post',{
        author:String,
        title:String,
        content:String

    })

    app.post('/posts', async(req,res)=>{
        try{
            const {author,title,content}=req.body;
            const post=new Post({author,title,content});
            await post.save();
            res.status(201).json(post);
        }catch(err){
            res.status(500).json({message: err.message})
        }
    })

    app.get('/posts', async(req,res)=>{
        try{
            const posts= await Post.find();
            res.json(posts);
        }catch{
            res.status(500).json({message:err.message})
        } 
      
    })
    
    app.get('/create-post',(req,res)=>{
        res.sendFile(path.join(__dirname,'public','createPost.html'))
    })

app.listen(PORT,()=>{
    console.log(`Server work on port:${PORT}`)
})



