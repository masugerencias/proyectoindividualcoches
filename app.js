
const express = require('express');
const bodyParser = require('body-parser');
const router = require("./routes/routes")
const app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.json())
//atraves de las url recibidrá JSON. SIEMPRE
app.use("/",router) 




    app.listen(5000, () => {
        console.log("*********El servidor está inicializado en el puerto 5000**********");

    });
        
  

    
   // Esto no se si hace falta ->  module.exports=urlencodedParser   
 

      
 




    




