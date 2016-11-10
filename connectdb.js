/**
 * Created by paco on 23/10/16.
 */
var pgp = require('pg-promise')();
pgp.pg.defaults.ssl = true;
var db = pgp(process.env.DBDATA);


exports.db = db;