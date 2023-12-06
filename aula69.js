
class Carro{
    constructor(nome,tipoMotor){
        this.nome = nome;
        this.motor = new Motor(tipoMotor);
        switch(tipoMotor){
            case 0 : this.velmax=140;break;
            case 1 : this.velmax=180;break;
            case 2 : this.velmax=220;break;
            case 3 : this.velmax=250;break;
            case 4 : this.velmax=300;break;
            default : this.velmax=0;break;
        }
        this.velmax += this.motor.turbo;
    }
    info(){
       const dados = {
       "nome ...:":this.nome,"Motor .:":this.motor,"Velocidade .:":this.velmax
       }
        console.table(dados)
    } 
    
}

class Motor{
    constructor(turbo){
        switch(turbo){
            //default : this.turbo =0;
            case 0 : this.turbo = 30;break;
            case 1 : this.turbo =50;break;
            case 2 : this.turbo =70;break;
            case 3 : this.turbo =90;break;
            case 4 : this.turbo =120;break;
            
        } 
    }
}

class CarroEspecial extends Carro{
    constructor(turbo){
        super("Buble Bee",turbo)
        this.typinfo = 1
        this.turbo=turbo
        if (this.turbo==5) this.velmax =380+this.motor.turbo;
        
    }
    info(){
        if (this.typinfo==0){
            super.info()
        } else{
        console.log(`Nome .........:${this.nome}`);
        console.log(`Turbo .........:${this.motor.turbo}`);
        console.log(`Velocidade Max.:${this.velmax}`);}
    }
}

c1 = new Carro("Logan",2);
c2 = new CarroEspecial(4);
c2.typinfo=0
c2.info()