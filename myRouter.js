var router = require('./index').Router();
exports = module.exports = router;
router.get('/', function (req, res, next) {
  console.log('myRouter get /');
  next();
});

router.post('/', function (req, res, next) {
  console.log('myRouter post /');
  next();
});


