var express = require('express');
var router = express.Router();

//Conexión con la base de datos
var con = require('../connectdb');



/* GET info sobre equipos, usuarios o torneos, en función
del parámetro que se le pase. */

router.get('/:p', function(req, res, next) {
    var contenido=[];
    switch (req.params.p){
        case 'equipos':
            con.db.query("SELECT * FROM equipo")
                .then(function (data) {
                    for(var key in data){
                        contenido.push(data[key]);
                    }
                    contenido = JSON.stringify(contenido);
                    res.writeHead(200, {"Content-Type": "application/json"});
                    res.end(contenido);
                })
                .catch(function (error) {
                    console.log("ERROR:", error);
                });
            break;
        case 'usuarios':
            con.db.query("SELECT * FROM usuario")
                .then(function (data) {
                    for(var key in data){
                        contenido.push(data[key]);
                    }
                    contenido = JSON.stringify(contenido);
                    res.writeHead(200, {"Content-Type": "application/json"});
                    res.end(contenido);
                })
                .catch(function (error) {
                    console.log("ERROR:", error);
                });
            break;
        case 'torneos':
            con.db.query("SELECT * FROM torneo")
                .then(function (data) {
                    for(var key in data){
                        contenido.push(data[key]);
                    }
                    contenido = JSON.stringify(contenido);
                    res.writeHead(200, {"Content-Type": "application/json"});
                    res.end(contenido);
                })
                .catch(function (error) {
                    console.log("ERROR:", error);
                });
            break;
    }
});

module.exports = router;
