let express = require('express'),
    router = express.Router(),
    passport = require('passport');
    controller = require('../../controllers/api/auth');

router.get('/login', passport.authenticate('steam', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/');
  });

router.get('/success', controller.callback);

module.exports = router;
