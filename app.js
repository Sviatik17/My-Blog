const express =require('express');
const mongoose=require('mongoose');

const PORT=3000;

const app=express();

app.use(express.static('public'));

mongoose.connect(`mongodb+srv://sviatos1706:xbX2nEdUiIdjZ8Dx@cluster0.lht4zaw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
.then(()=>{
    console.log('connected to mongoDB')
})

app.listen(PORT,()=>{
    console.log(`Server work on port:${PORT}`)
})