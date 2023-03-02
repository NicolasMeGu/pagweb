function sumar(){
    var num_uno = Number(document.getElementById("num1").value);
    var num_dos = Number(document.getElementById("num2").value);
    var resultado = num_uno + num_dos;
    document.getElementById('resultado').value = resultado;
}
function restar(){
    var num_uno = Number(document.getElementById("num1").value);
    var num_dos = Number(document.getElementById("num2").value);
    var resultado = num_uno - num_dos;
    document.getElementById('resultado').value = resultado;
}
function multiplicar(){
    var num_uno = Number(document.getElementById("num1").value);
    var num_dos = Number(document.getElementById("num2").value);
    var resultado = num_uno * num_dos;
    document.getElementById('resultado').value = resultado;
}
function dividir(){
    var num_uno = Number(document.getElementById("num1").value);
    var num_dos = Number(document.getElementById("num2").value);
    var resultado = num_uno / num_dos;
    document.getElementById('resultado').value = resultado;
}
function coc(){
    var num_uno = Number(document.getElementById("num1").value);
    var num_dos = Number(document.getElementById("num2").value);
    var resultado = num_uno ^ num_dos;
    document.getElementById('resultado').value = resultado;
}
function raiz(){
    var num_uno = Number(document.getElementById("num1").value);
    var num_dos = Number(document.getElementById("num2").value);
    var resultado = num_uno + num_dos;
    document.getElementById('resultado').value = resultado;
}
function pot(){
    var num_uno = Number(document.getElementById("num1").value);
    var num_dos = Number(document.getElementById("num2").value);
    var resultado = num_uno + num_dos;
    document.getElementById('resultado').value = resultado;
}
function log(){
    var num_uno = Number(document.getElementById("num1").value);
    var num_dos = Number(document.getElementById("num2").value);
    var resultado = num_uno + num_dos;
    document.getElementById('resultado').value = resultado;
}
function ln(){
    var num_uno = Number(document.getElementById("num1").value);
    var num_dos = Number(document.getElementById("num2").value);
    var resultado = num_uno + num_dos;
    document.getElementById('resultado').value = resultado;
}
function sen(){
    var num_uno = Number(document.getElementById("num1").value);
    var num_dos = Number(document.getElementById("num2").value);
    var resultado = Math.sin(num_uno*Math.PI/180);
    document.getElementById('resultado').value = resultado;
}
function cos(){
    var num_uno = Number(document.getElementById("num1").value);
    var num_dos = Number(document.getElementById("num2").value);
    var resultado = Math.cos(num_uno*Math.PI/180);
    document.getElementById('resultado').value = resultado;
    
}
function tan(){
    var num_uno = Number(document.getElementById("num1").value);
    var num_dos = Number(document.getElementById("num2").value);
    var resultado = Math.tan(num_uno*Math.PI/180);
    document.getElementById('resultado').value = resultado;
}