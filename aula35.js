function chtml(){
    corpo=window.document.querySelector('body');
    corpo.innerHTML += "ennio<br>"
    const ohtml=document.querySelectorAll('input')
    const botoes = [...ohtml]
    botoes.map((btn,id)=>{
        btn.addEventListener("mouseover",()=>{
            btn.style.color="white"
            btn.style.backgroundColor= "rgb(252, 116, 66)"
        })
        btn.addEventListener("mouseout",()=>{
            btn.style.color="rgb(252, 116, 66)"
            btn.style.backgroundColor= "transparent"
        })
        btn.addEventListener("click",(evn)=>{
            const neve = evn.target
            neve.style="border-color:white"
            if(neve.name =='NBitbtn01') alert("clikey")
        })
    })
    

    
}
chtml();
