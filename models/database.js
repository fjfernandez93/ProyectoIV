
var pgp = require('pg-promise')();

//Conexión con la base de datos
var con = require('../connectdb');




tablaequipo = "CREATE TABLE public.equipo(nombre character varying(64) NOT NULL,calidad integer," +
"CONSTRAINT equipo_pkey PRIMARY KEY (nombre))";


autoincremento = String.raw`CREATE SEQUENCE torneo_id_seq;`

tablatorneo = String.raw` CREATE TABLE public.torneo
(
    id integer NOT NULL DEFAULT nextval('torneo_id_seq'),
    nombre character varying(64),
    ganador character varying(64),
    estado character varying(20),
    partido_prox integer,
    CONSTRAINT torneo_pkey PRIMARY KEY ("id")
)`

addinc = "ALTER SEQUENCE torneo_id_seq OWNED BY torneo.id; "

tablauser= `CREATE TABLE public.usuario
(
    login character varying(64),
    hash character varying(64) ,
    email character varying(100),
    fecha_alta date,
    CONSTRAINT usuario_pkey PRIMARY KEY (login)
)`

function crea(){



con.db.query(autoincremento)
    .then(function () {
      con.db.query(tablatorneo)
         .then(function(){
           con.db.query(addinc)
              .then(function(){
                console.log("tabla torneo creada")
                con.db.query(tablaequipo)
                  .then(function(){
                    console.log("tabla equipo creada");
                    con.db.query(tablauser)
                      .then(function(){
                        console.log("tabla user creada");
                        process.exit();
                      })
                      .catch(function (error) {
                          console.log("ERROR:", error);
                      });
                  })
                  .catch(function (error) {
                      console.log("ERROR:", error);
                  });
              })
         })
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });
}
