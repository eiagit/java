const ctx = document.getElementById('myChart');
// Grafico do chart.js
const ver = document.querySelector('#texto');
// paragrafo para inserção de textos
const carregar = document.querySelector('#btn1')
// Botão Carregar
const gerar = document.querySelector('#btn2')
// botão Gerar
const board = document.querySelector('#board');
// div com os textos
const cidade = document.querySelector('#cidade')
// select das cidades
const graficos = document.querySelector('#graficos')
// select dos tipos de gráficos
let dados = undefined // variável com a resposta do fatch
let anos = undefined // dados dos anos importados por dados
let perc = undefined // percentuais dos anos importados por dados
let grafico=undefined // variável que contem o gráfico do char.js
let tipo = undefined // tipo do gráfico
let titulo = 'Título do Gtáfico' // auto explicativo
let textos = [] // varavel que pode armazenar dados para o título
const endpoint = 'https://servicodados.ibge.gov.br/api/v3/agregados/1705/variaveis?localidades=N6'
// armazenda o endpoint da api
board.innerHTML += '<a href="https://servicodados.ibge.gov.br/api/docs/agregados?versao=3#api-Metadados-agregadosAgregadoMetadadosGet">API do IBGE</a>'
board.innerHTML += '<br>Api : ' + 'https://servicodados.ibge.gov.br/api/docs/agregados?versao=3#api-Metadados-agregadosAgregadoMetadadosGet'
board.innerHTML += '<br>End Point : ' + endpoint
// coloca os textos na div board
const lerDados = (endp) => { // lê os dados da api e guada em dados, 
                             // carrega as cidades no select 
  fetch(endp).then(res => res.text())
    .then(res => {
      const dbj = JSON.parse(res)
      dados = dbj
      textos.push({ 'titulo': dbj[0].variavel })
      cidade.innerHTML = `<option value="0">${dbj[0].resultados[0].series[0].localidade.nome} </optinon>`
      cidade.innerHTML += `<option value="1">${dbj[0].resultados[0].series[1].localidade.nome} </optinon>`
    })
}
// aciona a função ler dados ao toque do botão
// define o tipo do chart
// cria o gráfico chamando a função graf
carregar.addEventListener('click', () => {
  const resultado = lerDados(endpoint)
  setTimeout(() => {
  }, 2000);
  tipo = graficos.options[graficos.options.selectedIndex].value;
  graf()
})

// criação do gráfico
graf = () => {
  grafico = new Chart(ctx, {
    type: tipo, // tipo do gráfico
    data: {
      labels: '', // texto das colunas
      datasets: [{
        label: '', // título do gráfico
        data: '', // dados das colunas
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
// atualiza os valores e gera o gráfico
gerar.addEventListener('click', () => {
  const ibge = dados[0].resultados[0].series[cidade.options.selectedIndex].serie
  // carrega especificamente os dados que preciso do retorno da api
  anos = Object.keys(ibge) // dados dos anos/meses
  perc = Object.values(ibge) // dados dos percenuais
  titulo = textos[0].titulo; // título do gráfico
  grafico.type = graficos.options[graficos.options.selectedIndex].value;
  // tipo do gráfico, mas depois de criado não permite alterar
  grafico.data.datasets[0].label = titulo;
  // atualiza o título do gráfico
  grafico.data.labels = anos;
  // dados nas colunas do gráfico
  grafico.data.datasets[0].data = perc;
  // dados de percentual
  grafico.update() // atualiza o gráfico
})