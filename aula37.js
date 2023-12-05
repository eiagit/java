const div_mae = document.querySelector('#div_esquerda')
const bot_mae = [...div_mae.querySelectorAll('.bt')]

/*console.log(div_mae.children)
console.log(div_mae.firstElementChild)
console.log(div_mae.lastElementChild)
console.log(div_mae.children[0])
console.log(document.getRootNode())
console.log(div_mae.ownerDocument)
/*
div_mae.addEventListener("click",()=>{
    console.log(bot_mae)
})
bot_mae.addEventListener("click",(eve)=>{
    eve.stopPropagation()
})*/

/*
const elemento=document.createElement('button')
elemento.setAttribute('class','bt')
elemento.setAttribute('id','id_basic')
elemento.setAttribute('name','idn_basic')
elemento.innerHTML='BASIC'
div_mae.appendChild(elemento)
*/

const elementos =['HTML','CSS','JAVA','PHP','MYSQL','BASIC']
bot_mae.map((elem,ide)=>{
    elem.innerHTML="ennio"
    div_mae.removeChild(elem)
})

elementos.map((elem,ide)=>{
    const nele=document.createElement('div')
    nele.setAttribute('class','bt')
    nele.setAttribute('id','id_'+elem.innerHTML)
    nele.setAttribute('name','idn_basic')
    nele.setAttribute('style','display: right;')
    nele.innerHTML=elem
    const icon_trash = document.createElement('img')
    icon_trash.setAttribute('id','img'+ide)
    icon_trash.setAttribute('src','./favicon.ico')
    icon_trash.setAttribute('width','18px')
    icon_trash.setAttribute('style','display : flex; margin-top : -16px ; margin-left : 20px')
    icon_trash.addEventListener("click",(evl)=>{
        //div_mae.removeChild(evl.pent')
        //div_mae.removeChild(evl)
        //icon_trash.parentNode.parentNode.removeChild(evl))
        div_mae.removeChild(evl.target.parentNode)
    })
    div_mae.appendChild(nele)
    nele.append(icon_trash)

})


