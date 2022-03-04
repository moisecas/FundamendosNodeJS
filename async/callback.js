function soyAsincrona(miCallback){ //le puedo pasar mas parametros 
    console.log("hola soy una función asincrona"); 
    setTimeout(function(){
        console.log("estoy siendo asincrona"); 
        miCallback();
    }, 1000);
}
console.log("iniciando proceso"); 
soyAsincrona(function (){
    console.log("terminando proceso");
}); 


// setTimeout se ejecuta una sola vez. Si necesita ejecuciones repetidas, utilice setInterval () en su lugar
//callback En programación de computadoras, una devolución de llamada, también conocida como función "call-after", es cualquier referencia al código ejecutable que se pasa como argumento a otro código; se espera que otro código vuelva a llamar
