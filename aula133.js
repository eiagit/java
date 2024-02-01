import { Cxmsg } from "./cxmsg.js";
const config = {
    cor : "rgb(136, 223, 223)",
    tipo : 'mbok', // mbsim,mbnao,mbcancela
    btnretorno : 'mrok',
}
function mostrar(){
    if(Cxmsg.mr()=='mrok')
    {document.body.append("Ele Realmente executa aquilo que eu quero depois de pressionar o botão "+Cxmsg.mr())};
    return Cxmsg.mr();
}
Cxmsg.config(config);
const btnmostrar = document.querySelector('#btn1');
const btnpegar = document.querySelector('#btn2');
btnmostrar.addEventListener('click',()=>{
    const voltou = Cxmsg.show(config,"Alert","Você está usando a caixa de dialogos personalizada",["mbok","mbcancela"],mostrar)
})
btnpegar.addEventListener("click",()=>{
console.log(Cxmsg.mr())
})