const nome = document.querySelector("#maskedit1");
const portas = document.querySelector("#maskedit2");
const blinda = document.querySelector("#maskedit3");
const municao = document.querySelector("#maskedit4");
const botao = document.querySelector("#bitbtn1");
const botao2 = document.querySelector("#bitbtn2");
const radio1 = document.querySelector("#setbox1");
const radio2 = document.querySelector("#setbox2");
const vcarro = document.querySelector("#carros");
let concessionaria = []
class Carro{
    constructor(nome,portas){
        this.nome = nome;
        this.portas = portas;
        this.ligado = false;
        this.velocidade = 0
        this.tipo=undefined
        this.cor = ""
    }
    getNome(){
        return this.nome;
    }
    setNome(nome){
        this.nome=nome;
    }
    getPortas(){
        return this.portas;
    }
    setPortas(portas){
        this.portas=portas;
    }
    getCor(){
        return this.cor;
    }
    setCor(cor){
        this.cor=cor;
    }
    getTipo(){
        return this.tipo;
    }
    setTipo(tipo){
        this.tipo=tipo;
    }
    ligar = function(){
        this.ligado=true;
    }
    desligar = function(){
        this.ligado=False;
    }
}

class Militar extends Carro{
    constructor(nome,portas,blindagem,municao,banda){
        super(nome,portas);
        this.banda=banda;
        this.blindagem=blindagem;
        this.municao=municao;
    }
    atirar=function(){
        if(this.municao>0){
            municao --;
        }
    }
    getBanda(){
        return this.banda;
    }
    setNome(banda){
        this.banda=banda;
    }
    getBlindagem(){
        return this.blindagem;
    }
    setBlindagem(blinda){
        this.blindagem=blinda;
    }
    getMunicao(){
        return this.municao;
    }
    setMunicao(munic){
        this.municao=munic;
    }
}
let veiculo = new Carro("",0)
botao.addEventListener("click",()=>{
    if(radio1.checked==true){
        veiculo = new Militar(nome.value,portas.value)
        veiculo.setTipo(0);
        veiculo.setBlindagem(blinda.value);
        veiculo.setMunicao(municao.value);
        veiculo.setCor("Cinza")
        concessionaria.push(veiculo);
        vcarro.innerHTML="";            
        listaVeiculo(veiculo);
    }
    if(radio2.checked==true){
    veiculo = new Carro(nome.value,portas.value);
    veiculo.setTipo(1);
    concessionaria.push(veiculo);
    vcarro.innerHTML="";
    listaVeiculo(veiculo);
   } 
   
})

const listaVeiculo=(veic)=>{
    const novocarro=document.createElement('div');
    const apagar=document.createElement("input");
    apagar.setAttribute("class","bta");
    apagar.setAttribute("type","button");
    apagar.setAttribute("value","Apagar");
    apagar.setAttribute("id","id"+vcarro.children.length)
    apagar.setAttribute("name",vcarro.children.length)
    apagar.setAttribute("indice",vcarro.children.length)
    novocarro.setAttribute("class","ncarro");
    novocarro.setAttribute("id","car"+vcarro.children.length);
    novocarro.innerHTML+="<p>"
    novocarro.innerHTML+=`Nome ...: ${veic.getNome()} <br>`;
    novocarro.innerHTML+=`Portas .: ${veic.getPortas()}<br>`;
    novocarro.innerHTML+=`Tipo ...: ${((veic.getTipo()==0)? "Militar" : "Normal")}`
    if (veic.getTipo()==0){
        novocarro.innerHTML+=`<br>Cor .......: ${veic.getCor()}`;
        novocarro.innerHTML+=`<br>Blindagem .: ${veic.getBlindagem()}<br>`;
        novocarro.innerHTML+=`Municao .......: ${veic.getMunicao()}`
    }
    novocarro.innerHTML +="<br>"
    novocarro.appendChild(apagar) 
    novocarro.innerHTML+="<p>"
    vcarro.appendChild(novocarro)
    const bot = novocarro.querySelector(`#id${vcarro.children.length-1}`)
    bot.addEventListener("click",(ela)=>{
        concessionaria.splice(ela.target.name,1);
        botao2.click()
    })
    
    
}
radio2.addEventListener("click",()=> {
    blinda.setAttribute("disabled","true");
    municao.setAttribute("disabled","true");
    blinda.value=0;
    municao.value=0;    
});

 radio1.addEventListener("click",()=> {
    blinda.removeAttribute("disabled");
    municao.removeAttribute("disabled");
})
botao2.addEventListener("click",()=>{
    vcarro.innerHTML="";
    concessionaria.map((ele)=>{
        if (ele["tipo"]==0){
            veiculo = new Militar(ele["nome"],ele["portas"])
            veiculo.setBlindagem(ele["blindagem"]);
            veiculo.setMunicao(ele["municao"]);
            veiculo.setCor(ele["cor"]);
        } else {
            veiculo = new Carro(ele["nome"],ele["portas"])
        }
        veiculo.setTipo(ele["tipo"])
        listaVeiculo(veiculo);
    })    
})

class Jogador{
    constructor(nome){
    this.nome=nome;
    this.agilidade=50;
    this.energia=100;}
    jogando = function(fadiga){
        this.energia = this.energia-fadiga;
    }
    atualiza = function(){
        const objv = {"Nome" : this.nome,"Agilidade": this.agilidade,"Energia" : this.energia}
        //console.table(this.nome);
        //console.table(this.agilidade);
        //console.table(this.energia);
        console.table(objv)
    }
}

const play1 = new Jogador("Ennio");
play1.atualiza()
play1.jogando(2);
play1.atualiza()
Jogador.prototype.pontos= 90;
Jogador.prototype.terrento=function(tipo){
    this.agilidade -=tipo;
}
play1.terrento(4)
console.log(play1)
play1.atualiza()
console.log(play1.agilidade)

