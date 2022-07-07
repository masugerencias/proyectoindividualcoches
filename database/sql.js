



//CONEXION CON SQL 
const mysql = require('mysql');
const Connection = require('mysql/lib/Connection');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'rentacarsql'
});

//PRUEBA DE LA CONEXION CON SQL

connection.connect((err)=> {
    if(!err){
        console.log('*********Connection Established Successfully with your SQL DB************');
        //connection.end();
    }else{
        console.log('----------Connection Failed!----------'+ JSON.stringify(err,undefined,2));
    }
});


   //CREACION NUEVO USUSARIO
    //laBBDD  de SQL  se llama en WORKBENCH: "SQL"
    //INSERTAR EN USUSARIOS UN USUARIO NUEVO
   /*  let query1 = `INSERT INTO nuevos_usuarios (id,nombre,empleado,telefono,email,contrasena)VALUES (null,'yann poirot sanz',true,'621016880','yann@gmail.com','1234')`;
    connection.query(query1, (err, response) => {
        if (err) throw err;
        console.log(response.insertId);
        console.log('usuario insertado correctametne');
        connection.end();
    });  */


    /* 
Hay que bloquear la disponibilidad con las fechas seleccionadas y proceder ha hacer la factura.

FACTURA AQUI el ususario con un formulario de compra tiene que generar su factura escribiendo en SQL 
Y pasarla a una libreria de generacion de factura pdf.

Vamos a generar la factura con un INSERT en SQL con un formulario de pagar:

*/
/* let query2 = `INSERT INTO Facturas (id,num_tarjeta,importe, fecha_transcaccion,dni,fk_id_nuevos_usuarios)VALUES (null,'1234123411341234',5000,'2020-06-20','11111121F',null);`;

connection.query(query2, (err, response) => {
    if(err) throw err;
    console.log(response);
    connection.end();
});  */

module.exports=connection;
