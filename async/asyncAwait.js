//asincronas con async delante de la función 

async function hola(nombre, miCallback){ //le puedo pasar mas parametros 
    return new Promise(function(resolve, reject){
        console.log("hola soy una función asincrona"); 
        setTimeout(function(){
            console.log("hola" + nombre); 
            resolve(nombre);
        }, 1800);

    }); //va a tener un callback

}

async function hablar(nombre){
    return new Promise((resolve,reject) =>{
        setTimeout(function(){
            console.log("conversación"); 
            //resolve(nombre);
            resolve("hay un error");   
        });
    });


}

async function adios(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log("adios", nombre); 
            resolve();
        },1000); 

    });

}

async function manin (){
    let nombre = await hola(", moises"); 
    await hablar(); 
    await hablar(); 
    await hablar(); 
    await adios(nombre);  //convertir las promesas en procesos que aparentemente son sincronas 
    console.log("termina");
}
console.log("empezamos");
manin(); 

//asincronas como si fueran sincronas 

