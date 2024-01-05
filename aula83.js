
const qt_obj = document.querySelector("#qt_obj");
const bt_add = document.querySelector("#bt_obj");
const bt_rem = document.querySelector("#bt_rem");
const nu_obj = document.querySelector("#nobj");
const disp = document.querySelector("#disp");

let disp_alt = disp.offsetHeight;
let disp_lar = disp.offsetWidth;
let bolas =[];
let nbolas=0;
class Bola{
    constructor(arrbola,displ){
        this.tamanho = Math.trunc(Math.random()*10)+10;
        this.cor_r = Math.trunc(Math.random()*255);
        this.cor_g = Math.trunc(Math.random()*255);
        this.cor_b = Math.trunc(Math.random()*255);
        this.cor = this.cor_r+','+this.cor_g+','+this.cor_b;
        this.nas_y = Math.trunc(Math.random()*disp_alt-this.tamanho);
        this.nas_x = Math.trunc(Math.random()*disp_lar-this.tamanho);
        this.vel_x= Math.trunc(Math.random()*2)+0.5;
        this.vel_y= Math.trunc(Math.random()*2)+0.5;
        this.dir_x=(Math.random()*10) > 5? 1 : -1;
        this.dir_y=(Math.random()*10) > 5? 1 : -1;
        this.arrbola = arrbola;
        this.displ = displ;
        this.id = Date.now()+'-'+Math.trunc(Math.random()*100000000);
        this.desenhar();
        this.controle=setInterval(this.controlar,10);
        this.eu = document.getElementById(this.id);
        nbolas++;
        nu_obj.value = nbolas;
    }
    pos_array=()=>{
        return this.arrbola.indexOff(this);
    }
    desenhar=()=>{
        const div = document.createElement("div");
        div.setAttribute('id',this.id);
        div.setAttribute('class',"bola");
        div.setAttribute('style',`left:${this.nas_x}px;top:${this.nas_y}px;width:${this.tamanho}px;height:${this.tamanho}px;background-color:rgb(${this.cor})`);
        this.displ.appendChild(div);

    }
    remover=()=>{
        clearInterval(this.controle);
        bolas=bolas.filter((b)=>{
            if(b.id!=this.id){
                return b;
            }
        })
        this.eu.remove();
        nbolas--;
        nu_obj.value = nbolas;        
    }
    colisao=()=>{
        if(this.nas_x+this.tamanho>disp_lar){
            this.dir_x=-1;
        }
        if(this.nas_x<=0){
            this.dir_x=1;
        }        
        if(this.nas_y+this.tamanho>disp_alt){
            this.dir_y=-1;
        }
        if(this.nas_y<=0){
            this.dir_y=1;
        }                
    }
    controlar=()=>{
        this.colisao();
        this.nas_x+=this.vel_x*this.dir_x;
        this.nas_y+=this.vel_y*this.dir_y;
        this.eu.setAttribute('style',`left:${this.nas_x}px;top:${this.nas_y}px;width:${this.tamanho}px;height:${this.tamanho}px;background-color:rgb(${this.cor})`)
        if(this.nas_x>disp_lar || this.nas_y>disp_alt){
            this.remover();
        }
    }
}

window.addEventListener("resize",(ele)=>{
    disp_alt = disp.offsetHeight;
    disp_lar = disp.offsetWidth;
})

bt_add.addEventListener("click",(ele)=>{
    const bolinhas = qt_obj.value;
    for(a=0;a<bolinhas;a++){
        bolas.push(new Bola(bolas,disp));
    }
})
bt_rem.addEventListener("click",(ele)=>{
   bolas.map((ele)=>{
    ele.remover()
   }) 
})