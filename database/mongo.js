
//CONEXION CON MONGODB
/**
 * const mongo comentada?
 */
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const mydb = "rentacar";
const coleccion = "vehiculos";
const url = "mongodb://localhost:27017/";


/* 
Ahora el coche seleccionado ya tienes las fechas en su JSON, ahora como en la pantalla 3.5 de excalidraw
hay que mostrarle el JSON entero. vale
*/

//Al confirmar se selecciona ese vehiculo con las fechas y lugares seleccionados (que están ya en su JSON)
/* MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(mydb);
    dbo.collection(coleccion).find({ _id: mongo.ObjectId("62b71097e3959773aaac24c9") }).toArray(function (err, result) {
        if (err) throw err;

        console.log(result);
        db.close();
    });
}); */

         //aqui ya tenemos el SEAT 600 alquilado 10 dias recepcion en barajas y devolucion en atocha.   

         module.exports={
            MongoClient:MongoClient,
            mongo:mongo,
            mydb:mydb,
            coleccion:coleccion,
            url:url
        
        }