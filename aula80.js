const dados = document.querySelector("#mat");
dados.innerHTML = Math.trunc(Math.random()*20);
const ole = document.querySelector("#o_esq");
const old = document.querySelector("#o_dir");
const olhos =[...document.querySelectorAll('.olho')];

let m_x = 0;
let m_y = 0;

window.addEventListener('mousemove',(ele)=>{
    m_x = ele.clientX;
    m_y = ele.clientY;
    const rot = Math.atan2(m_y,m_x) * 180 / Math.PI;
    olhos.forEach((o)=>{
        o.style.transform="rotate("+rot+"deg)";
    })
})
