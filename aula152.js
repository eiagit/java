const dgvProdutos = document.querySelector('#dgvProdutos')
const dgvDados = document.querySelector('#dgvDados');


console.log("iniciei Script")

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
code()

const dgvLinhaCria = (retLinha)=>{
    const dgvLinha = document.createElement('DIV');
    dgvLinha.setAttribute('id',retLinha.ispb)
    dgvLinha.setAttribute('class',"dgvLinha")
    dgvDados.appendChild(dgvLinha);
 
    const dgvLinhaC1 = document.createElement('DIV');
    dgvLinhaC1.setAttribute('id','c1'+retLinha.ispb)
    dgvLinhaC1.setAttribute('class',"c1")
    dgvLinhaC1.innerHTML=retLinha.ispb
    dgvLinha.appendChild(dgvLinhaC1);
 
    const dgvLinhaC2 = document.createElement('DIV');
    dgvLinhaC2.setAttribute('id','c2'+retLinha.ispb)
    dgvLinhaC2.setAttribute('class',"c2")
    dgvLinhaC2.innerHTML=retLinha.nome_reduzido
    dgvLinha.appendChild(dgvLinhaC2);    
 
    const dgvLinhaC3 = document.createElement('DIV');
    dgvLinhaC3.setAttribute('id','c3'+retLinha.ispb)
    dgvLinhaC3.setAttribute('class',"c3")
    dgvLinhaC3.innerHTML=retLinha.modalidade_participacao
    dgvLinha.appendChild(dgvLinhaC3);
 
    const dgvLinhaC4 = document.createElement('DIV');
    dgvLinhaC4.setAttribute('id','c4'+retLinha.ispb)
    dgvLinhaC4.setAttribute('class',"c4")
    const data= new Date(retLinha.inicio_operacao)
    const dataf =`${('0'+data.getDay()).slice(-2)}/${('0'+data.getMonth()).slice(-2)}/${('0000'+data.getFullYear()).slice(-4)}`
    dgvLinhaC4.innerHTML= dataf
    dgvLinha.appendChild(dgvLinhaC4);
 
    const dgvLinhaC5 = document.createElement('DIV');
    dgvLinhaC5.setAttribute('id','c5'+retLinha.ispb)
    dgvLinhaC5.setAttribute('class',"c5")
    
    const dgvLinhaId = document.createElement('ion-icon');
    dgvLinhaId.setAttribute('id','id')
    dgvLinhaId.setAttribute('name','trash-outline')
    dgvLinhaId.addEventListener("click",(eve)=>{

    }) 
    dgvLinhaC5.appendChild(dgvLinhaId);
    
    const dgvLinhaIe = document.createElement('ion-icon');
    dgvLinhaIe.setAttribute('id','ie')
    dgvLinhaIe.setAttribute('name','pencil-outline')
    dgvLinhaIe.addEventListener("click",(eve)=>{

    })     
    dgvLinhaC5.appendChild(dgvLinhaIe);

    const dgvLinhaIv = document.createElement('ion-icon');
    dgvLinhaIv.setAttribute('id','Iv')
    dgvLinhaIv.setAttribute('name','search-outline')    
    dgvLinhaIv.addEventListener("click",(eve)=>{

    }) 
    dgvLinhaC5.appendChild(dgvLinhaIv);

    dgvLinha.appendChild(dgvLinhaC5);
}