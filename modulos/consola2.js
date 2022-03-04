function function1(){
    console.group("Función 1"); 
    console.log("esto es función1");
    console.log("esto igual, función1");
    function2();
    console.groupEnd("Función 1"); 

}

function function2(){
    console.group("Función 2");
    console.log("ahora estamos en la función 2")

    console.groupEnd("Función 2");

}
console.log("empezamos"); 
function1(); 

//console.count("veces"); cuenta la cantidad de veces y con console.countReset("veces"); reinicia el conteo
