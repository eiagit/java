import {contatos} from "./aula97m.js"

let contato={
    getTodosContato: function(){
        return contatos;
    },
    getContato : function(i_contato){
        return  contatos[i_contato];
    },
    postContato : function(novoContato,destinoDom){
        contatos.push(novoContato);
        const div = document.createElement("div");
        div.setAttribute("class","dado");
        div.setAttribute("id",Date.time);
        const p_nome = document.createElement("p");
        p_nome.innerHTML="Nome.:"+novoContato.i_nom;
        const p_telefone = document.createElement("p");
        p_telefone.innerHTML="Telefone.:"+novoContato.i_tel;
        const p_email = document.createElement("p");
        p_email.innerHTML="Email.:"+novoContato.i_ema;
        div.appendChild(p_nome);
        div.appendChild(p_telefone);
        div.appendChild(p_email);
        destinoDom.appendChild(div);
    },
    dropContato :function(idcontato){
        contatos.splice(idcontato,1);
        document.querySelector("#db").innerHTML="";
        this.addContatos(undefined,document.querySelector("#db"))

    },
    addContatos : function(novoContato,destinoDom) {
        if(novoContato!=undefined) {contatos.push(novoContato)};
        
        contatos.map((ele,eid) => {
            const div = document.createElement("div");
            div.setAttribute("class", "dado");
            div.setAttribute("id", Date.time);
            const p_nome = document.createElement("p");
            const img = document.createElement('img');
            img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvM_LCfnYrmdMWrYdKbROVxPwb0cEAwXpnGA&usqp=CAU');
            img.setAttribute('style', "width : 30px")
            img.setAttribute("class","img");
            img.setAttribute("id",eid);
            div.appendChild(img)
            img.addEventListener("click",()=>{
                this.dropContato(eid)
            })
            p_nome.innerHTML += "Nome.:" + ele.i_nom;
            const p_telefone = document.createElement("p");
            p_telefone.innerHTML = "Telefone.:" + ele.i_tel;
            const p_email = document.createElement("p");
            p_email.innerHTML = "Email.:" + ele.i_ema;
            div.appendChild(p_nome);
            div.appendChild(p_telefone);
            div.appendChild(p_email);
            destinoDom.appendChild(div);
        })
    }

}

export default contato;
