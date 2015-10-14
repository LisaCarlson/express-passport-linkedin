var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/logout', function(req, res, next) {
  console.log(req._passport.session.user)
  req._passport.session.user = null;
  res.redirect('/');
});

module.exports = router;
