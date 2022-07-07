const { MongoClient, mongo, mydb, coleccion, url } = require("../database/mongo.js")
const connection = require("../database/sql.js")
const { append } = require("express/lib/response");
const mysql = require("mysql");
const req = require("express/lib/request");




const vehiculos = {

    todoslosvehiculos: (req, res) => {
        /*Nada mas meterse en este endpoint tienen que aparecer todos los vehiculos sin filtro especifico,
        osea, vertodos sería un filtro que contiene todos.
         */

        let query = {
        "marca" :  req.body.marca,
        "pais" : req.body.pais,
        "modelo" : req.body.modelo,
        "descapotable" : req.body.descapotable,
       "puertas" :req.body.puertas,
        "plazas" : req.body.plazas}
        
    
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db(mydb);
            dbo.collection(coleccion).find({query}).toArray(function (err, result) {
                if (err) throw err;
                
                console.log('aqui se muestran los resultados d ela bisqueda');
                
                db.close();
                
             });
             
        });
        //Asi se muestran los resultados de la busqueda y selecciona alguno de los mostrados.

        res.send('pesao')
    },



    /* FILTRAR VEHICULOS
    Cada filtro tiene que tener su enpoint? o como va lo de los filtros?

    */





    /* 
    Aqui el ususario ya tiene uno de sus vehiculos seleccionado y le da  a "CONTINUAR "
    */
    seleccionvehiculo: (req, res) => {

            let cocheselect = "62b71131e3959773aaac24ca"
            let alquiler = {
            "alquiler.fecha_recepcion" : req.body.fecha_recepcion,
            "alquiler.fecha_devolucion": req.body.fecha_devolucion,
            "alquiler.lugar_recepcion": req.body.lugar_recepcion,
            "alquiler.lugar_devolucion": req.body.lugar_devolucion

            }


        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db(mydb);
            var myquery = { _id: mongo.ObjectId(cocheselect) };
            var newvalues = { $set: { alquiler } };
            dbo.collection(coleccion).updateOne(myquery, newvalues, function (err, res) {
                if (err) throw err;
                //no consigo imprimir ningun resultado
                
                db.close();
            });
            
        });

        res.send('has elegido el coche con fechas y lugares de recogida...')


    }

}
module.exports = vehiculos
