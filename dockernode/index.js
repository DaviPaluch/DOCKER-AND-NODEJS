const express = require('express')

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express()

app.use(express.json())


/*

-- Tipos de parâmetros --

Route Params => Identificar um recurso editar/deletar/buscar (Rota)
Query Params => Paginação / Filtro (URL)
Body  Params => Os objetos inserção/alteração (JSON)

*/



app.get('/', (req, res) => {
    /*query params (url)*/
    const query = req.query
    console.log(query)

    return res.json({message:"hello word!",mimu:"jkl"})
})

app.get('/courses', (req, res) => {
    return res.json({message:"hello word!",mimu:"jkl"})
})

app.post("/courses",(req,res)=>{
    /*body params (objeto enviado no corpo da requisição)*/
    const body = req.body;
    console.log(body)
    return res.send("teste");
})

/*route params (parametro adicionado como rota)*/
app.put("/courses/:id",(req,res)=>{
    const {id} = req.params
    console.log(id)
    return res.json(id);
})

app.patch("/courses/:id",(req,res)=>{
    return res.json(["teste","teste"])
})

app.delete("/courses/:id",(req,res)=>{
    return res.json(["teste","teste"])
})

app.listen(PORT,HOST);