var express = require('express');
var router = express.Router();
var passport = require('passport');
var UserModel = require('../models/user');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index/index');
});

router.get('/register', function(req, res) {
    res.render('index/register', { user : req.user });
});

router.post('/register', function(req, res) {
    UserModel.register(new UserModel({ username : req.body.username }), req.body.password, function(err, user) {
        if (err) {
            return res.render('index/register', { user : user });
        }

        passport.authenticate('local')(req, res, function () {
          res.redirect('/');
        });
    });
});

router.get('/login', function(req, res) {
      res.render('index/login', { user : req.user });
  });

router.post('/login', passport.authenticate('local'), function(req, res) {
      res.redirect('/');
});

router.get('/logout', function(req, res) {
      req.logout();
      res.redirect('/');
});

router.get('/ping', function(req, res){
      res.send("pong!", 200);
});

module.exports = router;
