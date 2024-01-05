import {agua as esp_nautico,teste,meus_esportes} from "./aula91m.js";
import {Esporte as f_esporte} from "./aula91m.js";
const objetos = document.querySelector(".objetos");
const espor = document.querySelector("#esportes");
const func = document.querySelector("#funcao");
const simb = document.querySelector("#simbol")
const computador ={
    cpu : "i9",
    ram :"64Gb",
    hd : "4Tb",
    tab : function(){
        return `<tr><td>${this.cpu}</td><td>${this.ram}</td><td>${this.hd}</td></tr>`
    }
}
const computadores=[
    {
        cpu : "i9",
        ram :"64Gb",
        hd  : "4Tb",
        tab : function(){
            return `<tr><td>${this.cpu}</td><td>${this.ram}</td><td>${this.hd}</td></tr>`
        }
    },
    {
        cpu : "i7",
        ram :"32Gb",
        hd : "2Tb",
        tab : function(){
            return `<tr><td>${this.cpu}</td><td>${this.ram}</td><td>${this.hd}</td></tr>`
        }
    },
    {
        cpu : "i5",
        ram :"16Gb",
        hd : "1Tb",
        tab : function(){
            return `<tr><td>${this.cpu}</td><td>${this.ram}</td><td>${this.hd}</td></tr>`
        }
    },
]

const tab = JSON.stringify(computadores);
const tabe = document.createElement("table");
tabe.setAttribute('border','1px');
tabe.setAttribute("cols","3");
tabe.innerHTML +='<tr><th>Computador</th><th>Memória</th><th>HD</th></tr>';
computadores.map((ele)=>{
    tabe.innerHTML += ele.tab();
});
tabe.innerHTML +='</table>';
objetos.appendChild(tabe)

const espo = document.createElement("table");
espo.setAttribute('border','1px');
espo.setAttribute("cols","1");
espo.innerHTML +='<tr><th>Esportes</th></tr>';
teste.map((ele)=>{
    espo.innerHTML += "<TR><Td>"+ele+"</td></tr>";
});
espor.appendChild(espo)


const c1 = Object.assign({},computadores[0]);
const c2 = Object.assign({},computadores[0].hd,computadores.cpu,computadores.ram)
const c3 = Object.create(computadores);
c3[0].cpu='i10';
c3[0].ram='128';
c3[0].hd='10Tb';
const ncom0 = document.createElement("td");
ncom0.innerHTML=c3[0].cpu;
const ncom1 = document.createElement("td");
ncom1.innerHTML=c3[0].ram;
const ncom2 = document.createElement("td");
ncom2.innerHTML=c3[0].hd;

tabe.appendChild(ncom0)
tabe.appendChild(ncom1)
tabe.appendChild(ncom2)
console.log(c3);
console.log(esp_nautico());
console.log(f_esporte.addEsporte("Arquerismo"));
f_esporte.esportes.sort().map((ele)=>{
    func.innerHTML +=ele+'<br>'
})

// teoria de Objetos Symbol

class Atividades{
    constructor(nome){
        this.nome = nome;
        this.id=Symbol(nome)
    }
}

const atv = [];
teste.map((ele)=>{
    atv.push(new Atividades(ele))
})
simb.innerHTML = "<label><h3> Exercício de Symbol()</h3><br><label>"
atv.map((ele)=>{
    simb.innerHTML += "nome = "+ele.nome+' , id= '+typeof(ele.id)+", Description = "+ele.id.description+"<br>"
})

const nome = Symbol();
const obj={
    [nome] : "Ennio",
    endereco : "Rua José Ferreira sobrinho",
    email : "eiainfo99@outlook.com"
}

console.log(obj)
console.log(obj[nome])