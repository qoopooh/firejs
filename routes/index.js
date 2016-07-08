var express = require('express');
var router = express.Router();

var firebase = require('firebase');

firebase.initializeApp({
  serviceAccount: 'Babel-95cf925002b5.json',
  databaseURL: 'https://babel-af432.firebaseio.com/',
});

/* GET home page. */
router.get('/', function(req, res, next) {

  var sessionsRef = firebase.database().ref('sessions');
  var mySessionRef = sessionsRef.push();
  mySessionRef.update({ startedAt: firebase.database.ServerValue.TIMESTAMP });

  content = {
    title: 'SimDif',
  };
  res.render('index', content);
});

module.exports = router;
