const ws = document.querySelector("#ws");
const regx = document.querySelector("#regex");
let nome = new String("BtPlacar")
let completo =new String('Antonio Ennio de Jesus');
ws.innerHTML='Conteúdo da variável nome ="'+nome+'"<br>';
ws.innerHTML += 'CharAt(1) nome = ' + nome.charAt(1)+'<br>';
ws.innerHTML += 'Procur caractere Serch("ar") nome = ' + nome.search("ar")+'<br>';
ws.innerHTML += 'Último caractereCharAt(nome.length-1) nome = ' + nome.charAt(nome.length-1)+'<br>';
ws.innerHTML += 'Código AscII CharCodeAt(0) nome = ' + nome.charCodeAt(0)+'<br>';
ws.innerHTML += 'Concat nome = ' + nome.concat(" Ennio") +'<br>';
ws.innerHTML += 'Concat nome = ' + nome.concat([" Ennio","Italva"]) +'<br>';
ws.innerHTML += 'Busca na string nome.indexOf("t") = ' + nome.indexOf('t') +'<br>';
ws.innerHTML += 'Busca na string nome.indexOf("X") = ' + nome.indexOf('X') +'<br>';
ws.innerHTML += 'Busca na string nome.lastindexOf("c") = ' + nome.lastIndexOf('c') +'<br>';
ws.innerHTML += 'Comparação igual nome.localCompare("BtPlacar") = ' + nome.localeCompare('BtPlacar') +'<br>';
ws.innerHTML += 'Comparação diferente nome.localCompare("BtPlacarx") = ' + nome.localeCompare('BtPlacarx') +'<br>';
ws.innerHTML += 'Comparação contem nome.localCompare("BtPlaca") = ' + nome.localeCompare('BtPlaca') +'<br>';
ws.innerHTML += 'Busca e troca nome.localCompare("ar","BB") = ' + nome.replace('ar','BB') +'<br>';
ws.innerHTML += 'Corta string nome.slice(2,4) = ' + nome.slice(2,4) +'<br>';
ws.innerHTML += 'Array baseando na busca e core de uma caractere String("Antonio Ennio de Jesus").split(" ") = [' +String("Antonio Ennio de Jesus").split(' ') +']<br>';
ws.innerHTML += 'tudo nome.toUpperCase() = ' +nome.toUpperCase()+'<br>';
ws.innerHTML += 'tudo nome.toLoowerCase() = ' +nome.toLowerCase()+'<br>';
ws.innerHTML += 'valor do objeto nome.valueOf() = ' +nome.valueOf()+'<br>';
let numero = 10;
ws.innerHTML += 'Tipo da variavel Numero typof(numero)= ' +typeof(numero)+'<br>';
ws.innerHTML += 'Tipo da variavel Convertida em String typof(numero.tostring())= ' +typeof(numero.toString())+'<br>';
ws.innerHTML += 'Começa com ? nome.startwith("bt")= ' +nome.startsWith('bt')+'<br>';
ws.innerHTML += 'Termina com ? nome.startwith("bt")= ' +nome.endsWith('ar')+'<br>';
ws.innerHTML += 'Verifica substring nome.includes("ac")= ' +nome.includes('ac')+'<br>';
ws.innerHTML += 'Repete string nome.repeat(4)= ' +nome.repeat(4)+'<br>';
ws.innerHTML += 'Caractere do código AscII String.fromCodePoint(48)= ' +String.fromCodePoint(48)+'<br>';
ws.innerHTML += 'template string= ' +`O melhor placar para Beach Tennis ${nome}`+'<br>';

regx.innerHTML ="comleto = "+completo+'<br>';
regx.innerHTML += 'Regex case sensitive e não, completo.serch(/De/) '+completo.search(/De/)+' completo.serch(/De/i) '+completo.search(/De/i)+'<br>';
regx.innerHTML += 'Regex global, completo.serch(/e/) '+completo.match(/e/)+' completo.serch(/e/i) '+completo.match(/e/g)+'<BR>';
regx.innerHTML += 'Regex Replace, completo.replace(/ENNIO/,"Beto") '+completo.replace(/ennio/,"Beto")+' completo.replace(/ENNIO/i,"Beto") '+completo.replace(/ENNIO/i,"Beto")+'<BR>';
regx.innerHTML += 'Regex Padrões completo.match([eo]ig) '+completo.match(/[eo]/ig)+'<BR>';
regx.innerHTML += 'Regex Padrões Limitador completo.match([a-m|S]ig) '+completo.match(/[a-m|S]/ig)+'<BR>';
regx.innerHTML += 'Regex Padrões digits completo.match(/\d/) '+completo.match(/[\d]/ig)+'<BR>';
regx.innerHTML += 'Regex Padrões spaces completo.match(/\s/) '+completo.match(/\s/ig)+'<BR>';
regx.innerHTML += 'Regex Padrões quantificador completo.match(/n+/) '+completo.match(/n+/ig)+'<BR>';
regx.innerHTML += 'Regex Padrões quantificador completo.match(/ni*/) '+completo.match(/ni*/ig)+'<BR>';
