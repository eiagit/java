import contato from "./aula97c.js"
const db = document.querySelector('#db');
const btn = document.querySelector("#btn");

btn.addEventListener("click",()=>{
    const cont = {
    i_nom : document.querySelector("#nome").value,
    i_tel : document.querySelector("#telefone").value,
    i_ema : document.querySelector('#email').value,
}
    db.innerHTML=""
    contato.addContatos(cont,db);
})
