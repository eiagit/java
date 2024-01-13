const nom = document.querySelector("#fnome");
const num = document.querySelector('#fnota');
const msg = document.querySelector('#fmsg');
const btn = document.querySelector('#btn1');


btn.addEventListener("click",(evt)=>{
    let msgs=null;
    if(!num.checkValidity()){
        msgs=num.validationMessage;
    }
    evt.preventDefault()
    msg.innerHTML=msgs;
})