import { Login } from "./aula141login.js";
import { Cxmsg } from "./cxmsg.js";
const callback_ok=()=>{

    Cxmsg.show({},"Login","Connecção ok",['mbok'],()=>{})
}
const callback_naook=()=>{
    const config ={
        cor : 'red',
    }    
    Cxmsg.show("Login","Connecção Falha",['mbok'],config)
}
const config={
    endpoint : 'aula141api.json',
    img : 'eia_cl.png',
    cor : 'red'
}
Login.login(callback_ok,callback_naook,config);