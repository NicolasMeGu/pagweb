function holayadios(){
    window.alert("hola ")
    window.alert("adios")
}
function myFunction() {
    alert("Regresa!");
}


var bontonhola = document.getElementById("Hola");
bontonhola.onclick= holayadios;

var blur = document.getElementById("blur");
blur.onclick= myFunction;