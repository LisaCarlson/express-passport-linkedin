var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req)
  res.render('index', {
    title: 'Express',
    user: req.user
  });
});

router.get('/logout', function(req, res, next) {
  req._passport.session.user = null;
  res.redirect('/');
});

module.exports = router;
