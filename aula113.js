const px=document.querySelector("#px")
const py=document.querySelector("#py")
const wi=document.querySelector("#wi")
const hi=document.querySelector("#hi")
const qa=document.querySelector("#div_1")
const qv=document.querySelector("#div_2")

const qab=qa.getBoundingClientRect()
const qvb=qv.getBoundingClientRect()
qa.accessKey="x"
qv.accessKey="m"
qv.title ="Ennio"
console.log(qa)
const mostra=(qxb)=>{
    px.innerHTML="Pos X :"+parseInt(qxb.x);
    py.innerHTML="Pos Y :"+parseInt(qxb.y);
    wi.innerHTML="Larguara : "+parseInt(qxb.width);
    hi.innerHTML="Altura : "+parseInt(qxb.height);
}
qa.addEventListener("click",()=>{
   mostra(qab)
})
qv.addEventListener("click",()=>{
    mostra(qvb)
})
