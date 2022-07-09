var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toDateString()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toDateString()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

/* GET home page. */
router.get('/new', function(req, res, next) {
  res.render('form');
});


module.exports = router;
