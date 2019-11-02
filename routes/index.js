var express = require('express');
var router = express.Router();

router.use('/boards', require('./boards'));
router.use('/likes', require('./likes'));
router.use('/costumes', require('./costumes'));
router.use('/ranks', require('./ranks'));
router.use('/users', require('./users'));


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
