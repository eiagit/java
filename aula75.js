const numero=document.querySelector("#numero");
const botao = document.querySelector('#bitbtn1')

const promessa=()=>{
    let promisse = new Promise((res_ok,res_nok)=>{
    let resultado = true;
    let tempo = 3000;
    setTimeout(()=>{
        if(resultado){
            res_ok("Deu Tudo Certo");
            }
        else{
            res_nok("Deu Tudo Errado");
        }
        },tempo)
    })
    return promisse;
}

numero.innerHTML="Esperando .........";

botao.addEventListener("click",(ele)=>{
    numero.innerHTML="Processando .........";
    promessa()
    .then((ret)=>{
    numero.innerHTML=ret;
    numero.classList.remove("erro");
    numero.classList.add("ok");
})
    .catch((ret)=>{
    numero.innerHTML=ret;
    numero.classList.remove("ok");
    numero.classList.add("erro");    
})   
})