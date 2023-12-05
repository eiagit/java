/* number,null,string,boolean,bigint,undefined,simbol*/
let anoAtual = 2023;
let anoNascimento = 1965;
let idade =anoAtual-anoNascimento;
let nome = 'ennio';
function calculaAno() {

};
console.log(idade);
console.log(`o ano atual é ${anoAtual} e eu nasci em ${anoNascimento} logo eu tenho ${idade} anos` );
console.log("olá ennio \" oi \"");
console.log(nome[0].toUpperCase());
console.log(10.3 + 10.2);
objeto = {}; // Cria um objeto vazio
microfone = {
nome : 'jbs',
cor : 'proeto',
conector : 'P10',
ligado : null,
preco : 342.45,
ligaDesliga : function(suite){
   if (suite == true){ microfone.ligado = true } else {microfone.ligado = false};
   console.log(`meu suite informado ${suite}`);
}};
microfone.ligaDesliga(true);
console.log(microfone.ligado);
console.log(microfone.nome);
console.log(microfone["nome"]);