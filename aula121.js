const edit = document.querySelector('#me_edit1')
const para = document.querySelector('#para')
const btn = document.querySelector('#btn_01')

btn.addEventListener("click",(eve)=>{
window.localStorage.setItem('digitado',edit.value)
console.log(localStorage.getItem("digitado"))
})
let num = 10;
window.localStorage.setItem("numero",num)
console.log(localStorage.getItem("numero"))
window.localStorage.clear()
