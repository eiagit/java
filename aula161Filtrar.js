import { DataGrid } from "https://eiagit.github.io/java/dataGrid.js";
const btnFiltrar = document.querySelector('#btnBusca')
const maskedit1 = document.querySelector('#maskedit1')
const destino = document.querySelector('#divFiltrarDados')

const dgDados={
    dados : [] ,//listaDados(),
    campoRetorno : undefined, // recebe os dados da linha clicada
    destino : destino,
    local : 'pt-br',
    moeda : 'BRL',    
    funcoes: {
        rodape : {hide  : true},
        titulo: { hide: false, nome: 'Funcoes', width: '70px', align: 'left' },
        icones: {
            view  : {hide: false  , name: 'search-outline', func: ()=>{alert('abril o alerte na origem')}},
            edit  : {hide: false  , name: 'pencil-outline', func: ()=>{alert('Voce clicou no editar')}},
            delete: {hide: false  , name: 'trash-outline' , func: ()=>{alert('Você clicou no apagar')}},
        }
    },
    campos: [
        {   campo: 'AGE_ID'    , titulo: 'Id'        , formato: 'g'   , width: '70px' , align: 'left', soma : false},
        {   campo: 'AGE_NOME'  , titulo: 'Nome'      , formato: 'g'   , width: '300px', align: 'left', soma : false},
        {   campo: 'AGE_TELEFO', titulo: 'Telefone'  , formato: 'g'   , width: '150px', align: 'left', soma : false},
        {   campo: 'AGE_EMAIL' , titulo: 'E-Mail'    , formato: 'g'   , width: '200px', align: 'left', soma : false},        
        {   campo: 'AGE_NASCIM', titulo: 'Data Nasc.', formato: 'date', width: '100px', align: 'left', soma : false},
    ]
}

const fetchApi=()=>{
    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        mode : 'cors',
        keepalive : false
      };
        const result = fetch("http://localhost:3000/agenda/filtranome/?AGE_NOME="+maskedit1.value , requestOptions)
        .then(response =>response.json())
        .then(result =>{return result})
        .catch(error => console.log('error', error));
        return result;
}

btnFiltrar.addEventListener('click', async (eve)=>{
    eve.preventDefault()
    const result = await fetchApi();
    DataGrid.criaLista(dgDados,result,dgDados.destino)
})
