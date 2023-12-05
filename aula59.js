const e_nome =  document.querySelector("#nome");
const e_idade = document.querySelector("#idade");
const e_bot01 = document.querySelector("#bitbtn1");
const e_bot02 = document.querySelector("#bitbtn2");
const e_result = document.querySelector("#div_result")
const arquivo = [];

const Pessoa={
    nome : '',
    idade : '',
    getPnome:function(){
        return this.nome;
    },
    getPidade:function(){
        return this.idade;
    },
    setPidade:function(idade){
        this.idade = idade;
    },
    setPnome:function(nome){
        this.nome = nome;
    },
    gravaPessoa:function(){
        arquivo.push([this.nome,this.idade])
    },
    limpaDados:function(){
        const eresult = [...document.querySelectorAll(".dados")]
        eresult.map((ele)=>{
         e_result.removeChild(ele)
        })
    },
    mostraEntrada:function(nnome,nidade){
        const ediv = document.createElement("div");
        ediv.setAttribute("class","dados");
        const enome = document.createElement("p");
        enome.setAttribute("class","la");
        enome.innerHTML = "Nome .: "+nnome;
        const eidade = document.createElement("p");
        eidade.setAttribute("class","la");
        eidade.innerHTML = "Idade .: "+nidade;
        e_result.appendChild(ediv);
        ediv.appendChild(enome);
        ediv.innerHTML +="</p>"
        ediv.appendChild(eidade);
        ediv.innerHTML +="</p>"
    },
    listarTodos:function(){
        arquivo.map((ele)=>{
        this.mostraEntrada(ele[0],ele[1])
        })
    }    

}

class Gravar{
    constructor(nome,idade){
        this.nome=nome;
        this.idade=idade;
    }
    getNome(){
        return this.nome;
    }
    getIdade(){
        return this.idade;
    }
    setNome(nome){
        this.nome=nome;
    }
    setIdade(idade){
        this.idade=idade;
    }
    gravar(){
       arquivo.push([this.nome,this.idade]);
    }
    limpaDados(){
        const eresult = [...document.querySelectorAll(".dados")]
        eresult.map((ele)=>{
         e_result.removeChild(ele)
        })
    }
    mostraEntrada(nnome,nidade){
        const ediv = document.createElement("div");
        ediv.setAttribute("class","dados");
        const enome = document.createElement("p");
        enome.setAttribute("class","la");
        enome.innerHTML = "Nome .: "+nnome;
       // enome.innerText = "Nome .:"+nnome;
        const eidade = document.createElement("p");
        eidade.setAttribute("class","la");
        eidade.innerHTML = "Idade .: "+nidade;
        //eidade.innerText = "Idade .:"+nidade;
        e_result.appendChild(ediv);
        ediv.appendChild(enome);
        ediv.innerHTML += "<br>"
        ediv.appendChild(eidade);
    }
    listarTodos(){
        arquivo.map((ele)=>{
        this.mostraEntrada(ele[0],ele[1])
        })
    }

}

let registro = new Gravar()
const rpessoa = Pessoa;
e_bot01.addEventListener("doubleclick",()=>{
    registro.setNome(e_nome.value)
    registro.setIdade(e_idade.value);
    registro.gravar();
    registro.limpaDados();
    registro.mostraEntrada(e_nome.value,e_idade.value);
    e_nome.value="";
    e_idade.value="";
    e_nome.focus()
})
e_bot01.addEventListener("click",()=>{
    rpessoa.setPnome(e_nome.value)
    rpessoa.setPidade(e_idade.value);
    rpessoa.gravaPessoa();
    rpessoa.limpaDados();
    rpessoa.mostraEntrada(e_nome.value,e_idade.value);
    e_nome.value="";
    e_idade.value="";
    e_nome.focus()
})

e_bot02.addEventListener("click",()=>{
    registro.limpaDados()
    registro.listarTodos()
})