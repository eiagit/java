const tecla = [...document.querySelectorAll(".bt_num")];
const lcd = document.querySelector('#visor');
const aba = document.querySelector('#div_aba');
const calc = document.querySelector('#div_calc');
const setas = document.querySelector('#setas');
var valor1 = undefined;
var valor2 = undefined;
var sina = undefined;

function numero(numer){
    if(valor2!=undefined){
        valor1=valor2;
        valor2=undefined;
        lcd.innerHTML="";
    }
    let numdig =numer.substring(3,4)
    if(numer.substring(3,4)==',' && lcd.innerHTML.indexOf(',')>0){
        numdig='';
    }
    lcd.innerHTML += numdig;
}

function opera(numero){
    if(sina!=undefined){
    valor2 = Number(lcd.innerHTML.replace(",","."));
    const resultado = eval(valor1+sina+valor2);
    lcd.innerHTML=resultado;
    valor1 = undefined;
    //sina=undefined;
    valor2=resultado;
    }else{
        sina=numero;
    }
}

function sinal(numero){
    if (numero.substring(3,4)=='='){
        opera(numero.substring(3,4))    
    } else{
    if(valor1==undefined){
       sina = numero.substring(3,4);
       valor1 = Number(lcd.innerHTML.replace(",","."));
       lcd.innerHTML='';
    } else{
        opera(numero.substring(3,4));
        sina = numero.substring(3,4);
    }
    }
}
tecla.map((ele)=>{
    ele.addEventListener("click",(tec)=>{
       const tcla = tec.target;
      if(tcla.className == 'bt_num') {
        numero(tcla.id);
      }
      if(tcla.className == 'bt_num bt_cal') {
        sinal(tcla.id);
      }
    })
})

aba.addEventListener('click',(ele)=>{
    calc.classList.toggle('div_aba_fechada');
    if (setas.innerHTML=='arrow_left') {setas.innerHTML='arrow_right';}
    else{
        setas.innerHTML='arrow_left';
    }
        
})

/* para copiar de um Input
const entrada = querySelector("iddo input");
entrada.select(); Mobyle
entrada.setSelectionRange(0,99999); // mobyle
navegator.clipobard.writeText(entrada.value)*/