const btn = document.querySelector("#btn1");

btn.addEventListener("click",()=>{
    const tabela = document.getElementById("div_mae").innerHTML;
    console.log(tabela)
    let stilo = '<style>';
    stilo +='table {width:100%;font:25px Calibri;}';
    stilo +='table,th,td {border: 2px #888 solid;border-collapse:collapse;}';
    stilo +='padding: 4px 8px; text-align : center;';
    stilo += '</style>'

    const win = window.open('','','height=700px,width=700px');

    win.document.write('<html>');
    win.document.write('<head>');
    win.document.write('<title> Ennios Inteligência Artificial </title>');
    win.document.write(stilo);
    win.document.write('</head>');
    win.document.write('<body>');
    win.document.write(tabela);
    win.document.write('</body>');
    win.document.write('</html>');

    win.print()
})