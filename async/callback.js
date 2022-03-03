function soyAsincrona(miCallback){
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

