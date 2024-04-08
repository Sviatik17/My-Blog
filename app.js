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
    
    app.get('/create-post',(req,res)=>{
        res.sendFile(path.join(__dirname,'public','createPost.html'))
    })

app.listen(PORT,()=>{
    console.log(`Server work on port:${PORT}`)
})








// const { MongoClient } = require("mongodb");

// // Connection URI
// const uri =
//   "mongodb+srv://sviatos1706:xbX2nEdUiIdjZ8Dx@http://localhost:3000//?poolSize=20&writeConcern=majority";

// // Create a new MongoClient
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// async function run() {
//   try {
//     // Connect the client to the server
//     await client.connect();

//     // Establish and verify connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Connected successfully to server");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);








// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://sviatos1706:xbX2nEdUiIdjZ8Dx@cluster0.lht4zaw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

