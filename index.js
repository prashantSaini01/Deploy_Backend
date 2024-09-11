require('dotenv').config()


const express = require('express')

const app = express()

const port = 3000




app.get('/',(req,res)=>{
    res.send("Hello World")
})


app.get('/login',(req,res)=>{
    res.send(`<h1>Please LOgin First</h1>`)
})



app.get('/youtube',(req,res)=>{
    res.send(`<h3>Youtube Dekhega</h3>`)
})



app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${port}`)
})