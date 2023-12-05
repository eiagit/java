const lista = document.querySelector("#maskedit1");
const arrai =[]
const busca = document.querySelector("#maskedit2");
const btnpes = document.querySelector("#bitbtn1");
const resultado = document.querySelector('#resultado')
const interador = document.querySelector("#bitbtn2")
const warrai = document.querySelector("#bitbtn3")
const limpar = document.querySelector("#bitbtn0")
const btnpop = document.querySelector("#bitbtn4")
const btnspl = document.querySelector("#bitbtn5")
lista.value=arrai
warrai.addEventListener("click",()=>{
   //arrai.push(busca.value) // acrescenta no ifinal
   arrai.unshift(busca.value) // acrescenta no início
   document.querySelector('#bitbtn0').click()
   novoItem(arrai)
   lista.value=arrai
})
btnpop.addEventListener("click",()=>{
  //  arrai.pop() // exclui no final
  arrai.shift(busca.value) // exclui mp omício
    lista.value=arrai
})
btnpes.addEventListener("click",()=>{
    if(busca.value !='') {
    achei = arrai.find((pegar)=>{
        return pegar.toUpperCase() === busca.value.toUpperCase()
    }) 
    if (achei != null) {
        resultado.innerHTML +="<Label class='la'>Encontrou :<la>"
    novoItem(achei)}
    else alert("Não Encontrado")
    }else alert("Digite um valor para a pesquisa")
})

interador.addEventListener("click",()=>{
    const it_valores=arrai[Symbol.iterator]()
    novoItem(it_valores.next().value)
    for (a=0;a<10;a++){
    novoItem(it_valores.next().value)
    }
})

function novoItem(valor){
    const novo = document.createElement("label")
    novo.setAttribute("class","la")
    novo.inerHTML=valor
    novo.innerText=valor
    novo.setAttribute("display","block")
    resultado.appendChild(novo)
}
limpar.addEventListener("click",()=>{
    const apagar = [...resultado.querySelectorAll(".la")]
        apagar.map((ele)=>{
        resultado.removeChild(ele)
     })
    novoItem("Resultado:")
})

let narr =[2,4]
const calk = [
    (val)=>{
        calr=0
        for(a of val){
            calr +=a
        }
        return calr
    },
    (val)=>{
        calr=1
        for(a of val){
            calr *=a
        }
        return calr
    },
    (val)=>{
        calr=0
        for(a of val){
            console.log(val)
        }
        
    }


]
// coleção Array
function arra_arrai(){
novoItem(calk[1](narr))}


// Coleção Mapa
let mapa = new Map()
let mapas = new Set()

btnspl.addEventListener("click",()=>{
   mapas.add(busca.value)
   mapas.forEach((ele)=>{
    novoItem(ele)  
   })
   const mymap = mapas.values()
   console.log(mymap)
   

/* programação do map
    const nmap = busca.value.split(",")
    mapa.set(nmap[0],nmap[1])
    novoItem(mapa.get(nmap[0]))  
    lista.value = mapa.keys() */

})

