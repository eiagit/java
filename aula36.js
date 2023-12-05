const div_dir = document.querySelector("#div_direita"); 
const div_esq = document.querySelector("#div_esquerda")
const bot_esq = [...div_esq.querySelectorAll('input')];
const bot_dir = [...div_dir.querySelectorAll('input')];
const bot_cop = document.querySelector("#id_copiar");
const bot_ret = document.querySelector('#id_retornar')


bot_cop.addEventListener("click",()=>{
    bot_esq.map((bot,idx)=>{
         if(bot.classList !="bt") {
//            div_dir.innerHTML += bot.outerHTML
            div_dir.appendChild(bot) 
            //botoes.removeChild(bot)
          }        
    })
})

bot_ret.addEventListener("click",()=>{
    bot_dirx = [...div_dir.querySelectorAll('input')];
    bot_dirx.map((bot,idx)=>{
         if(bot.classList !="bt") {
            div_esq.appendChild(bot) 
          }        
    })
})

bot_esq.map((bot,idx)=>{
    bot.addEventListener("dblclick",(com)=>{
       if(bot.classList=="bt") div_dir.appendChild(bot) 
    })
})

bot_esq.map((bot,idx)=>{
    bot.addEventListener("click",(com)=>{
       if(bot.classList=="bt") {bot.classList.add("selec") }
       else {bot.classList.remove('selec')};
    })

})