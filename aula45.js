const maskedit1 = document.querySelector('#MaskEdit1');
const edit1_valor = maskedit1.value;
const btnadd = document.querySelector("#BitBtn1")
const btnrem = document.querySelector("#BitBtn2")
const btnsel = document.querySelector("#BitBtn3")
const addant = document.querySelector("#BitBtn4")
const adddep = document.querySelector("#BitBtn5")
const cursos = document.querySelector(".div_dir")
const selcur = cursos.querySelectorAll('.curso')
let contador = selcur.length
const listacursos = ['HTML','CSS','Java Script',"PHP","REACT","MySql","React Native"]

const cursoSelecionado=()=>{
const cursoS = [...cursos.querySelectorAll('.curso')]
let achei = null
cursoS.map((ele)=>{
    radfil = ele.classList.contains("selecionado")
    if( radfil==true)
    achei=ele
})
  return achei
}
btnsel.addEventListener("click",()=>{
    try  {
    const radsec =cursoSelecionado()
    
    alert(radsec.innerHTML)}
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
    const sele = cursoSelecionado()
    const novo = adicionar(maskedit1.value)
    cursos.insertBefore(novo,sele)  }
    catch{
        alert("Você deve selecionar um curso")
    }
})

adddep.addEventListener("click",()=>{
    try{
    const sele = cursoSelecionado().nextSibling
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
        const elediv = document.createElement('div')
        elediv.setAttribute("class", "curso")
        elediv.setAttribute("id", "div" + contador)
        elediv.setAttribute("name", "ndiv" + contador)
        cursos.appendChild(elediv)
        const elelab = document.createElement("Label")
        elediv.appendChild(elelab)
        elelab.innerHTML = this.nome
        elediv.addEventListener("click",()=>{
               const cursel = [...cursos.querySelectorAll('.curso')]
                cursel.map((ele,idm)=>{
                    ele.classList.remove("selecionado")
                })
                elediv.classList.add("selecionado")
        })
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