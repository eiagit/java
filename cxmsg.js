class Cxmsg{
    static cor = "#888";
    static destino = null;
    static divmsg = null;
    static tipo = [null];
    static retorno =null;
    static executar =()=>{};
    static config=(config)=>{
        this.cor=config.cor
        console.log(this.cor)
    }
    
static show=(config,titulo,texto,tipo,executar)=>{
        this.destino = document.body;
        this.titulo  = titulo;
        this.texto = texto;
        this.tipo = tipo;
        this.executar=executar;
        this.cor=config.cor;
        this.boxmsg = document.createElement('div');
        const div_estilo=
            'display : flex;'+
            'justify-content :center;'+
            'align-items : center;'+
            'position : absolute;'+
            'top : 0px;'+
            'left : 0px;'+
            'width : 100%;'+
            'height : 100vh;'+
            'background-color : rgba(0,0,0,0.7);'+
            'z-index : 9099999999';
        this.boxmsg.setAttribute('id','div_msg');
        this.boxmsg.setAttribute('style',div_estilo);
        this.destino.prepend(this.boxmsg);
        
        const divcaixamsg = document.createElement('div');
        divcaixamsg.setAttribute('id','div_caixa');
        const div_caixa=
            'display : flex;'+
            'justify-content : flex-start;'+
            'align-itens : flex-start;'+
            'flex-direction : column;'+            
            'width : 300px;';
        divcaixamsg.setAttribute('style',div_caixa);
        this.boxmsg.appendChild(divcaixamsg);

        const divtitulomsg = document.createElement('div');
        divtitulomsg.setAttribute('id','div_titulo');
        const div_titulo=
            'display : flex;'+
            'justify-content : flex-start;'+
            'align-itens : center;'+
            'width : 100%;'+
            'border : 2px #fff solid;'+
            'border-radius : 8px 8px 0px 0px;'+
            'background-color : '+this.cor+';'+
            'color : #fff;'+
            'padding : 5px;';
        divtitulomsg.setAttribute('style',div_titulo);
        divtitulomsg.innerHTML='<p>'+this.titulo+'</p>';
        divcaixamsg.appendChild(divtitulomsg);            

        const divcorpomsg = document.createElement('div');
        divcorpomsg.setAttribute('id','div_corpo');
        const div_corpo=
            'display : flex;'+
            'justify-content : flex-start;'+
            'align-itens : center;'+
            'width : 100%;'+
            'border : 2px #fff solid;'+
            'background-color : #eee;'+
            'color : #000;'+
            'padding : 30px 5px;';
        divcorpomsg.setAttribute('style',div_corpo);
        divcorpomsg.innerHTML='<p>'+this.texto+'</p>';
        divcaixamsg.appendChild(divcorpomsg);

        const divbtnmsg = document.createElement('div');
        divbtnmsg.setAttribute('id','div_corpo');
        const div_btn=
            'display : flex;'+
            'justify-content : space-around;'+
            'align-itens : center;'+
            'width : 100%;'+
            'border : 2px #fff solid;'+
            'background-color : #aaa;'+
            'color : #000;'+
            'padding : 5px;';
        divbtnmsg.setAttribute('style',div_btn);
        divcaixamsg.appendChild(divbtnmsg);

        const sty_btn=
            'width : 70px;'+
            'border : 1px #fff solid;'+
            'border-radius : 6px;'+
            'padding : 3px'
            'cursor : pointer';
        this.tipo.map((tip,id)=>{
            if(tip=='mbok'){
                const btnok = document.createElement('input');
                btnok.setAttribute('id','btnok');
                btnok.setAttribute('type','Button');
                btnok.setAttribute('value','OK');
                btnok.addEventListener('click',()=>{
                    this.retorno="mrok";
                    this.hide();
                })
                btnok.setAttribute('style',sty_btn);
                divbtnmsg.appendChild(btnok);
            }
            if(tip=='mbnao'){
                const btnnao = document.createElement('input');
                btnnao.setAttribute('id','btnnao');
                btnnao.setAttribute('type','Button');
                btnnao.setAttribute('value','Não');
                btnnao.addEventListener('click',()=>{
                    this.retorno="mrnao";
                    this.hide();
                })
                btnnao.setAttribute('style',sty_btn);
                divbtnmsg.appendChild(btnnao);
}
            if(tip=='mbsim'){
                const btnsim = document.createElement('input');
                btnsim.setAttribute('id','btnsim');
                btnsim.setAttribute('type','Button');
                btnsim.setAttribute('value','Sim');
                btnsim.addEventListener('click',()=>{
                    this.retorno="mrsim";
                    this.hide();
                })
                btnsim.setAttribute('style',sty_btn);
                divbtnmsg.appendChild(btnsim);
            }
            if(tip=='mbcancela'){
                const btncancela = document.createElement('input');
                btncancela.setAttribute('id','btncancela');
                btncancela.setAttribute('type','Button');
                btncancela.setAttribute('value','Cancelar');
                btncancela.addEventListener('click',()=>{
                    this.retorno="mrcancela";
                    this.hide();
                })
                btncancela.setAttribute('style',sty_btn);
                divbtnmsg.appendChild(btncancela);
            }            

        })

    }
    static mr=()=>{
        return this.retorno
    }
    static hide=()=>{
        this.executar()
      this.boxmsg.remove();

    }
}

export {Cxmsg}