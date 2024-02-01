class DataGrid{

static campoRetorno = undefined;
static titulo = 'Janela Grid View';

static baseStyle =  'display: flex;'+
                    'justify-content: flex-start;'+
                    'align-items: flex-start;'+
                    'flex-direction: column;'
static titleStyle =  'display: flex;'
                    +'justify-content: flex-start;'
                    +'align-items: flex-start;'
                    +'flex-direction: row;'
                    +'background-color: rgb(206, 206, 206);'
                    +'border-radius: 5px 5px 0 0;'
                    +'width : 100%;'
                    +'padding:  5px 0 5px 0'
static lineStyle =  'display: flex;'
                    +'justify-content: flex-start;'
                    +'align-items: flex-start;'
                    +'flex-direction: row;'
                    +'width : 100%;'

static dataStyle =  'display: flex;'
                   +'justify-content: flex-start;'
                   +'align-items: flex-start;'
                   +'flex-direction: column;'
                   +'width : 100%'
static rodapeStyle =  'display: flex;'
                   +'justify-content: flex-start;'
                   +'align-items: flex-start;'
                   +'flex-direction: row;'
                   +'background-color: rgb(206, 206, 206);'
                   +'border-radius: 0px 0px 5px 5px;'
                   +'width : 100%;'
                   +'padding:  5px 0 5px 0'

static criaLista=(dgDados,dgData,dgDestino)=>{
    const doc = dgDestino.querySelector('#dgBase')
    if (doc) doc.remove()
    const documento = document.head

    const scriptIcons = document.createElement ('script')
    scriptIcons.setAttribute('type','module');
    scriptIcons.setAttribute('src','https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js')
    document.head.appendChild(scriptIcons)

    const stylelinha ='.dgvLinha:nth-child(odd){'+
    'background-color: rgb(241, 241, 241);}'+
    '.dgvLinha:hover{'+
    'background-color: rgb(210, 200, 200);'+
    'cursor: pointer;}'+
    '.dgvTitulos div, .dgvLinha div{'+
    'padding:  5px 0 5px 0;}'

    const styleLinha = document.createElement ('style')
    styleLinha.innerHTML+=stylelinha;
    documento.appendChild(styleLinha)

    const base = document.createElement('DIV')
    base.setAttribute('id','dgBase');
    base.setAttribute('class','dgBase');
    base.setAttribute('style',this.baseStyle)
    dgDestino.prepend(base);

    const titulo = document.createElement('DIV');
    titulo.setAttribute('id','dgTitulo');
    titulo.setAttribute('class','dgTitulo');
    titulo.setAttribute('style',this.titleStyle)
    base.appendChild(titulo);
    
    const dados = document.createElement('DIV');
    dados.setAttribute('id','dgData');
    dados.setAttribute('class','dgData');
    dados.setAttribute('style',this.dataStyle)
    base.appendChild(dados);

    const rodape = document.createElement('DIV');
    rodape.setAttribute('id','dgRodape');
    rodape.setAttribute('class','dgRodape');
    rodape.setAttribute('style',this.rodapeStyle)
    base.appendChild(rodape);    

    const dgHead = dgDados.campos;
    var dgBaseWidth = 0 ;// Largura da Base
    var somados=[]; // soma
    dgHead.map((dat,id)=>{
        const dgField = document.createElement('DIV');
        dgField.setAttribute('id','dgCampo'+id);
        dgField.setAttribute('class','dgCampo');
        const fildStyle ='display : flex ;'
                            +'width : '+dat.width+';'
                            +'align-items :flex-start !important;'
                            +'justify-content: '+dat.align+';'
        dgField.setAttribute('style',fildStyle);
        dgField.innerHTML=dat.titulo;
        titulo.appendChild(dgField);
        dgBaseWidth += parseInt(dgField.style.width)

        const dgRodape = document.createElement('DIV');
        dgRodape.setAttribute('id','dgRodape'+id);
        dgRodape.setAttribute('class','dgCampo');
        dgRodape.setAttribute('style',fildStyle);
        rodape.appendChild(dgRodape);
        
        somados[dgRodape.id]=0 /// cria o repositório da soma
    })

    
    if (!dgDados.funcoes.titulo.hide) {
        const dgFuncoesTitulo = document.createElement('DIV');
        dgFuncoesTitulo.setAttribute('id', 'dgCampo-1');
        dgFuncoesTitulo.setAttribute('class', 'dgCampo');
        const fildStyle = 'display : flex ;' 
            +'width : ' + dgDados.funcoes.titulo.width + ';' 
            +'align-items :flex-start;'
            +'justify-content :' + dgDados.funcoes.titulo.align + ';';
        dgFuncoesTitulo.setAttribute('style', fildStyle);
        dgFuncoesTitulo.innerHTML = dgDados.funcoes.titulo.nome;
        titulo.appendChild(dgFuncoesTitulo);
        dgBaseWidth += parseInt(dgFuncoesTitulo.style.width)

    }

    base.style.setProperty('width', dgBaseWidth+'px');
    rodape.style.setProperty('width', dgBaseWidth+'px');

    dgData.map((ele,id)=>{
        const linha = document.createElement('DIV');
        linha.setAttribute('id','dgLinha'+id);
        linha.setAttribute('class','dgvLinha');
        linha.setAttribute('style',this.lineStyle)
        dados.appendChild(linha);
        dgHead.map((chave, id) => {
            const dgDataField = document.createElement('DIV');
            dgDataField.setAttribute('id', 'dgData' + id);
            dgDataField.setAttribute('class', 'dgData');
            const fieldStyle = 'display : flex ;'
                + 'width : ' + dgDados.campos[id].width + ';'
                + 'align-items :flex-start;'
                + 'justify-content :' + dgDados.campos[id].align + ';';
            dgDataField.setAttribute('style', fieldStyle);

            var lineData = ele[chave.campo];
            if (chave.soma){
                somados['dgRodape'+id] += lineData;
            }
            if (chave.formato == 'date') {
                lineData = new Date(lineData)
                lineData = `${('0' + lineData.getDate()).slice(-2)}/${('0' + (parseInt(lineData.getMonth()) + 1)).slice(-2)}/${('0000' + lineData.getFullYear()).slice(-4)}`
            }
            if (chave.formato == 'monetario') {
                lineData = ele[chave.campo];
                lineData = lineData.toLocaleString(dgDados.local, { style: 'currency', currency: dgDados.moeda });
            }
            dgDataField.innerHTML = lineData;
            linha.appendChild(dgDataField);
        })
        if (!dgDados.funcoes.titulo.hide) {
            const dgvFuncoesIcones = document.createElement('DIV');
            dgvFuncoesIcones.setAttribute('id', 'funcoesIcones')
            dgvFuncoesIcones.setAttribute('class', "dgData")
            const iconStyle = 'display : flex ;'
                + 'width : ' + dgDados.funcoes.titulo.width + ';'
                + 'align-items : flex-start;'
                + 'justify-content :' + dgDados.funcoes.titulo.align + ';'
                ;
            dgvFuncoesIcones.setAttribute('style', iconStyle);
            linha.appendChild(dgvFuncoesIcones);

            const icons = Object.keys(dgDados.funcoes.icones);
            icons.forEach((eli) => {
                if (!dgDados.funcoes.icones[eli].hide) {
                    const dgvLinhaIv = document.createElement('ion-icon');
                    dgvLinhaIv.setAttribute('id', 'dgv' + eli)
                    dgvLinhaIv.setAttribute('name', dgDados.funcoes.icones[eli].name)
                    dgvLinhaIv.addEventListener('click', (eve) => {
                        const campo = document.querySelector('#dgData0');
                        this.campoRetorno = ele ;
                        dgDados.campoRetorno = linha.children ;
                        dgDados.funcoes.icones[eli].func()

                    })
                    dgvFuncoesIcones.appendChild(dgvLinhaIv);
                }
            })
        }
    });
    if (!dgDados.funcoes.rodape.hide) {
        dgHead.map((dat, id) => {
            if(dat.soma){
                var lineSoma = somados['dgRodape'+id];
                if (dat.formato == 'monetario') {
                    lineSoma = lineSoma.toLocaleString(dgDados.local, { style: 'currency', currency: dgDados.moeda })
                }                
                rodape.children['dgRodape'+id].innerHTML=lineSoma
            }
        })
    }
}

static hideLista=()=>{
    const doc = dgDestino.querySelector('#dgBase')
    if (doc) doc.remove()    
}

}

export {DataGrid}