//const { response } = require("express")

let livros = []
const endpointDaAPI = 'db.json'
async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI)
    livros = await res.json()
    console.table(livros)
}
//const ele = "file:///D:/PLA/CFG/db.json"
const ele ="http://localhost:5500/db.json"
fetch(ele).then((response)=>{
    response.json().then((usuarios)=>{
        console.log(usuarios)
    })
})



/*
var myhendler = new Handlers();
myhankler.append('Content-Type','text/plain;charset=iso-8859-1');
var fr = new FileReader();
const [file] = document.querySelector("input[type=file]").files
//const [local] = new File("read:null", "D:/PLA/CFG/CONFIG.JSO", [])
const conteudo = document.querySelector("#conteudo")
conteudo.innerText = fr.result
const resul = fr.result
fr.readAsText(file)
fr.onload=()=> {
    //console.log(fr.result);
  }
console.log(resul)
console.log(fr)

function previewFile() {
    const content = document.querySelector(".content");
    const [arquivo] = document.querySelector("input[type=file]").files;
    const reader = new FileReader();
  
    reader.addEventListener(
      "load",
      () => {
        // this will then display a text file
        conteudo.innerText = reader.result;
      },
      false,
    );
  
    if (arquivo) {
      reader.readAsText(arquivo);
    }
  }
  
  */