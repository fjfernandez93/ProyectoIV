var request = require('supertest');
app = require(__dirname+"/../app.js");


/*Tests para comprobar que las rutas tipo "GET" responden 
correctamente*/
describe('GET routes', function() {
  it('responde con html la route: /', function(done) {
    request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });
  it('responde con un json la route: /info/torneos', function(done) {
    request(app)
      .get('/info/torneos')
      .expect('Content-Type', /json/)
      .expect(200, done)
  });
  it('responde con un json la route: /info/equipos', function(done) {
    request(app)
      .get('/info/torneos')
      .expect('Content-Type', /json/)
      .expect(200, done)
  });
  it('responde con un json la route: /info/usuarios', function(done) {
    request(app)
      .get('/info/torneos')
      .expect('Content-Type', /json/)
      .expect(200, done)
  });
  it('responde con html la route: /creatorneo', function(done) {
    request(app)
      .get('/creatorneo')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });
});
/*Este test crea un torneo y comprueba que la respuesta es la correcta.
El parámetro 'testing' indica a la aplicación que ese torneo debe ser
borrado cuando se compruebe que todo esta en orden. */
describe('POST torneo',function(){
  it('Crea torneo correctamente', function(done){
    var torneo = {nombre : 'pedro',testing: 'a'};
    request(app)
      .post('/creatorneo')
      .send(torneo)
      .expect('Content-Type', /html/)
      .expect(200, done);

  });
});
