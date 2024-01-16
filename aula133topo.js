const head = document.head;
const body = document.body;

const estilo = '<link rel="stylesheet" content="text/css" href="aula133topo.css" />';
head.innerHTML += estilo;

const topo = document.createElement("div");
topo.setAttribute('id','topo');
topo.setAttribute('class','topo');
body.prepend(topo)

const logo = 
    '<div id="logo" class="logo">'+
        '<img src="eia_cl.png" class="img"/>"'+
    '</div>';
const textoTitulo=  '<div id="titulo" class="titulo">'+

                    '</div>';
const textoCanto =  '<div id="canto" class="canto">'+
                    '<p> Data : 14/01/2024</p>'+
                    '<p> Hora : 08:18:00'+
                    '<p> Pag. : 1'+

                    '</div>';
topo.innerHTML+=logo+textoTitulo+textoCanto;
const titulo = document.querySelector('#titulo')
titulo.innerHTML='<p id="tituloTexto" class="tituloTexto"> Ennio´s Inteligência Artificial</p>'