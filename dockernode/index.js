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

app.put("/courses/:id",(req,res)=>{
    return res.send("teste");
})

app.patch("/courses/:id",(req,res)=>{
    return res.json(["teste","teste"])
})

app.delete("/courses/:id",(req,res)=>{
    return res.json(["teste","teste"])
})

app.listen(PORT,HOST);