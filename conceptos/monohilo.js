console.log("hola mundo"); 
let i= 0; 

setInterval(function (){
    console.log(i);
    i++; 
    console.log("sigo activo"); 

    if (i === 5){
        console.log("forzar error"); 
        var a = 3 +z; 
    }

}, 1000); //pendiente de los errores que puedan parar la ejecución 

console.log("segunda instrucción"); 