/**
 * Created by paco on 23/10/16.
 */
var pgp = require('pg-promise')();
pgp.pg.defaults.ssl = true;
var db = pgp("postgres://rktfmfpltpwbjd:2GfLr1xzI9fz_ILUwVrMUKdBs1@ec2-54-235-208-3.compute-1.amazonaws.com:5432/d6e410322adkdn");


exports.db = db;