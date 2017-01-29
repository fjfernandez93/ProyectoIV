// flightplan.js
var plan = require('flightplan');

// configuration
plan.target('staging', {
  host: 'crimson-meadow-38.westeurope.cloudapp.azure.com',
  username: 'vagrant',
  privateKey: '/Users/paco/.ssh/id_rsa',
  passphrase: proces.env.PKPASSPHR,
  agent: process.env.SSH_AUTH_SOCK
});

plan.remote(function(remote) {
  remote.log('Provisionando maquina desde repositorio y lanzandola');

  remote.exec('git clone https://github.com/fjfernandez93/ProyectoIV.git')
  remote.exec('forever stop ~/ProyectoIV/bin/www', {failsafe: true});
  remote.exec('forever start  ~/ProyectoIV/bin/www');
});
