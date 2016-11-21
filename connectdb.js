/**
 * Created by paco on 23/10/16.
 */
var pgp = require('pg-promise')();
if(process.env.CONNECT_WITH_SSL=="OK")
  pgp.pg.defaults.ssl = true;
var db = pgp(process.env.DBDATA);


exports.db = db;
