window.alert("BIENVENIDO A MI PRIMERA PAGINA WEB, ACÁ ENCONTRARÁS CON QUE LA PUDE REALIZAR");
x = 5;
y = 6;
let z = x + y;
document.write("la suma de: ",x," mas el numero: ",y," es igual a:",z)

/*funciones en javascript*/
/*se de calra la funcion con function */
/* se le pone le nombre y entre parentesis los argumentos */
function imprimir(){
    document.write("funcion imprimir")
}
imprimir();

/* variables  */
var number = 15

function square(number) {
    return number * number;
  }
square();

function operaciones(){
  document.write("<br>returns Euler's number",Math.E);
  document.write("<br>returns PI",Math.PI);
  document.write("<br>returns the square root of 2 ",Math.SQRT2);
  document.write("<br>returns the square root of 1/2",Math.SQRT1_2);
  document.write("<br>returns the natural logarithm of 2",Math.LN2);
  document.write("<br>returns the natural logarithm of 10",Math.LN10);
  document.write("<br>returns base 2 logarithm of E",Math.LOG2E);
  document.write("<br>returns base 10 logarithm of E",Math.LOG10E);
}
operaciones();