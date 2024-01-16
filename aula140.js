const res = document.body
const btn = document.querySelector('#btn1')
const usd = document.querySelector('#usd');
const eur = document.querySelector('#eur');
const btc = document.querySelector('#btc');
const endpoint='https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL'
const ctx = document.getElementById('myChart');
let moedas = undefined // dados dos anos importados por dados
let cotaca = undefined // percentuais dos anos importados por dados
let resposta = undefined
// criação do gráfico
graf = () => {
    grafico = new Chart(ctx, {
      type: 'bar', // tipo do gráfico
      data: {
        labels: [], //['usd','eur','btc'], // texto das colunas
        datasets: [{
          label: 'Diferença entre compra/venda moedas USD,EUR,BTC',
          data: [0,0,0], // dados das colunas
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
}

let dbdata = {
    _usd : '',
    _eur : '',
    _btc : '',
    set valores(val){
        this._usd = val['USDBRL']['code'] +' '+val['USDBRL']['ask'];
        this._eur = val['EURBRL']['code'] +' .:'+val['EURBRL']['ask'];
        this._btc = val['BTCBRL']['code'] +' .:'+val['BTCBRL']['ask'];
        usd.innerHTML = this._usd;
        eur.innerHTML = this._eur;
        btc.innerHTML = this._btc;
        grafico.update();
    },
    get valores(){
        return [this._usd,this._eur,this._btc]
    }
}

const apiret=()=>{
    fetch(endpoint).then(res=>res.json()).then(dados=>{
            slepflash = setTimeout(() => {
                moedas = [dados['USDBRL']['code'],dados['EURBRL']['code'],dados['BTCBRL']['code']];
                cotaca = [(parseFloat(dados['USDBRL']['ask'])-parseFloat(dados['USDBRL']['bid']))/dados['USDBRL']['bid']*100,
                                     (dados['EURBRL']['ask']-dados['EURBRL']['bid'])/dados['EURBRL']['ask']*100,
                                     (dados['BTCBRL']['ask']-dados['BTCBRL']['bid'])/dados['BTCBRL']['ask']*100 ]
                grafico.data.labels=moedas;
                grafico.data.datasets[0].data=cotaca;
                dbdata.valores=dados;
                resposta=dados;
        }, 3000);
    })
}

//let intervalo = setInterval(apiret, 1000);

btn.addEventListener("click",()=>{
    //apiret()
    graf()
    let interval = setInterval(apiret, 3000);

})

