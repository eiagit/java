import express from "express";
import cors from "cors";
import {Execsql} from "./aula161dbf.js"
const app = express();
app.use(express.json());
app.use(cors());

app.listen(3000,()=>{
    console.log('Servidor aula 161 no ar na porta 3000')
});

app.get("/agenda", (req, res) => {
    res.status(200).json(
        //{'respons':'Servico de Agenda Funcionanco'}
        [
            {
                AGE_ID: 12,
                AGE_NOME: 'Italva Limeira Ferreira de Jesus',
                AGE_TELEFO: '(73)99110-3834',
                AGE_EMAIL: 'italva_lfj99@gmail.com',
                AGE_NASCIM: '1965-05 - 25T03:00:00.000Z'
            },
            {
                AGE_ID: 14,
                AGE_NOME: 'Antonio Ennio de Jesus',
                AGE_TELEFO: '(73)988163135',
                AGE_EMAIL: 'eia_99@yahoo.com',
                AGE_NASCIM: '1964 -08 - 11T03:00:00.000Z'
            },
            {
                AGE_ID: 16,
                AGE_NOME: 'Lis Limeira Ferreira de Jsus',
                AGE_TELEFO: '(73)98899-7766',
                AGE_EMAIL: 'lilica99@gmail.com',
                AGE_NASCIM: '1988-05-02T03:00:00.000Z'
            },
            {
                AGE_ID: 18,
                AGE_NOME: 'Maria Aparecida Limeira Ferreira',
                AGE_TELEFO: '(73)98143-0607',
                AGE_EMAIL: 'limeiracida@gamil.com',
                AGE_NASCIM: '1968-06 - 28T03:00:00.000Z'
            },
            {
                AGE_ID: 20,
                AGE_NOME: 'DADOS FIXOS RETORNADOS E GRAVADOS NA AP',
                AGE_TELEFO: '(73)9999-9999',
                AGE_EMAIL: 'apiexpress@gamil.com',
                AGE_NASCIM: Date('now')
            }            
        ]
    )

})

 app.post("/agenda",(req,res)=>{
    var query = "INSERT INTO AGENDA (AGE_ID           ,AGE_NOME,AGE_TELEFO,AGE_EMAIL,AGE_NASCIM) "
               +'VALUES           (0                  ,?       ,?         ,?        ,?     ) RETURNING AGE_ID';
    const params=[];
    params.push(req.body.AGE_NOME)
    params.push(req.body.AGE_TELEFO)
    params.push(req.body.AGE_EMAIL)
    params.push(req.body.AGE_NASCIM)
    Execsql(query,params,function(err,result){
        if (err) {
            res.status(500).json(err + " deu erro");
        } else {
            res.status(200).json({"AGE_ID":result.AGE_ID});
            }
        }
    ) 
})

app.put("/agenda",(req,res)=>{
    var query = "UPDATE AGENDA SET AGE_NOME=?,AGE_TELEFO=?,AGE_EMAIL=?,AGE_NASCIM=? WHERE AGE_Id=?"
    const params=[];
    params.push(req.body.AGE_NOME)
    params.push(req.body.AGE_TELEFO)
    params.push(req.body.AGE_EMAIL)
    params.push(req.body.AGE_NASCIM)
    params.push(req.body.AGE_ID)
    Execsql(query,params,function(err,result){
        if (err) {
            res.status(500).json(err + " deu erro");
        } else {
            res.status(200).json({"AGE_ID":req.body.AGE_ID});
            }
        }
    ) 
})

app.delete("/agenda",(req,res)=>{
    var query = "DELETE FROM AGENDA WHERE AGE_ID = ? "
    const params=[];
    params.push(req.body.AGE_ID)
    Execsql(query,params,function(err,result){
        if (err) {
            res.status(500).json(err + " deu erro");
        } else {
            res.status(200).json({"AGE_ID":req.body.AGE_ID});
            }
        }
    ) 
})

app.get("/agenda/total",(req,res)=>{
    var query = "SELECT * From AGENDA"
    const params = [];
    Execsql(query, params, (err, result) => {
            if (err) {
                res.status(500).json(err + " deu erro");
            } else {
                res.status(200).json(result);
            }
    })
})

app.get("/tabelas/agenda",(req,res)=>{
    var query = "SELECT * From AGENDA "
    +' where 1=1' ;
    +'ORDER BY AGE_NOME'
    const params=[];
    Execsql(query,params,function(err,result){
        if (err) {
            res.status(500).json(err + " deu erro");
        } else {
            res.status(200).json(result);
            }
        }
    )    
})

app.get("/agenda/buscanome",(req,res)=>{
    var query = "SELECT first 1 * FROM AGENDA WHERE UPPER(AGE_NOME) like '%'||UPPER(?)||'%'"
    const params=[];
    params.push(req.query.AGE_NOME)
    Execsql(query,params,function(err,result){
        if (err) {
            res.status(500).json(err + " deu erro");
        } else {
            res.status(200).json(result);
            }
        }
    ) 
})

app.get("/agenda/filtranome",(req,res)=>{
    var query = "SELECT * FROM AGENDA WHERE UPPER(AGE_NOME) like '%'||UPPER(?)||'%'"
    const params=[];
    params.push(req.query.AGE_NOME)
    Execsql(query,params,function(err,result){
        if (err) {
            res.status(500).json(err + " deu erro");
        } else {
            res.status(200).json(result);
            }
        }
    ) 
})