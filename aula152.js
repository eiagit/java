import { Cxmsg } from "./cxmsg.js";
const dgvProdutos = document.querySelector('#dgvProdutos')
const dgvDados = document.querySelector('#dgvDados');
const config = {
    cor : "rgb(136, 223, 223)",
    tipo : 'mbok', // mbsim,mbnao,mbcancela
    btnretorno : 'mrok',
}
Cxmsg.config(config);

console.log("iniciei Script")

// const td1 = document.createElement('div')
// td1.setAttribute('id','td1')
// td1.setAttribute('class','td1')
// document.body.prepend(td1)

// const td2 = document.createElement('div')
// td2.setAttribute('id','td2')
// td2.setAttribute('class','td2')
// td1.appendChild(td2)
var listaLinhas = []
const lerLinhas = ()=>{
    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };
      setTimeout(() => {
        fetch("http://127.0.0.1:3000/tabelas/linha", requestOptions)
        .then(response =>response.json())
        .then(result => {listaLinhas =result})
        .catch(error => console.log('error', error));    
    }, 1000);        
}




const configdgv={
    endpoint :"https://veiculos.fipe.org.br",
    headers :{
        method : 'POST',
        mode : 'no-cors',
        credentials: 'same-origin',
        redirect : 'follow',
        path :'/api/veiculos/consultarmodelos',
        headers : {
            'Content-Length' : 86,
            'Cache-Control' :'no-cache',
            Host: 'veiculos.fipe.org.br',
            Cookie :'ROUTEID=.5',
            Referer : 'https://veiculos.fipe.org.br',
           "Content-Type" : 'application/json'
        },
        body : JSON.stringify({"codigoTabelaReferencia": 231,"codigoTipoVeiculo": 1,"codigoMarca": 26})
    }
}

//dvg(configdgv)

const code = ()=>{
 /* 
    var myHeaders = new Headers();
  myHeaders.append("Authorization", "Basic Og==");
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch("https://v6.exchangerate-api.com/v6/813060bb2835744a51c502d5/latest/BRL", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result.conversion_rates))
    .catch(error => console.log('error', error));
    */
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
    const timeout = 3000
    setTimeout(() => {
        fetch("https://brasilapi.com.br/api/pix/v1/participants", requestOptions)
            .then(response => response.json())
            .then(result => {
                result.map((dat, id) => {
                    dgvLinhaCria(dat)
                })
            })
            .catch(error => console.log('error', error));
    }, timeout);
}
//code()

const prodpec =()=>{
    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };
      const timeout = 2000
      setTimeout(() => {      
        fetch("http://127.0.0.1:3000/produtos?QTD=20", requestOptions)
        .then(response =>response.json())
        .then(result =>
            {
           result.map((dat, id) => {
                dgvLinhaCria(dat)
            })
        }
        ).catch(error => console.log('error', error));    
    }, timeout);
}

setTimeout(() => {
    listaLinhas.map((dat,id)=>{
       // console.log(dat.NOME)
    }) 
    console.log(listaLinhas)
    const  achlinha = listaLinhas.findIndex(({CODIGO})=>CODIGO.trim() == '01.04')
    console.log(achlinha)
},3000);

lerLinhas();
prodpec();



const dgvLinhaCria = (retLinha)=>{

    // const cl1 = retLinha.ispb;
    // const cl2 = retLinha.nome_reduzido;
    // const cl3 = retLinha.modalidade_participacao;
    // const cl4 = retLinha.inicio_operacao;

    const cl1 = retLinha.CODIGO;
    const cl2 = retLinha.NOME;
    const cl3 = retLinha.CODFAB;
    let cl4 = retLinha.PRECO1.toLocaleString('pt-BR',  {style: 'currency', currency: 'BRL'}) ;
    
    const dgvLinha = document.createElement('DIV');
    dgvLinha.setAttribute('id',cl1)
    dgvLinha.setAttribute('class',"dgvLinha")
  
    const dgvLinhaC1 = document.createElement('DIV');
    dgvLinhaC1.setAttribute('id','c1'+cl1)
    dgvLinhaC1.setAttribute('class',"c1")
    dgvLinhaC1.innerHTML=cl1
    dgvLinha.appendChild(dgvLinhaC1);
 
    const dgvLinhaC2 = document.createElement('DIV');
    dgvLinhaC2.setAttribute('id','c2'+cl1)
    dgvLinhaC2.setAttribute('class',"c2")
    dgvLinhaC2.innerHTML=cl2
    dgvLinha.appendChild(dgvLinhaC2);    
 
    const dgvLinhaC3 = document.createElement('DIV');
    dgvLinhaC3.setAttribute('id','c3'+cl1)
    dgvLinhaC3.setAttribute('class',"c3")
    dgvLinhaC3.innerHTML=cl3
    dgvLinha.appendChild(dgvLinhaC3);
 
    const dgvLinhaC4 = document.createElement('DIV');
    dgvLinhaC4.setAttribute('id','c4'+cl1)
    dgvLinhaC4.setAttribute('class',"c4")
    
     
//   cl4 =`${('0'+data.getDay()).slice(-2)}/${('0'+data.getMonth()).slice(-2)}/${('0000'+data.getFullYear()).slice(-4)}`
    dgvLinhaC4.innerHTML= cl4
    dgvLinha.appendChild(dgvLinhaC4);
 
    const dgvLinhaC5 = document.createElement('DIV');
    dgvLinhaC5.setAttribute('id','c5'+cl1)
    dgvLinhaC5.setAttribute('class',"c5")
    
    const dgvLinhaId = document.createElement('ion-icon');
    dgvLinhaId.setAttribute('id','id')
    dgvLinhaId.setAttribute('name','trash-outline')
    dgvLinhaId.addEventListener("click",(eve)=>{
        const voltou = Cxmsg.show(config,"Editar um text","Você está usando a caixa de dialogos para editar um campo "+cl2 ,["mbok"],()=>{})
    }) 
    
    dgvLinhaC5.appendChild(dgvLinhaId);
    
    const dgvLinhaIe = document.createElement('ion-icon');
    dgvLinhaIe.setAttribute('id','ie')
    dgvLinhaIe.setAttribute('name','pencil-outline')
    dgvLinhaIe.addEventListener("click",(eve)=>{
        const voltou = Cxmsg.show(config,"Editar um text","Você está usando a caixa de dialogos para editar um campo "+cl2 ,["mbok"],()=>{})
        
    })     
    dgvLinhaC5.appendChild(dgvLinhaIe);

    const dgvLinhaIv = document.createElement('ion-icon');
    dgvLinhaIv.setAttribute('id','Iv')
    dgvLinhaIv.setAttribute('name','search-outline')    
    dgvLinhaIv.addEventListener("click",(eve)=>{
        janelaEdita(retLinha)
    }) 
    dgvLinhaC5.appendChild(dgvLinhaIv);

    dgvLinha.appendChild(dgvLinhaC5);
    dgvDados.appendChild(dgvLinha);    
}


const janelaEdita =(retLinha)=>{

    const div_edFundo = document.createElement('div');
    div_edFundo.setAttribute('id','div_edFundo');
    div_edFundo.setAttribute('class','div_edFundo');
    document.body.append(div_edFundo)

    const div_edJanela = document.createElement('div')
    div_edJanela.setAttribute('id','div_edjanela');
    div_edJanela.setAttribute('class','div_edJanela');
    div_edFundo.prepend(div_edJanela);
    
    const div_topo = document.createElement('div')
    div_topo.setAttribute('id','div_top');
    div_topo.setAttribute('class','div_top');
    div_topo.innerHTML='<h3> Produtos </h3>'
    div_edJanela.append(div_topo);
    
    const div_linha1 = document.createElement('div')
    div_linha1.setAttribute('id','div_linha1');
    div_linha1.setAttribute('class','div_linha1');
    div_edJanela.append(div_linha1);

    const div_codigo = document.createElement('div')
    div_codigo.setAttribute('id','div_codigo');
    div_codigo.setAttribute('class','div_codigo');
    div_linha1.append(div_codigo);

        const label1 = document.createElement('label')
    label1.setAttribute('class','in_edJanea')
    label1.innerHTML='Código'
    div_codigo.appendChild(label1);

    const maskedit1 = document.createElement('input')
    maskedit1.setAttribute('id','Maskedit1');
    maskedit1.setAttribute('class','in_edJanela');
    maskedit1.setAttribute('type','number');
    maskedit1.setAttribute('value',retLinha.CODIGO)
    div_codigo.appendChild(maskedit1);

    const div_nome = document.createElement('div')
    div_nome.setAttribute('id','div_nome');
    div_nome.setAttribute('class','div_nome');
    div_linha1.append(div_nome);

    const label2 = document.createElement('label')
    label2.setAttribute('class','in_edJanela')
    label2.innerHTML='Nome do Produto'
    div_nome.appendChild(label2);

    const maskedit2 = document.createElement('input')
    maskedit2.setAttribute('id','Maskedit2');
    maskedit2.setAttribute('class','in_edJanela');
    maskedit2.setAttribute('type','text');
    maskedit2.setAttribute('value',retLinha.NOME)
    div_nome.appendChild(maskedit2);


/// linha 2
    const div_linha2 = document.createElement('div')
    div_linha2.setAttribute('id', 'div_linha2');
    div_linha2.setAttribute('class', 'div_linha2');
    div_edJanela.append(div_linha2);

    const div_linha = document.createElement('div')
    div_linha.setAttribute('id', 'div_linha');
    div_linha.setAttribute('class', 'div_linha');
    div_linha2.append(div_linha);

    const label3 = document.createElement('label')
    label3.setAttribute('class','in_edJanela')
    label3.innerHTML='Linha'
    div_linha.appendChild(label3);

    const combobox3 = document.createElement('select')
    combobox3.setAttribute('id','Combobox3');
    combobox3.setAttribute('class','in_edJanela');
    div_linha.appendChild(combobox3);

    setTimeout(() => {
        listaLinhas.map((dat,id)=>{
           const  cbox3op1= document.createElement('option')
           cbox3op1.setAttribute('class','in_edJanela');
           cbox3op1.innerHTML=dat.NOME
           combobox3.appendChild(cbox3op1);               
        }) 
        combobox3.selectedIndex = listaLinhas.findIndex(({CODIGO})=>CODIGO == retLinha.LINHA);

    },1000);

    const div_refere = document.createElement('div')
    div_refere.setAttribute('id', 'div_referencia');
    div_refere.setAttribute('class', 'div_referencia');
    div_linha2.append(div_refere);    
    
    const label4 = document.createElement('label')
    label4.setAttribute('class','in_edJanela')
    label4.innerHTML='Referência/Fabricante'
    div_refere.appendChild(label4);

    const maskedit4 = document.createElement('input')
    maskedit4.setAttribute('id','Maskedit4');
    maskedit4.setAttribute('class','in_edJanela');
    maskedit4.setAttribute('type','text');
    maskedit4.setAttribute('value',retLinha.REFERE)
    div_refere.appendChild(maskedit4);    

/////linha 3
    const div_linha3 = document.createElement('div')
    div_linha3.setAttribute('id', 'div_linha3');
    div_linha3.setAttribute('class', 'div_linha3');
    div_edJanela.append(div_linha3);

    const div_unidade = document.createElement('div')
    div_unidade.setAttribute('id', 'div_unidade');
    div_unidade.setAttribute('class', 'div_unidade');
    div_linha3.append(div_unidade);

    const label5 = document.createElement('label')
    label5.setAttribute('class','in_edJanela')
    label5.innerHTML='UND'
    div_unidade.appendChild(label5);

    const maskedit5 = document.createElement('input')
    maskedit5.setAttribute('id','Maskedit5');
    maskedit5.setAttribute('class','in_edJanela');
    maskedit5.setAttribute('type','text');
    maskedit5.setAttribute('value',retLinha.UNIDAD)
    div_unidade.appendChild(maskedit5);

    const div_imposto = document.createElement('div')
    div_imposto.setAttribute('id', 'div_imposto');
    div_imposto.setAttribute('class', 'div_imposto');
    div_linha3.append(div_imposto);
    
    const label7 = document.createElement('label')
    label7.setAttribute('class','in_edJanela')
    label7.innerHTML='Imp'
    div_imposto.appendChild(label7);

    const maskedit7 = document.createElement('input')
    maskedit7.setAttribute('id','Maskedit7');
    maskedit7.setAttribute('class','in_edJanela');
    maskedit7.setAttribute('type','text');
    maskedit7.setAttribute('value',retLinha.IMPOST)
    div_imposto.appendChild(maskedit7);
    
    const div_complemento = document.createElement('div')
    div_complemento.setAttribute('id', 'div_complemento');
    div_complemento.setAttribute('class', 'div_complemento');
    div_linha3.append(div_complemento);    
    
    const label9 = document.createElement('label')
    label9.setAttribute('class','in_edJanela')
    label9.innerHTML='Complemento'
    div_complemento.appendChild(label9);

    const combobox1 = document.createElement('select')
    combobox1.setAttribute('id','Combobox1');
    combobox1.setAttribute('class','in_edJanela');
    div_complemento.appendChild(combobox1);

    const  cbox1op1= document.createElement('option')
    cbox1op1.setAttribute('class','in_edJanela');
    cbox1op1.innerHTML="Não"
    combobox1.appendChild(cbox1op1);    

    const  cbox1op2= document.createElement('option')
    cbox1op2.setAttribute('class','in_edJanela');
    cbox1op2.innerHTML="Sim"
    combobox1.appendChild(cbox1op2);    

    combobox1.selectedIndex=retLinha.COMPLE

    const div_codigoBarra = document.createElement('div')
    div_codigoBarra.setAttribute('id', 'div_codigoBarra');
    div_codigoBarra.setAttribute('class', 'div_codigoBarra');
    div_linha3.append(div_codigoBarra);    

    const label6 = document.createElement('label')
    label6.setAttribute('class','in_edJanela')
    label6.innerHTML='Código Brras'
    div_codigoBarra.appendChild(label6);

    const maskedit6 = document.createElement('input')
    maskedit6.setAttribute('id','Maskedit6');
    maskedit6.setAttribute('class','in_edJanela');
    maskedit6.setAttribute('type','text');
    maskedit6.setAttribute('value',retLinha.CBARRA)
    div_codigoBarra.appendChild(maskedit6);

    /// linha 4

    const div_linha4 = document.createElement('div')
    div_linha4.setAttribute('id', 'div_linha4');
    div_linha4.setAttribute('class', 'div_linha4');
    div_edJanela.append(div_linha4);

    const div_codigoFabrica = document.createElement('div')
    div_codigoFabrica.setAttribute('id', 'div_codigoFabrica');
    div_codigoFabrica.setAttribute('class', 'div_codigoFabrica');
    div_linha4.append(div_codigoFabrica);

    const label8 = document.createElement('label')
    label8.setAttribute('class','in_edJanela')
    label8.innerHTML='Código Fábrica'
    div_codigoFabrica.appendChild(label8);

    const maskedit8 = document.createElement('input')
    maskedit8.setAttribute('id','Maskedit8');
    maskedit8.setAttribute('class','in_edJanela');
    maskedit8.setAttribute('type','text');
    maskedit8.setAttribute('value',retLinha.CODFAB)
    div_codigoFabrica.appendChild(maskedit8);    

    const div_grupo = document.createElement('div')
    div_grupo.setAttribute('id', 'div_grupo');
    div_grupo.setAttribute('class', 'div_grupo');
    div_linha4.append(div_grupo);

    const label10 = document.createElement('label')
    label10.setAttribute('class','in_edJanela')
    label10.innerHTML='Grupo'
    div_grupo.appendChild(label10);

    const combobox2 = document.createElement('select')
    combobox2.setAttribute('id','Combobox2');
    combobox2.setAttribute('class','in_edJanela');
    div_grupo.appendChild(combobox2);

    const  cbox2op1= document.createElement('option')
    cbox2op1.setAttribute('class','in_edJanela');
    cbox2op1.innerHTML="Sem Grupo"
    combobox2.appendChild(cbox2op1);

    //// linha 5
    const div_linha5 = document.createElement('div')
    div_linha5.setAttribute('id', 'div_linha5');
    div_linha5.setAttribute('class', 'div_linha5');
    div_edJanela.append(div_linha5);

    const div_vasilhame = document.createElement('div')
    div_vasilhame.setAttribute('id', 'div_vasilhame');
    div_vasilhame.setAttribute('class', 'div_vasilhame');
    div_linha5.append(div_vasilhame);

    const label11 = document.createElement('label')
    label11.setAttribute('class','in_edJanela')
    label11.innerHTML='Vasilhame'
    div_vasilhame.appendChild(label11);

    const maskedit9 = document.createElement('input')
    maskedit9.setAttribute('id','Maskedit9');
    maskedit9.setAttribute('class','in_edJanela');
    maskedit9.setAttribute('type','text');
    maskedit9.setAttribute('value',retLinha.VASILH)
    div_vasilhame.appendChild(maskedit9);    
    
    const div_local = document.createElement('div')
    div_local.setAttribute('id', 'div_local');
    div_local.setAttribute('class', 'div_local');
    div_linha5.append(div_local);

    const label12 = document.createElement('label')
    label12.setAttribute('class','in_edJanela')
    label12.innerHTML='Local'
    div_local.appendChild(label12);

    const maskedit10 = document.createElement('input')
    maskedit10.setAttribute('id','Maskedit9');
    maskedit10.setAttribute('class','in_edJanela');
    maskedit10.setAttribute('type','text');
    maskedit10.setAttribute('value',retLinha.LOCAL)
    div_local.appendChild(maskedit10);    
    
    /////////////////
    const div_bottom = document.createElement('div');
    div_bottom.setAttribute('id','div_bottom');
    div_bottom.setAttribute('class','div_button');    
    div_edJanela.appendChild(div_bottom);
    
    const btn1 = document.createElement('input')
    btn1.setAttribute('id','Bitbtn1');
    btn1.setAttribute('class','btn');
    btn1.setAttribute('type','button');
    btn1.setAttribute('value','Ok');
    btn1.addEventListener("click",()=>{
        div_edFundo.remove();
    })
    div_bottom.appendChild(btn1);

}

//janelaEdita({})

// "CODIGO" : 1,
// "LINHA" : "01.01",
// "NOME" : "SISTEMA DE VENDAS (VEN)",
// "REFERE": "EIA SYSTEMS",
// "UNIDAD": "UND",
// "CBARRA": "-0",
// "IMPOST": "II      ",
// "CANCEL": 0,
// "CODFAB": "VEN",
// "COMPLE": 0,
// "USO": 0,
// "GRUPOS": null,
// "VASILH": 0,
// "LOCAL": null