const ctx = document.getElementById('myChart');
const ver = document.querySelector('#texto');
const carregar = document.querySelector('#btn1')
const gerar = document.querySelector('#btn2')
const board = document.querySelector('#board');
const cidade = document.querySelector('#cidade')
const graficos = document.querySelector('#graficos')
let dados = undefined
let anos = undefined
let perc = undefined
let tipo = graficos.options[graficos.options.selectedIndex].value;
let titulo = 'Título do Gtáfico'
let cidadeselecinada = undefined
let textos = []
const endpoint = 'https://servicodados.ibge.gov.br/api/v3/agregados/1705/variaveis?localidades=N6'
board.innerHTML +='<a href="https://servicodados.ibge.gov.br/api/docs/agregados?versao=3#api-Metadados-agregadosAgregadoMetadadosGet">API do IBGE</a>'
board.innerHTML +='<br>Api : '+'https://servicodados.ibge.gov.br/api/docs/agregados?versao=3#api-Metadados-agregadosAgregadoMetadadosGet'
board.innerHTML +='<br>End Point : '+endpoint
const lerDados = (endp) => {
    fetch(endp).then(res => res.text())
        .then(res => {
            const dbj = JSON.parse(res)
            dados=dbj
            textos.push({'titulo':dbj[0].variavel})
            cidade.innerHTML =`<option value="0">${dbj[0].resultados[0].series[0].localidade.nome} </optinon>`
            cidade.innerHTML +=`<option value="0">${dbj[0].resultados[0].series[1].localidade.nome} </optinon>`
        })
}
carregar.addEventListener('click',()=>{
        const resultado = lerDados(endpoint)
        setTimeout(() => {
        }, 2000);

    })
let grafico = new Chart(ctx, {
        type: tipo,
        data: {
          labels: '',
          datasets: [{
            label: '',
            data: perc,
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
gerar.addEventListener('click',()=>{
    const ibge=dados[0].resultados[0].series[cidade.options.selectedIndex].serie
    anos=Object.keys(ibge)
    perc=Object.values(ibge)
    titulo=textos[0].titulo;
    tipo = graficos.options[graficos.options.selectedIndex].value;
    grafico.type = graficos.options[graficos.options.selectedIndex].value;
    grafico.data.datasets[0].label=titulo;
    grafico.data.labels=anos;
    grafico.data.datasets[0].data=perc;
    grafico.update()
})