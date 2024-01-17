class Login{
    static logado = undefined
    static matlogado = undefined
    static nomelogado = undefined
    static acessologado = undefined
    static estilocss = undefined
    static callback_ok = null
    static callback_naook = null
    static config = {
        cor : 'aac',
        img : 'eia_cl.png'
    }

    static login=(callback_ok,callback_naook,config = null)=>{
        if(config!=null){
            this.config=config
        }
        this.callback_ok=()=>{callback_ok()}
        this.callback_naook=()=>{callback_naook()}
        this.estilocss='.fundoLogin{display: flex;justify-content: center;align-items: center;width: 100%;height: 100%;position: absolute;top : 0px;left: 0px;background-color: rgba(0,0,0,.75);box-sizing: border-box;}'
        this.estilocss+='.baseLogin{display: flex;justify-content: center;align-items: stretch;box-sizing: inherit;}'
        this.estilocss+='.elementosLogin{display: flex;justify-content: center;align-items: flex-start;flex-direction: column;width: 50%;background-color: #eee;padding: 10px;border-radius: 10px 0 0 10px;box-sizing: inherit;}'
        this.estilocss+='.camposLogin{display: flex;justify-content: flex-start;align-items: flex-start;flex-direction: column;box-sizing: inherit;margin-bottom: 10px;}'
        this.estilocss+='.campolsLogin label{color: rgb(44, 44, 44);font-size: small;}'
        this.estilocss+='.camposLogin input{border-radius: 5px;padding: 5px;background-color: #fff;font-size: 15px;}'
        this.estilocss+='.botoesLogin{display: flex;justify-content: space-around;align-items: center;width: 100%;padding: 5px;box-sizing: inherit;}'
        this.estilocss+=`.botoesLogin input{cursor: pointer;background-color: #${this.config.cor};border : 1px #000 solid;border-radius: 5px;padding: 5px;width: 80px;margin-top: 5px;box-sizing: inherit;}`
        this.estilocss+='.logoLogin{display: flex;justify-content: center;align-items: center;width: 50%;background-color: #bbb;padding: 10px;border-radius: 0 10px 10px 0;box-sizing: inherit;}'
        this.estilocss+='.logoLogin img{width: 80%;box-sizing: inherit;}'
        const stylecss = document.createElement('style');
        stylecss.setAttribute('rel','styesheet')
        stylecss.setAttribute('id','estilocss')
        stylecss.setAttribute('content','text/css')
        stylecss.innerHTML=this.estilocss;
        document.head.appendChild(stylecss);

        const fundoLogin = document.createElement('div')
        fundoLogin.setAttribute('id','fundoLogin')
        fundoLogin.setAttribute('class','fundoLogin')
        document.body.prepend(fundoLogin)

        const baseLogin = document.createElement('div')
        baseLogin.setAttribute('id','baseLogin')
        baseLogin.setAttribute('class','baseLogin')
        fundoLogin.appendChild(baseLogin)

        const elementosLogin = document.createElement('div')
        elementosLogin.setAttribute('id','elementosLogin')
        elementosLogin.setAttribute('class','elementosLogin')
        baseLogin.appendChild(elementosLogin)

        const elementosUser = document.createElement('div')
        elementosUser.setAttribute('class','camposLogin')
        elementosLogin.appendChild(elementosUser)        

        const labelUser = document.createElement('label')
        labelUser.innerHTML='User Name'
        elementosUser.appendChild(labelUser)

        const f_userName = document.createElement('input')
        f_userName.setAttribute('id','f_userName')        
        f_userName.setAttribute('type','text')
        f_userName.setAttribute('placeholder','email')
        elementosUser.appendChild(f_userName)        

        const elementoPassword = document.createElement('div')
        elementoPassword.setAttribute('class','camposLogin')
        elementosLogin.appendChild(elementoPassword)        

        const labelPassword = document.createElement('label')
        labelPassword.innerHTML='Password'
        elementoPassword.appendChild(labelPassword)

        const f_password = document.createElement('input')
        f_password.setAttribute('id','f_password')        
        f_password.setAttribute('class','f_password')
        f_password.setAttribute('type','password')
        f_password.setAttribute('placeholder','Senha')
        elementoPassword.appendChild(f_password) 


        const botoesLogin = document.createElement('div')
        botoesLogin.setAttribute('class','botoesLogin')
        elementosLogin.appendChild(botoesLogin)        

        const btnLogin = document.createElement('input')
        btnLogin.setAttribute('id','btnLogin')        
        btnLogin.setAttribute('type','button')
        btnLogin.setAttribute('value','Login')
        btnLogin.addEventListener("click",(evt)=>{
            this.verificaLogin()
        })
        botoesLogin.appendChild(btnLogin)

        const btnCancel = document.createElement('input')
        btnCancel.setAttribute('id','btnCancel')        
        btnCancel.setAttribute('type','button')
        btnCancel.setAttribute('value','Cancelar')
        btnCancel.addEventListener("click",(evt)=>{
            this.fechar()
        })
        botoesLogin.appendChild(btnCancel)

        const logoLogin = document.createElement('div')
        logoLogin.setAttribute('class','logoLogin')
        baseLogin.appendChild(logoLogin)

        const  imgLogin= document.createElement('img')
        imgLogin.setAttribute('id','imgLogin')  
        imgLogin.setAttribute('title','Ennio´s Integencia Artrtificial')
        imgLogin.setAttribute('src',this.config.img)  
        imgLogin.setAttribute('class','imgLogin')  
        logoLogin.appendChild(imgLogin)

    }
    static fechar=() =>{
        const fundoLogin =document.querySelector('#fundoLogin')
        fundoLogin.remove()
        const estilocss =document.querySelector('#estilocss')
        estilocss.remove()        
    }

    static verificaLogin=()=>{
        const mat = document.querySelector('#f_userName').value
        const pas = document.querySelector('#f_password').value
        const  endpoint="aula141api.json"        
        setTimeout(() => {
            fetch(endpoint)
                .then(res => res.json())
                .then(res => {
                    if (res!=null) {
                        this.logado = true
                        this.matlogado = mat
                        this.nomelogado = res['nome']
                        this.acessologado = res["acesso"]
                        console.log(res)
                        this.callback_ok()
                        this.fechar()
                    } else{
                        this.callback_naook()
                    }
           }, 1000);
        })


    }
}

export {Login}