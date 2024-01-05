const timeout = 1000;
const div_relogio = document.querySelector('#relogio');
const entrada = document.querySelector('#text');
const div_alarme = document.querySelector('#alarme');
const datacao = document.querySelector('#data');
const bt_ativ = document.querySelector('#ativa');
const bt_para = document.querySelector('#para');
const halarme = document.querySelector('#halarme');
const dia = new Date();
const som = new Audio('aula77.mp3')
datacao.innerHTML = dia.getDate()+'/'+dia.getMonth()+'/'+dia.getFullYear(); 
let data = new Date();
let alarme = new Date();
let ligar = false;
const horas=()=>{
    data = new Date();
   div_relogio.innerHTML = data.getHours().toString().padStart(2,'0')+':'+data.getMinutes().toString().padStart(2,"0")+':'+data.getSeconds().toString().padStart(2,"0");
   if (data>=alarme && ligar){
    div_alarme.classList.toggle('tocou');
    som.play(-1);
    }    
}
bt_ativ.addEventListener('click',(ele)=>{
    data =  new Date;
    alarme = new Date;
    const nentrada = document.querySelector('#text');
    alarme.setSeconds(alarme.getSeconds()+Number(nentrada.value));
    ligar=true;
    halarme.innerHTML='Hora do Alarme '+alarme.getHours().toString().padStart(2,'0')+':'+alarme.getMinutes().toString().padStart(2,"0")+':'+alarme.getSeconds().toString().padStart(2,"0");
})

bt_para.addEventListener("click",(ele)=>{
    div_alarme.classList.remove('tocou');
    ligar=false;
    halarme.innerHTML='Hora do Alarme ';
    som.pause();
    som.currentTime=0
})

const intervalo=setInterval(horas,1000)
