const { MongoClient, mongo, mydb, coleccion, url } = require("../database/mongo.js")
const connection = require("../database/sql.js")
const { append } = require("express/lib/response");
const mysql = require("mysql");
const req = require("express/lib/request");


const admin = {

    anadirvehiculo: (req, res) => {

    //Insertar un vehiculo nuevo
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(mydb);
        let vehiculonuevo ={
            "marca" :  req.body.marca,
            "pais" : req.body.pais,
            "modelo" : req.body.modelo,
            "descapotable" : req.body.descapotable,
           "puertas" :req.body.puertas,
            "plazas" : req.body.plazas,
            "ano": req.body.ano,
            "foto":req.body.foto
           
        }
        
        dbo.collection(coleccion).insertOne(vehiculonuevo, function(err, res) {
            if (err) throw err;
            console.log("vehiculo insertado");
            db.close();
        });
        res.send('vehiculo añadido')

        });
    
    

    },


    

    eliminarvehiculo: (req, res) => {

        //Eliminar un vehiculo nuevo
        let idvehiculo = "62c1b6d392db74dc3437f5f8"

            //Borrar  
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(mydb);
        var myquery = { _id: mongo.ObjectId(idvehiculo) };
        dbo.collection(coleccion).deleteOne(myquery, function(err, obj) {
        if (err) throw err;
        console.log("Vehiculo borrado");
        db.close();
        res.send('vehiculo eliminado')
        });
       
    });

        
        
    
        }
    














}








module.exports = admin
