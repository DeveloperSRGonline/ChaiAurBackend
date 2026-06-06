require('dotenv').config()
const express = require('express')

const app = express()
const port = process.env.PORT || 3000


app.get('/',(req,res)=>{
    res.json({message:"Hello World"})
})

app.get('/about',(req,res)=>{
    res.json({message:"About Page"})
})

app.get('/contact',(req,res)=>{
    res.json({message:"Contact Page"})
})

app.get('/html',(req,res)=>{
    res.send("<button>Hello World</button>")
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})