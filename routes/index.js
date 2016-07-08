var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  content = {
    title: 'SimDif',
  };
  res.render('index', content);
});

module.exports = router;
