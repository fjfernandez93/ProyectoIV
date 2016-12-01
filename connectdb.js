/**
 * Created by paco on 23/10/16.
 */
var pgp = require('pg-promise')();
if(process.env.CONNECT_WITH_SSL=="OK")
  pgp.pg.defaults.ssl = true;


if(process.env.PG_TEST_PORT_5432_TCP_ADDR){
  var db = pgp('postgres://docker:docker@'+process.env.PG_TEST_PORT_5432_TCP_ADDR+':5432/docker');
}else{
  var db = pgp(process.env.DBDATA);
}

exports.db = db;
