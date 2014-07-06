var auth = require('./auth'),
  users = require('../controllers/users'),
  bases = require('../controllers/bases'),
  mongoose = require('mongoose'),
  User = mongoose.model('User');

module.exports = function(app) {

  app.get('/api/users', auth.requiresRole('admin'), users.getUsers);
  app.get('/api/users/:id', auth.requiresApiLogin, users.getUser);
  app.post('/api/users/:id', auth.requiresApiLogin, users.updateUser);
  app.post('/api/users', users.createUser);
  app.put('/api/users', users.updateUser);

//  app.get('/api/bases', bases.getBases);
//  app.get('/api/bases/:id', bases.getBaseById);

  app.get('/partials/*', function(req, res) {
    res.render('../../public/app/' + req.params[0]);
  });

  app.post('/login', auth.authenticate);

  app.post('/logout', function(req, res) {
    req.logout();
    res.end();
  });

  app.all('/api/*', function(req, res) {
    res.send(404);
  });

  app.get('*', function(req, res) {
    res.render('index', {
      bootstrappedUser: req.user
    });
  });
}