const router = require("express").Router()
const admin = require("../controllers/admin.controllers.js");
const user = require("../controllers/user.controllers.js");
const vehiculos = require("../controllers/vehiculos.controllers.js");


//aqui van las rutas de a la aplicacion.
router.get("/",user.home); 
router.post("/registro",user.registronuevo);
router.post("/login",user.loginusuario);
router.post("/bienvenido",user.infousuario);

router.get("/todoslosvehiculos",vehiculos.todoslosvehiculos);
router.get("/seleccionvehiculo",vehiculos.seleccionvehiculo);
router.post("/anadirvehiculo",admin.anadirvehiculo);
router.post("/eliminarvehiculo",admin.eliminarvehiculo);











module.exports=router