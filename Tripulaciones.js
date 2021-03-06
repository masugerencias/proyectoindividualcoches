/**

 * @fileoverview Menú aprMenu, desplegable con efecto expansión suavizado

 *

 * @version                               2.2

 *

 * @author                 César Krall <cesarkrall@aprenderaprogramar.com>

 * @copyright           aprenderaprogramar.com

 *

 * History

 * v2.2 – Se mejoró el efecto de expansión de los submenús dándole efecto aceleración

 * v2.0 – Se evitó que quedaran supersupuestos textos de submenús

 * v1.1 – Se mejoró la compatibilidad con navegadores Opera

 * ----

 * La primera versión de aprMenu fue escrita por Karl Monitrix

        */



/* 
const Cpuertas = () => {

  const [puertas,setPuertas] = useState("");

  const realizarBusquedaPuertas = () => {

      const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify( 
              {puertas: puertas})
          
        };

        fetch("busquedapuertas", requestOptions)
          .then((response) => response.json())
          .then((response) =>{setPuertas(response);
                              console.log(response);
                            })


          }

return(


  <div className="soloRegistro">
  <Form>
  <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label></Form.Label>
              <Form.Control as="select" onChange={(e) => setPuertas(e.target.value)}>
              <option>Puertas</option>
            <option value="3">3</option>
            <option value="5">5</option>
              </Form.Control>
            </Form.Group>
  
   
            <Button variant="primary" onClick={() => realizarBusquedaPuertas()}>Filtrar por puertas </Button>  
    </Form>
  
    <div> 
  </div>
  
    </div>

)

} */










/* {pais ? pais.map((msj,i) => <div>
  {msj.marca},{msj.modelo}
  </div>) : "el boton me va fatal, ntnces cuando pongo el map, no funciona nada"}  

 */


 {/*  <p>{pais ? pais[0].marca : ""}</p> 
  <p>{pais ? pais[0].modelo : ""}</p> 
  <p>{pais ? pais[0].descapotable : ""}</p> 
  <p>{pais ? pais[0].puertas : ""}</p> 
  <p>{pais ? pais[0].ano : ""}</p>  */}


{/* {pais ? pais.map((pai, i) => {
          return (
            <Card style={{ width: '18rem' }} key={i}>
                <Card.Body>
                <Card.Title>{pai.marca}</Card.Title>
                <Card.Text>{pai.modelo}</Card.Text>
                </Card.Body>
            </Card>
          )
        }) : ""} */}



{/* <select className="form-select" aria-label="Default select example">
  <option selected>Fitlro por país</option>
  <option value="alemania">Alemania</option>
  <option value="espana">España</option>
  <option value="italia">Italia</option>
  <option value="francia">Francia</option>
  <option value="inglaterra">Inglaterra</option>
  
</select>,

<button type="button" className="btn btn-dark">Dark</button>
 */}





/* buscarcoche:(req,res) => {


https://rqmotors.com/wp-content/uploads/2017/01/007-126.jpg
https://th.bing.com/th/id/OIP.kq274aDHyexBs2ZCzQxogAEsDh?pid=ImgDet&rs=1


FOTOS DE COCHES CLASICOS EN GRANADA
https://ahoragranada-185c4.kxcdn.com/wp-content/uploads/2018/10/exposicion-de-coches-clasicos-en-el-paseo-del-salon-AlexCamara-16.jpg
https://www.ideal.es/granada/granada-llena-coches-20181027233548-nt.html


FOTOS DE COCHES EN BCN
https://i.pinimg.com/originals/83/44/ca/8344ca513b7f63ac76a3464ecffd8670.jpg
https://www.metropoliabierta.com/uploads/s1/78/41/52/coches-historicos-bcn.jpeg
https://www.hcchotels.com/files/autoretro.jpg

COCHES EN MADRIID
https://www.bodas.net/bodas/proveedores/coches-de-boda/madrid/madrid
https://media.tacdn.com/media/attractions-splice-spp-674x446/06/e7/08/dd.jpg
https://www.autofacil.es/wp-content/uploads/2021/05/clasico-1.jpg
https://image.jimcdn.com/app/cms/image/transf/dimension=1920x10000:format=jpg/path/s02a15506aef99688/image/i4877687adbbb2410/version/1588404530/vintage-tour-taxi-1500-madrid.jpg

{/* <div id='login'>
    LOGIN:
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Correo</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"onChange={(e) => setEmail(e.target.value)}/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Contraseña</label>
    <input type="password" className="form-control" id="exampleInputPassword1"onChange={(e) => setContrasena(e.target.value)}/>
  </div>
 
  <button className="btn btn-dark" onClick={() => entrar()}>ENTRAR</button>


  </div>
 */


 
    //seleccionar coche
    
    /* El ususario tiene que hacer una busqueda de los coches con las caracteristicas del coche
    y con las fechas para ver si está disponible: (Pantalla 2 de excalidraw)
    Es decir: 
            -lectura de MONGODB toArray de los coches con sus caracteristicas:
     */
         /*    MongoClient.connect(url, function (err, db) {
                if (err) throw err;
                var dbo = db.db(mydb);
                dbo.collection(coleccion).find({ puertas: "3", descapotable: "no" }).toArray(function (err, result) {
                    if (err) throw err;
                    console.log(result);
                    db.close();
                });
            }); */
            //Asi se muestran los resultados de la busqueda y selecciona alguno de los mostrados.
            
   /*  res.send('fechasysitios')
    
    },
    
    fechasysitios:(req,res) => { */
    
    //le lleva a la pagina de escoger fechas y el sitio de recepcion y de devolución.
    /* 
    Es decir:
       UPDATE del coche seleccionado de mongo con fechas y sitios:
      */
    
           /*  MongoClient.connect(url, function (err, db) {
                if (err) throw err;
                var dbo = db.db(mydb);
                var myquery = { _id: mongo.ObjectId("62b71097e3959773aaac24c9") };
                var newvalues = { $set: { "alquiler.fecha_recepcion": "1/1/2023", "alquiler.fecha_devolucion": "10/1/2023", "alquiler.lugar_recepcion": "barajas", "alquiler.lugar_devolucion": "atocha", } };
                dbo.collection(coleccion).updateOne(myquery, newvalues, function (err, res) {
                    if (err) throw err;
                    console.log("******************Se ha reservado el SEAT 600*********************");
                    db.close();
                });
            }); */
                    
    
    
      /*   res.send('confirmar seleccion') */
    
   /*  }, */
    
    /* confirmarseleccion:(req,res) => { */
       
        /* 
        Ahora el coche seleccionado ya tienes las fechas en su JSON, ahora como en la pantalla 3.5 de excalidraw
        hay que mostrarle el JSON entero.
        */
    
        //Al confirmar se selecciona ese vehiculo con las fechas y lugares seleccionados (que están ya en su JSON)
      /*   MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db(mydb);
            dbo.collection(coleccion).find({ _id: mongo.ObjectId("62b71097e3959773aaac24c9") }).toArray(function (err, result) {
                if (err) throw err;
    
                console.log(result);
                db.close();
            });
        });
     */
     //aqui ya tenemos el SEAT 600 alquilado 10 dias recepcion en barajas y devolucion en atocha.   
    
    
     /*    res.send('ir a la pagina de pagar')
    
    }
     */


/*     
 */


/* 
ALBERTO

const user = {
  saveDataForm: (req, res) => {
    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    let email = req.body.email;
    let contrasena = req.body.contrasena;
    let telefono = req.body.telefono;
    let dni = req.body.dni;
    let direccion = req.body.direccion;
    const emailExp = new RegExp(/^([\d\w_\.-]+)@([\d\w\.-]+)\.([\w\.]{3})$/);
    const nameExp = new RegExp(/^([A-Za-z]{1,15})$/);
    const unNameExp = new RegExp(/^([A-Za-z]{1,15})$/);
    const telfExp = new RegExp(/^\d{9}$/);
    const dniExp = new RegExp(/^\d{8}[a-zA-Z]$/);
    const passExp = new RegExp(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/
    );
    const direccionExp = new RegExp(/^([A-Za-z]{1,15})$/);
    if (
      !emailExp.test(email) ||
      !nameExp.test(nombre) ||
      !unNameExp.test(apellido) ||
      !dniExp.test(dni) ||
      !passExp.test(contrasena) ||
      !telfExp.test(telefono) ||
      !direccionExp.test(direccion)
    ) {
      console.log(“campos incorrectos”); //renderizar una pagina de campos incorrectos
    } else {
      bcrypt.hash(contrasena, 10, (err, palabraSecretaEncriptada) => {
        if (err) {
          console.log(“Error hasheando:“, err);
        } else {
          console.log(“Y hasheada es: ” + palabraSecretaEncriptada);
          palabraEncriptada = palabraSecretaEncriptada;
          let insertQuery = `INSERT INTO Usuarios
       (
           nombre, apellido, dni ,email, direccion, telefono, contrasena
       )
       VALUES
       (
           ?, ?, ?, ?, ?, ?, ?
       )`;
          let query = mysql.format(insertQuery, 
            [
            nombre,
            apellido,
            dni,
            email,
            direccion,
            telefono,
            palabraEncriptada
          ]);
          connection.query(query, (err, data) => {
            if (err) throw err;
            console.log(data);
          });
        }
        res.send(“Registro completado”);
      });
      //  let obj = { dni: req.body.dni }
      //   res.render(“index”, {
      //     dni: [obj]
      //     // usuarioRegistrado: “Usuario registrado correctamente”,
      // })
    }
  },
  login: (req, res) => {
    loginEmail = req.body.userLog;
    passLog = req.body.passLog;
    let nameCorrect = `SELECT email,contrasena FROM Usuarios where email = ‘${loginEmail}’`;
    connection.query(nameCorrect, (err, rows) => {
      if (err) throw err;
      console.log(‘Usuario: \n’, rows);
      bcrypt.compare(passLog, rows[0].contrasena).then(function (result) {
        // result == true
        if (result && rows[0].email == loginEmail) {
          console.log(“Usuario correcto”);
          res.send(“Usuario correcto”);
        } else {
          console.log(“Usuario incorrecto”);
        }
      }
      )
    }
    )
  }
}
module.exports = user;









*/
