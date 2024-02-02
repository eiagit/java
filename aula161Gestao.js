import { DataGrid } from "./dataGrid.js";
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
        titulo: { hide: false, nome: 'Funcoes', width: '70px', align: 'center' },
        icones: {
            view  : {hide: true  , name: 'search-outline', func: ()=>{alert('abril o alerte na origem')}},
            edit  : {hide: false  , name: 'pencil-outline', func: ()=>{alterar()}},
            delete: {hide: false  , name: 'trash-outline' , func: ()=>{atualizar()}},
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

const alterar =()=>{
    const janelaBase = document.createElement('DIV');
    janelaBase.setAttribute('id','divJanelaBase');
    janelaBase.setAttribute('class','divJanelaBase');
    janelaBase.setAttribute('name','divJanelaBase');
    document.body.appendChild(janelaBase)

    const janelaFrame = document.createElement('iframe')
    janelaFrame.setAttribute('id','janelaFrame')
    janelaFrame.setAttribute('class','janelaFrame')
    janelaFrame.setAttribute('src','./aula161Gestao1.html')
    janelaFrame.setAttribute('sandbox','allow-same-origin')
    janelaFrame.setAttribute('seamless','true')

    const carregaFrame =()=>{
        janelaBase.appendChild(janelaFrame);
        return new Promise ((resolve)=>{
            setTimeout(() => {
                resolve()
            }, 200);
        
        })
    }

    async function sobeframe (){
         await carregaFrame()
         const frameWindow = await janelaFrame.contentWindow.document
         const meNome = await frameWindow.querySelector('#meNome')
         const meTelefone = await frameWindow.querySelector('#meTelefone')
         const meEmail = await frameWindow.querySelector('#meEmail')
         const meNascimento = await frameWindow.querySelector('#meNascimento')
         const btnAlterar = await frameWindow.querySelector('#btnAlterar')        
         const btnCancel = await frameWindow.querySelector('#btnCancelar')
         meNome.value = await dgDados.campoRetorno[1]['innerHTML']
         meTelefone.value = await dgDados.campoRetorno[2]['innerHTML']
         meEmail.value = await dgDados.campoRetorno[3]['innerHTML']
         let dataNas = await dgDados.campoRetorno[4]['innerHTML']
         dataNas = await dataNas.substring(6,10)+dataNas.substring(2,5)+'/'+dataNas.substring(0,2)
         dataNas = await new Date(dataNas)
         meNascimento.valueAsDate = await dataNas
         await btnCancel.addEventListener('click',()=>{
            janelaBase.remove()
         })
         
console.log(await dgDados.campoRetorno[0]['innerHTML'])

         await btnAlterar.addEventListener('click',()=>{
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            
            var raw = JSON.stringify({"AGE_NOME": meNome.value,"AGE_TELEFO":meTelefone.value,"AGE_EMAIL":meEmail.value,"AGE_NASCIM":meNascimento.value,"AGE_ID": dgDados.campoRetorno[0]['innerHTML']});
        
            var requestOptions = {
              method: 'PUT',
              mode : 'cors',
              headers: myHeaders,
              body: raw,
              redirect: 'follow'
            };
            const timeout = 2000
            setTimeout(() => {          
            fetch("http://127.0.0.1:3000/agenda", requestOptions)
              .then(response => response.text())
              .then(result => {console.log(result)
              atualizar()})
              .catch(error => console.log('error', error));
            }, timeout);      
         })         
    }
    sobeframe()

}
const atualizar=()=>{
const janelaBase = document.querySelector('#divJanelaBase')
   janelaBase.remove()
    DataGrid.hideLista(dgDados)
    btnFiltrar.click()
  }