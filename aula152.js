const configdgv={
    endpoint :"http://veiculos.fipe.org.br",
    headers :{
        method : 'POST',
        mode : 'no-cors',
        redirect : 'follow',
        path :'/api/veiculos/ConsultarModelos',
        headers : {
            'Content-Length' : 86,
            'Cache-Control' :'no-cache',
            Host: 'veiculos.fipe.org.br',
            Cookie :'ROUTEID=.5',
            Referer : 'http://veiculos.fipe.org.br',
           "Content-Type" : 'application/json'
        },
        body : JSON.stringify({"codigoTabelaReferencia": 231,"codigoTipoVeiculo": 1,"codigoMarca": 26})
    }
}
const dvg=(configdgv)=>{
    setTimeout(() => {
    const fetchh = fetch(configdgv.endpoint,configdgv.headers)
    .then(res=>res.text())
    .then(res=>{
        console.log(res)
        console.log(fetchh)
    }) 
}, 1000);
}
dvg(configdgv)

const code = () => {
    var myHeaders = new Headers();
    myHeaders.append('Host', 'veiculos.fipe.org.br');
    myHeaders.append("Referer", "http://veiculos.fipe.org.br");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "ROUTEID=.5");
    myHeaders.append('Cache-Control','no-cach');
    myHeaders.append('Content-Length',86);
    myHeaders.append('Redirect', 'follow');
    myHeaders.append('Path', '/api/veiculos/ConsultarModelos/');
    var raw = JSON.stringify({ "codigoTabelaReferencia": 231, "codigoTipoVeiculo": 1, "codigoMarca": 25 });

    var requestOptions = {
        method: 'OPTIONS',
        mode: 'no-cors',
        path :'/api/veiculos/ConsultarModelos',
        headers: myHeaders,
        hostname:'veiculos.fipe.org.br',
        body: raw,
        maxRedirects: 20
    };

    setTimeout(() => {
        fetch("http://veiculos.fipe.org.br", requestOptions)
            .then(response => response)
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }, 2000);
}

code()