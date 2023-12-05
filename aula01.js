console.log('Halow Word');
let a = ['antonio','ennio','de','jesus'];
console.log(a);
b=[...a];
console.log(b); 
for(n of a) console.log(n)
let x = 0;
// while(x<10) {
//     window.document.body.innerHTML += '<br>'+x;
//    // if(x=5) break;
//    console.log(x)
//     x=x+1;
//     window.document.write(x)
// }
// console.log('fim '+x)

// const cursos = ['HTML','CSS','JAVASCRIPT','PHYTON','REACT'];
// cursos.map((dados,index)=>{
//     console.log(`o Curoso ${dados} tem como índeice ${index}`)
// })
const cur=window.document.getElementsByTagName('div');
//cur=[...cur];
const vll=Array.prototype.map.call(cur,({innerHTML})=>innerHTML)
window.document.write(vll);