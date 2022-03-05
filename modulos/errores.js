function serompe(){
    return 3+z
}
//cuando sabemos que puede romperse usamos try y catch

try{

    serompe() //convocamos la función que se puede romper

}catch(err){
    console.error("se rompió o quedo ahí"); 
    console.error(err.message); //para saber el error, la razón 
    console.log("error recibido, lo conocemos") //que va a pasar con el error identificado 
}
//además continu 
console.log("continua") 