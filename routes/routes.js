const router = require("express").Router()
const admin = require("../controllers/admin.controllers.js");
const user = require("../controllers/user.controllers.js");
const vehiculos = require("../controllers/vehiculos.controllers.js");
const passRecovery = require ("../controllers/recuperacion.controllers")


//aqui van las rutas de a la aplicacion.
router.get("/",user.home); 
router.post("/registro",user.registronuevo);
router.post("/login",user.loginusuario);
router.post("/bienvenido",user.infousuario);
router.post("/todoslosvehiculos",vehiculos.todoslosvehiculos);
router.post("/pais",vehiculos.busquedapais);
router.post("/descapotables",vehiculos.descapotables);
router.post("/busquedapuertas",vehiculos.busquedapuertas);
router.post("/busquedaplazas",vehiculos.busquedaplazas);
router.get("/seleccionvehiculo",vehiculos.seleccionvehiculo);
router.post("/anadirvehiculo",admin.anadirvehiculo);
router.post("/eliminarvehiculo",admin.eliminarvehiculo);
router.post("/masinfo",vehiculos.matriculas);

//CREO QUE A QUI ME FALTA EL DEL PARAM!
router.post("/recovery", passRecovery.confirmedUser);
router.get("/recovery/:email/:token", passRecovery.confirmUserGet);
/* router.post("/recovery/:email/:token", passRecovery.checkUserPost);
 */


/* NECESITO HACER UN ENDPINT PARA MOSTRAR LOS VEHICULOS CON LOS FILTROS HECHPOS, IGUAL QUE /TODOS LOS VEHICULOS */

/* todos tienen que ser POST? */






module.exports=router