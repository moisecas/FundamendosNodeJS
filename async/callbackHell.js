function hola(nombre, miCallback){ //le puedo pasar mas parametros 
    console.log("hola soy una función asincrona"); 
    setTimeout(function(){
        console.log("hola" + nombre); 
        miCallback(nombre);
    }, 1800);
}

function hablar(callbackHablar){
    setTimeout(function(){
        console.log("conversación"); 
        callbackHablar(); 
    });

}

function adios(nombre,otroCallback){
    setTimeout(function(){
        console.log("adios", nombre); 
        otroCallback();
    },1000); 
}

function conversación(nombre, veces, callback){ //función recursiva 
    if (veces>=0){
        hablar(function(){
            conversación(nombre, --veces, callback);
        })
    }else{
        adios(nombre, callback); 
    }

}

//--

console.log("iniciando proceso"); 
hola("moises", function(nombre){
    conversación(nombre, 3,function(){
        console.log("proceso terminado"); 
    }); 
} );


//hola("moises", function (nombre){
    //hablar(function(){
        //adios(nombre, function(){
            //console.log("terminando proceso");
    
        //}); 

    //})

    
//}); 