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
/* ESTA QUERY NO HACE FALTA SI QUIERO QUE SALGAN TODOS LOS RESULTADOS, EN EL FIND HAY QUE PONERLO VACIO */
      /*   let query = {
        "marca" :  req.body.marca,
        "pais" : req.body.pais,
        "modelo" : req.body.modelo,
        "descapotable" : req.body.descapotable,
       "puertas" :req.body.puertas,
        "plazas" : req.body.plazas}
         */
    
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db(mydb);
            dbo.collection(coleccion).find({}).toArray(function (err, result) {
                if (err) throw err;  
                res.json(result)
                
             });
             
        });
        //Asi se muestran los resultados de la busqueda y selecciona alguno de los mostrados.
        
        
    },


    busquedavehiculos: (req, res) => {
      
     /*  let query = {
        "marca" :  req.body.marca,   
         "pais" : req.body.pais,
        "modelo" : req.body.modelo,
        "descapotable" : req.body.descapotable,
       "puertas" :req.body.puertas,
        "plazas" : req.body.plazas } */


    
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db(mydb);
            dbo.collection(coleccion).find({"pais":req.body.pais}).toArray(function (err, result) {
                if (err) throw err;  
                res.json(result)
                
             });
             
        });
        //Asi se muestran los resultados de la busqueda y selecciona alguno de los mostrados.
        
        
    },
/* BUSQUEDA DE VEHICULOS DESCAPOTABLES */
    descapotables: (req, res) => {
   

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(mydb);
        dbo.collection(coleccion).find({"descapotable":req.body.descapotable}).toArray(function (err, result) {
            if (err) throw err;  
            res.json(result)
         });    
    });
       
    },
/* la busqueda que hay en el find responde a como se llama en la coleccion. 
req.body.puertas responde a lo que mete en el input al estado de usetate del compopnente, osea, lo que recoge del input*/

busquedapuertas: (req, res) => {
      
       MongoClient.connect(url, function (err, db) {
           if (err) throw err;
           var dbo = db.db(mydb);
           dbo.collection(coleccion).find({"puertas":req.body.puertas}).toArray(function (err, result) {
               if (err) throw err;  
               res.json(result)
               
            });
            
       });
       //Asi se muestran los resultados de la busqueda y selecciona alguno de los mostrados.
       
       
   },

   /* BUSQUEDA POR PLAZAS */
busquedaplazas: (req, res) => {
      
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(mydb);
        dbo.collection(coleccion).find({"plazas":req.body.plazas}).toArray(function (err, result) {
            if (err) throw err;  
            res.json(result)
            
         });
         
    });
    //Asi se muestran los resultados de la busqueda y selecciona alguno de los mostrados.
    
    
},




    





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
                res.json(result)
            });
            
        });

        res.send('has elegido el coche con fechas y lugares de recogida...')


    }

}
module.exports = vehiculos



