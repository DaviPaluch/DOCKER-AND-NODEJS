const express = require('express')

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express()

app.get('/', (req, res) => {
    return res.json({message:"hello word!",mimu:"jkl"})
})

app.post("/courses",(req,res)=>{
    return res.send("teste");
})

app.get("/courses",(req,res)=>{
    return res.send("teste");
})


app.listen(PORT,HOST);