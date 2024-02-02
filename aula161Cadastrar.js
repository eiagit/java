//const meid = document.querySelector('#meId')
const meNome = document.querySelector('#meNome')
const meTelefone = document.querySelector('#meTelefone')
const meEmail = document.querySelector('#meEmail')
const meNascimento = document.querySelector('#meNascimento')
const btnInserir = document.querySelector('#btnInserir')
const btnCancelar = document.querySelector('#btnCancelar')

meNome.focus()
btnInserir.addEventListener('click',(eve)=>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({"AGE_NOME": meNome.value,"AGE_TELEFO":meTelefone.value,"AGE_EMAIL":meEmail.value,"AGE_NASCIM":meNascimento.value});

    var requestOptions = {
      method: 'POST',
      mode : 'cors',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    const timeout = 2000
    setTimeout(() => {          
    fetch("http://127.0.0.1:3000/agenda", requestOptions)
      .then(response => response.text())
      .then(result => {console.log(result)
        reset()
      })
      .catch(error => console.log('error', error));
    }, timeout);      
})

btnCancelar.addEventListener('click',(eve)=>{
  reset()
})

const reset =()=>{
  meNome.value=''
  meTelefone.value=''
  meEmail.value=''
  meNascimento.value=''  
  meNome.focus()
}