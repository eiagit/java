import { Login } from "./aula141login.js";
import { Cxmsg } from "./cxmsg.js";
const callback_ok=()=>{

    Cxmsg.show({},"Login","Connecção ok",['mbok'],()=>{})
}
const callback_naook=()=>{
    const config ={
        cor : 'red'
    }    
    Cxmsg.show(config,"Login","Connecção Falha",['mbok'],()=>{})
}
Login.login(callback_ok,callback_naook);