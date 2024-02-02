const meId = document.querySelector('#meId')
const meNome = document.querySelector('#meNome')
const meTelefone = document.querySelector('#meTelefone')
const meEmail = document.querySelector('#meEmail')
const meNascimento = document.querySelector('#meNascimento')
const maskedit1 = document.querySelector('#maskedit1');
const btnBusca = document.querySelector('#btnBusca');
const btnLimpar = document.querySelector('#btnLimpar');

const fetchApi=()=>{
    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        mode : 'cors'
      };

      const api ="http://127.0.0.1:3000/agenda/buscanome/?AGE_NOME="+maskedit1.value
        const result = fetch(api, requestOptions)
        .then(response =>response.json())
        .then(result =>{return result})
        .catch(error => console.log('error', error));
        return result;
}

btnBusca.addEventListener('click', async (eve)=>{
    eve.preventDefault()
    const result = await fetchApi();
          meId.value=result[0].AGE_ID
          meNome.value=result[0].AGE_NOME
          meTelefone.value=result[0].AGE_TELEFO
          meEmail.value=result[0].AGE_EMAIL
          var lineData = new Date(result[0].AGE_NASCIM)
          lineData = `${('0'+lineData.getDate()).slice(-2)}/${('0'+(parseInt(lineData.getMonth())+1)).slice(-2)}/${('0000'+lineData.getFullYear()).slice(-4)}`
          meNascimento.value=lineData
})

btnLimpar.addEventListener('click',(eve)=>{
  reset()
})
const reset =()=>{
  meId.value=''
  meNome.value=''
  meTelefone.value=''
  meEmail.value=''
  meNascimento.value=''  
  maskedit1.focus()
}