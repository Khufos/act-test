import express from "express";
import { getDados, getDado,  createDados } from './database.js';
import cors from "cors";
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/usuarios", async (req,res)=>{
    const dados  = await getDados();
    res.send(dados);
})

app.post("/criarUsuario", async (req,res)=>{
    const {nome , sobrenome,cpf } = req.body;
    const note = await createDados(nome,sobrenome,cpf)
    res.status(201).send(note);
})


app.use((err,res,next)=>{
    console.error(err.stack);
    res.status(500).send("Está quebrado")
});



app.listen(8080,()=>{
    console.log("O servidor inicio!")
})