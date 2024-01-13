const res = document.querySelector('#rec');
const btn = document.querySelector('#btn1');
const td = document.querySelector('#trtable');
const apk = '9242ced6e4314d1dac5f4e6ebdccd909'
//const apk = '82f1d37eaf55cda53e8e98b974f7d094'
const lat = '35.52';
const lon = '-0.11';
const part ='current'
//const endpoint=`https://api.openweathermap.org/data/2.5/fwi?lat=${lat}&lon=${lon}&appid=${apk}`
//const endpoint=`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${apk}`
//const endpoint=`https://api.openweathermap.org/data/2.5/forecast/daily?q=Bamenda&appid=${apk}`
//const endpoint='https://jsonplaceholder.typicode.com/todos/1'
const endpoint='https://makeup-api.herokuapp.com/api/v1/products.json?brand=revlon'
btn.addEventListener("click",()=>{
    apiret()
})

const apiret=()=>{
    fetch(endpoint).then(res=>res.json()).then(dados=>{
      setTimeout(() => {
            var htmlcode='';
            htmlcode = '<table ><tr><th>Maquiagem Nome</th><th>preco</th></tr>';
            var retorno=[...dados];
            retorno.map((ret,id)=>{
                htmlcode += '<tr>'
                htmlcode += '<td >'+ret.name+'</td>'
                htmlcode += '<td>'+ret.price+'</td>'
                htmlcode += '</tr>'
            })
            htmlcode +='</table>' 
            res.innerHTML=htmlcode

      }, 2000);
    })
}
console.log(endpoint)