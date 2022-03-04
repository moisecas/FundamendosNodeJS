//modulos que hay en nodejs, vamos a usarlas. 
//console.log(global); //todos los modulos guardados, no se hace en proyectos en producción 

//let i = 0
//let intervalo = setInterval(function(){
    //console.log("hola");
    //if (i===3){
        //clearInterval(intervalo);
    //}
    //i++;

    
//}, 1000); //

setImmediate(function(){
    console.log("hola"); 

});

//require para acceder a todos los modulos 
//console.log(process); variables de entorno
//console.log(__dirname); ubicación o fichero __filename 
//es mejor usar modulos y no variables globales