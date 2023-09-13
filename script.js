//alert("Hola este es mi Javascript")
//Variables

//let nombre = "Martha";
//nombre = "Maria";

//var nombre1 = "Martha";

//const nombre2 = "Martha";
//nombre2 = "maria"

//las mas usadas son let y const

//console.log(nombre);
//console.log(nombre1);
//console.log(nombre2);

//let nombre = "Juver";

//console.log(nombre)

let contenidoTitulo = "JUVER";

let titulo = document.querySelector(".logo");
titulo.innerHTML = contenidoTitulo;

//CONDICIONALES

let textoTitulo = titulo.innerText;  //innerText es para ver cuál es el texto que se encuantra en el elemento que solicitamos

console.log(textoTitulo);

if(textoTitulo=="Nombre"){
    titulo.innerHTML = "otro"
} else{
    console.log("no se cumple")
}

//FUNCIONES

let nombre = "Juver";
let pais = "Colombia";
let ciudad = "Bogotá"

let parrafo = document.querySelector(".presentacion");

function cambiarPresentacion(nombre, pais){

    let contenido = `¡Hola! Soy ${nombre}, tengo 28 años, soy de ${pais}, actualmente vivo en ${ciudad} y quiero aprender programación porque quiero cambiar mi rumbo profesional, quiero hacer parte del cambio 
     que esta llevando el mundo desde hace algunas décadas. Sé que la profesión que quiero tomar de ahora en adelante me llevará a conocer personas y culturas interesantes. 
     A continuación presento una lista de lenguajes que quiero aprender`
     
     return contenido;
}

parrafo.innerText = cambiarPresentacion(nombre, pais, ciudad);


let menu_responsive = document.querySelector(".checkbtn");

menu_responsive.onclick = function (){
   barraNav = document.querySelector(".barra_nav");
   barraNav.classList.toggle("active");
};