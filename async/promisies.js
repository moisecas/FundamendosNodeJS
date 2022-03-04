//las promesas son una clase global y que puedo llamarlas, en lugar de ejecutar, devuelva la promesa
//promesas las podemos ir anidando, los callback no
function hola(nombre, miCallback){ //le puedo pasar mas parametros 
    return new Promise(function(resolve, reject){
        console.log("hola soy una función asincrona"); 
        setTimeout(function(){
            console.log("hola" + nombre); 
            resolve(nombre);
        }, 1800);

    }); //va a tener un callback

}

function hablar(nombre){
    return new Promise((resolve,reject) =>{
        setTimeout(function(){
            console.log("conversación"); 
            resolve(nombre);  
        });
    });


}

function adios(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log("adios", nombre); 
            resolve();
        },1000); 

    });

}

//--

console.log("iniciando el proceso");
hola("moises")
    .then(hablar)
    .then(adios)
    .then((nombre)=>   {
        console.log("terminado el proceso"); 
    })
    //siempre debe haber un catch para el manejo de errores
    .catch(error => {
        console.error("ha habido un error"); 
        console.error(error); 

    });

   


