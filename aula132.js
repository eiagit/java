const relo = document.querySelector('#mostrador')
const btns = document.querySelector('#btn1');
const btnp = document.querySelector('#btn2');
const btnr = document.querySelector('#btn3');
const btnt = document.querySelector('#btn4');
const divp = document.querySelector('#div_parcias')
const cronometro = document.querySelector('#div_relogio')
let tempoInicial = 0
let tempoAgora = 0
let intervalor = null
console.log(tempoInicial)

const mostrador=()=>{
    tempoAgora = Date.now()
    let tempo = (tempoAgora-tempoInicial)/1000;
    let hora = Math.floor(tempo/3600)
    let resto = tempo%3600
    let minuto = Math.floor(resto/60)
    let segundo  = Math.floor(resto%60)
    relo.innerHTML=`${("00" + hora).slice(-2)}:${("00" + minuto).slice(-2)}:${("00" + segundo).slice(-2)}`
}
btns.addEventListener("click",()=>{
    intervalor=setInterval(()=>{
        mostrador()
    },1000)
    tempoInicial = Date.now()
})
btnp.addEventListener("click",()=>{
    clearInterval(intervalor);
})
btnr.addEventListener("click",()=>{
    tempoInicial=0;
    relo.innerHTML="00:00:00";
    parciais.innerHTML=''
})
btnt.addEventListener("click",()=>{
    var parc = '<div class="div_relogio">'
    parc +=cronometro.innerHTML;
    parc +='</div>'
    parciais.innerHTML=parc+parciais.innerHTML
})