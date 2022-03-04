//para traer modulos 

const fs = require("fs"); 

//leer el archivo, todo se ejecuta de forma asincrona

function leer(ruta,cb){
    fs.readFile(ruta, (err, data)=>{
        console.log(data.toString()); //para poderlo leer como un string  


    })
}

function escribir(ruta,contenido, cb){
    fs.writeFile(ruta, contenido, function(err){
        if(err){
            console.error("no he podido escribirlo", err); 
        }else {
            console.log("se ha escrito correctamente")
        }

    });

}

//escribir(__dirname + "/archivo1.txt", "soy un archivo nuevo", console.log); //crear archivos y escribir sobre ellos 

