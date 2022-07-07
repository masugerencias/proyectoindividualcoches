const { MongoClient, mongo, mydb, coleccion, url } = require("../database/mongo.js")
const connection = require("../database/sql.js")
const { append, send } = require("express/lib/response");
const mysql = require("mysql");
const req = require("express/lib/request");

//pues parece que funciona, el nombre de esa constante tiene que ser la misma de la que se importa en el caso de SQL.
//para importar las variables de mongo he tenido que ponerlas como si fuera un json!

const user = {
    home: (req, res) => {
        res.send('estas en home, pagina principal')
    },
    registronuevo: (req, res) => {    
 
        let nombre = req.body.nombre;
        let apellido = req.body.apellido;
        let empleado = "0";
        let telefono = req.body.telefono;
        let email = req.body.email;
        let contrasena = req.body.contrasena;
        let confirmarcontrasena = req.body.confirmarcontrasena;

        

        let insertQuery = `INSERT INTO nuevos_usuarios 
       (nombre,apellido,empleado,telefono,email,contrasena,confirmarcontrasena) 
       VALUES ( ?,?,?,?,?,?,? )`;
        let query = mysql.format(insertQuery, [nombre, apellido, empleado, telefono, email, contrasena, confirmarcontrasena])
        connection.query(query, (err, response) => {
            if (err) throw err;           
            console.log('ususario insertado')
            res.json(true)
/*             connection.end()        
 *//* solo puede haber una respuesta res.send */
           
        });
    
    },

//BUSCAR EL CORREO DEL USUSARIO LOGUEADO PARA DARLE LA INFORMACION DE SU PERFIL EN EN ENDPOINT BIENVENIDO
    infousuario: (req, res) => {
        let email = req.body.email;
       
        let query3 = `SELECT * FROM nuevos_usuarios WHERE email = "${email}"`;
        connection.query(query3, (err, data) => {
            if (err) throw err;
            res.json(data)

        })
    },
    


// PROTOCOL_ENQUEUE_AFTER_QUIT', ESTO ES POR CERRAR LA CONEXION, YA LA DEJO ABIERTA.
    loginusuario: (req, res) => {
        let email = req.body.email;
        let contrasena = req.body.contrasena;

        let query3 = `SELECT * FROM nuevos_usuarios WHERE email = "${email}" AND contrasena = "${contrasena}"`;
        connection.query(query3, (err, data) => {
            if (err) throw err;
            if (data.length == 0) {
                console.log('usuario o contraseña incorrectos o bien usuario no registrado');
              res.json(false)
            } else {
                console.log('logueado');
                res.json(true)
            }
            
        });

    }

}



module.exports = user

