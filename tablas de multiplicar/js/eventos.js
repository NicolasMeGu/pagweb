function holayadios(){
    window.alert("hola ")
    window.alert("adios")
}
function myFunction() {
    alert("Regresa!");
}
//eventos
function mouseDown() {
    document.getElementById("myP").style.color = "red";
  }
  
  function mouseUp() {
    document.getElementById("myP").style.color = "blue";
  }


var bontonhola = document.getElementById("Hola");
bontonhola.onclick= holayadios;

var blur = document.getElementById("blur");
blur.onclick= myFunction;