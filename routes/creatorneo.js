var express = require('express');
var router = express.Router();

//Conexión con la base de datos
var con = require('../connectdb');

/* GET formulario para crear torneo. */
router.get('/', function(req, res, next) {
    res.render('creatorneo');
});

router.post('/',function (req, res, next) {

    con.db.query("insert into torneo (nombre, estado) values ($1,$2)", [req.body.nombre,'N'])
        .then(function (data) {
            res.render('mensaje', {text:"Torneo creado con éxito."});
        })
        .catch(function (error) {
            console.log("ERROR:", error);
        });




});

module.exports = router;
