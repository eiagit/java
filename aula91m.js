const teste = ["Mergulho","ciclismo","surf","skate","Patins","ping-pong","Volley","Tennis","Airsoft","aeroModelismo","Beach Tennis","Frescobol","motocicismo"];
const meus_esportes = JSON.stringify(teste);
export {teste,meus_esportes}
function agua(){ 
    return [teste[0],teste[2]]
}
export {agua};
class Esporte{
    static esportes = ["Mergulho","ciclismo","surf","skate","Patins","ping-pong","Volley","Tennis","Airsoft","aeroModelismo","Beach Tennis","Frescobol","motocicismo"]; 
    constructor(){};
    static getTodosEsportes=()=>{
        return this.esportes;

    }
    static getEsporte=(i_esporte)=>{
        return this.esportes[i_esporte]
    }
    static addEsporte=(novoEsporte)=>{
        this.esportes.push(novoEsporte)
    }
    static limpaEsportes=()=>{
        this.esportes=[];
    }
    static apagaumEsporte=(i_esporte)=>{
        this.esportes.pop(i_esporte)
    }
}
export {Esporte};