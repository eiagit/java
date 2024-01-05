const url = document.querySelector("#url");
const btn = document.querySelector("#sub");

btn.addEventListener("click",(eve)=>{
    //window.location='http://php-ciei.x10.mx/notas';
    // window.location.replace('http://php-ciei.x10.mx/lista'); // inicializa a pagina sem voltar deleta a url corrente
    //window.location.assign('http://php-ciei.x10.mx/html'); //carrega página
    //window.location.reload() // recarrega a página
    //window.history.forward() // avança para próxima página do histórico
    console.log(window.history.length)
})