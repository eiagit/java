const maskedit1 = document.querySelector('#MaskEdit1');
const edit1_valor = maskedit1.value;
const btnadd = document.querySelector("#BitBtn1")
const btnrem = document.querySelector("#BitBtn2")
const btnsel = document.querySelector("#BitBtn3")
const addant = document.querySelector("#BitBtn4")
const adddep = document.querySelector("#BitBtn5")
const cursos = document.querySelector(".div_dir")
const radcur = cursos.querySelectorAll('.radio')
let contador = radcur.length
const listacursos = ['HTML','CSS','Java Script',"PHP","REACT","MySql","React Native"]

const radioSelecionado=()=>{
const radios = [...cursos.querySelectorAll('.radio')]
const radfil = radios.filter((ele,idm,arr)=>{
        return ele.checked
})
    return radfil[0]
}
btnsel.addEventListener("click",()=>{
    try  {
    const radsec =radioSelecionado()
    
    alert(radsec.parentNode.textContent)}
    catch(erro){
        alert("Não Existe nenhum Curso Selecionado")    
    } 
})  
btnrem.addEventListener("click",()=>{
    const radsec = radioSelecionado()
    if (radsec != undefined){
        cursos.removeChild(radsec.parentNode)
    
    }else
    alert("Não Existe nenhum Curso Selecionado para apagar")    
    })

btnadd.addEventListener("click",()=>{

       adicionar(maskedit1.value)
    

})

addant.addEventListener("click",()=>{
    try{
    const sele = radioSelecionado().parentNode
    const novo = adicionar(maskedit1.value)
    cursos.insertBefore(novo,sele)  }
    catch{
        alert("Você deve selecionar um curso")
    }
})

adddep.addEventListener("click",()=>{
    try{
    const sele = radioSelecionado().parentNode.nextSibling
    const novo = adicionar(maskedit1.value)
    cursos.insertBefore(novo,sele)   
    }
    catch{
      alert("você deve selecionar um curso ")
    }
})

const adicionar=(nome)=>{
    this.nome = nome
    if ( nome!= ''){
        
        contador++
        const radios = [...cursos.querySelectorAll('.radio')]
        const elediv = document.createElement('div')
        elediv.setAttribute("class", "curso")
        elediv.setAttribute("id", "div" + contador)
        elediv.setAttribute("name", "ndiv" + contador)
        cursos.appendChild(elediv)
        const elelab = document.createElement("Label")
        elediv.appendChild(elelab)
        elelab.innerHTML = this.nome
        const elerad = document.createElement("input")
        elerad.setAttribute("type", "radio")
        elerad.setAttribute("id", "rad" + contador)
        elerad.setAttribute("name", "nradio")
        elerad.setAttribute("class", "radio")
        elerad.setAttribute("value", "g1")
        elediv.appendChild(elerad)
        return elediv
    } else {
        alert("você deve digitar um nome")
        return null
    }
}

listacursos.map((ele,idm,arr)=>{

    adicionar(ele)
    
})

//parentNode
//childNode
//firstChild
//lastChild
//nextSibling
//previusSibling