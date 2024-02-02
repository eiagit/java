const btnHome = document.querySelector("#btnHome");
const btnNovo = document.querySelector("#btnNovo");
const btnPesquisar = document.querySelector("#btnPesquisar");
const btnFiltrar = document.querySelector("#btnFiltrar");
const btnGestao = document.querySelector("#btnGestao");
const btnSobre = document.querySelector("#btnSobre");
const main = document.querySelector("#main");
const cabecalho = document.querySelector("#cabecalho");
const menu = document.querySelector("#menu");

btnHome.addEventListener('click',(eve)=>{
    trataMenu(eve.originalTarget,'./aula161Home.html')
    
});
btnNovo.addEventListener('click',(eve)=>{
    trataMenu(eve.originalTarget,'./aula161Cadastrar.html')

});
btnPesquisar.addEventListener('click',(eve)=>{
    trataMenu(eve.originalTarget,'./aula161Pesquisar.html')
});
btnFiltrar.addEventListener('click',(eve)=>{
    trataMenu(eve.originalTarget,'./aula161Filtrar.html')
});
btnGestao.addEventListener('click',(eve)=>{
    trataMenu(eve.originalTarget,'./aula161Gestao.html')
});
btnSobre.addEventListener('click',(eve)=>{
    trataMenu(eve.originalTarget,'./aula161Sobre.html')
});

const trataMenu=(sel,ur)=>{
    const menux = [...menu.childNodes]
    menux.map((ele,id)=>{
        if (ele.type=="button"){
            ele.classList.remove('abSelecionada')
        }
    })
    sel.classList.add('abSelecionada')
    window.open(ur,"ifMain");
}


