var express = require('express');
var router = express.Router();

//Conexión con la base de datos
var con = require('../connectdb');

/* GET formulario para crear torneo. */
router.get('/', function(req, res, next) {
    res.render('creatorneo');
});

/* POST para crear torneo. */
router.post('/',function (req, res, next) {


    con.db.one("insert into torneo (nombre, estado) values ($1,$2) returning \"ID_torneo\" " , [req.body.nombre,'N'])
        .then(function (data) {
            res.render('mensaje', {text:"Torneo creado con éxito."});

            /*Si la inserción se ha hecho como parte de un test, eliminarlo después.
            * TODO: eliminar esta parte y añadirla directamente al test.*/

            if(typeof(req.body.testing) != 'undefined'){
                con.db.none("delete from torneo where \"ID_torneo\" = $1 ",[data.ID_torneo])
                    .then(function () {
                        console.log("Borrado con éxito");
                    })
                    .catch(function (error) {
                        console.log("ERROR:", error);
                    });
            }
        })
        .catch(function (error) {
            console.log("ERROR:", error);
        });




});

module.exports = router;
