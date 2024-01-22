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
const dvg=(configdgv)=>{
    console.log(configdgv.endpoint+configdgv.headers.path)
    setTimeout(() => {
    const fetchh = fetch(configdgv.endpoint+configdgv.headers.path,configdgv.headers)
    .then(res=>res.text())
    .then(res=>{
        console.log(res)
        console.log(fetchh)
    })
    .catch(error => console.log('error', error));
}, 3000);
}
//dvg(configdgv)

const code =()=> {
/*    var myHeaders = new Headers();
    myHeaders.append('Host', 'veiculos.fipe.org.br');
    myHeaders.append("Referer", "https://veiculos.fipe.org.br");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "ROUTEID=.5");
    myHeaders.append('Cache-Control','no-cache');
    myHeaders.append('Content-Length',86);
    myHeaders.append('Redirect', 'follow');
    myHeaders.append('Path', '/api/veiculos/ConsultarModelos/');
    var raw = JSON.stringify({ "codigoTabelaReferencia": 231, "codigoTipoVeiculo": 1, "codigoMarca": 25 });

    var requestOptions = {
        method: 'POST',
        mode: 'no-cors',
        path :'/api/veiculos/ConsultarModelos',
        headers: myHeaders,
        hostname:'veiculos.fipe.org.br',
        body: raw,
    };

    setTimeout(() => {
        fetch("https://veiculos.fipe.org.br"+requestOptions.path, requestOptions)
            .then(response => response)
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }, 3000);
    
    var myHeaders = new Headers();
    myHeaders.append("Referer", "https://veiculos.fipe.org.br");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "ROUTEID=.5");
    myHeaders.append("Host", "veiculos.fipe.org.br");
    var raw = JSON.stringify({"codigoTabelaReferencia":305,"codigoTipoVeiculo":1,"codigoMarca":25});
    
    var requestOptions = {
      method: 'POST',
      mode: 'no-cors',
      headers: myHeaders,
      returntransfer : true,
      post :true,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://veiculos.fipe.org.br/api/veiculos/ConsultarModelos", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));   
      */
      
      /*
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json; charset=utf-8");
      myHeaders.append("Cookie", "ROUTEID=.5");
      myHeaders.append("Cache-Control","no-cache");
      myHeaders.append("Content-Length","64");
      myHeaders.append('Host','https://veiculos.fipe.org.br');
      
      var raw = JSON.stringify({"codigoTabelaReferencia": 305,"codigoTipoVeiculo": 1});
      console.log(raw)
      var requestOptions = {
        method: 'POST',
        mode: 'no-cors',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch("https://veiculos.fipe.org.br/api/veiculos/ConsultarMarcas", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
*/

/*
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "ROUTEID=.5");
myHeaders.append("Host", "veiculos.fipe.org.br");

//var raw = JSON.stringify({"codigoTabelaReferencia":215,"codigoMarca":2,"codigoTipoVeiculo":1,"anoModelo":2015,"codigoTipoCombustivel":3,"tipoVeiculo":"carro","modeloCodigoExterno":"","tipoConsulta":"tradicional","codigoModelo":4564});
var raw = {"codigoTabelaReferencia":215,"codigoMarca":2,"codigoTipoVeiculo":1,"anoModelo":2015,"codigoTipoCombustivel":3,"tipoVeiculo":"carro","modeloCodigoExterno":"","tipoConsulta":"tradicional","codigoModelo":4564}

var requestOptions = {
  mode: 'no-cors',
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

const resposta = await fetch("http://veiculos.fipe.org.br/api/veiculos/ConsultarValorComTodosParametros", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  console.log(resposta)
  */
    
    
const asyncPostCall = async () => {
              try {
                  const response = await fetch('https://veiculos.fipe.org.br/api/veiculos/consultarmodelos', {
                        method : 'POST',
                        mode : 'no-cors',
                        credentials: 'same-origin',
                        redirect : 'follow',
                        body : JSON.stringify({"codigoTabelaReferencia": 231,"codigoTipoVeiculo": 1,"codigoMarca": 26}),

                        headers : {
                            "Content-Length" : 64,
                            "Cache-Control" :'no-cache',
                            Host: 'veiculos.fipe.org.br',
                            Cookie :'ROUTEID=.5',
                            
                            Referer : 'https://veiculos.fipe.org.br',
                           //"Content-Type" : "application/json"
                        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8 ; Access-Control-Allow-Origin = "*"'
                        }
                  });
                  
                   const data = await response;
                // enter you logic when the fetch is successful
                   console.log(data);
                 } catch(error) {
               // enter your logic for when there is an error (ex. error toast)
                    console.log(error)
                   } 
              }
  
  asyncPostCall() 
}
code()