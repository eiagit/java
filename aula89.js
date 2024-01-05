const btn_ale = document.querySelector('#alert');
const btn_con = document.querySelector('#confirm');
const btn_pro = document.querySelector('#prompt');

btn_ale.addEventListener("click",()=>{
alert("Mensagem do Alerta");
})
btn_con.addEventListener("click",()=>{
    const resul = confirm("Você está bem ?");
    if(resul){
        alert("sim")
    }
})
btn_pro.addEventListener("click",()=>{
   const resu = prompt("Digite Seu Nome");
   alert("bom dia "+resu) 
})