import { Cxmsg } from "./cxmsg.js";
const callback_ok=()=>{

    Cxmsg.show({},"Login","Connecção ok",['mbok'],()=>{})
}
const callback_naook=()=>{
    const config ={
        cor : 'red',
    }    
    Cxmsg.show(config,"Login","Connecção Falha",['mbok'],()=>{})
}
const config ={
    cor : 'red',
    endpoint : "aula141api.json",
    img : 'eia_cl.png'
}    
Login.login(callback_ok,callback_naook,config);