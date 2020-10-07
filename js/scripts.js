const actividad = (tarea,duracion,callback) => {
    setTimeout(() => {
        callback(tarea);
    }, duracion);
}

actividad("Comprar bicicleta",0000, (tarea) => {
    document.getElementById("imagen").src = "img/bicicletas.jpg";
    console.log("tarea: "+ tarea);
    actividad("Comprar casco",5000, (tarea) => {
        document.getElementById("imagen").src = "img/cascos.jpg";
        console.log("tarea: "+ tarea);
        actividad("Comprar guantes",1000, (tarea) => {
            document.getElementById("imagen").src = "img/gloves.jpg";
            console.log("tarea: "+ tarea);
            actividad("Ir de paseo",2000, (tarea) => {
                document.getElementById("imagen").src = "img/ride.jpg";
                console.log("tarea: "+ tarea);
                actividad("Fin",8000,(tarea) => {
                    console.log("tarea: "+tarea);
                })
            })
        })
    })
})