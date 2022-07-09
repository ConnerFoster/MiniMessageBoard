var express = require('express')
var router = express.Router()

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date().toDateString(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date().toDateString(),
  },
]

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Mini Messageboard', messages: messages})
})

/* GET home page. */
router.get('/new', function (req, res, next) {
  res.render('form')
})

router.post('/new', function (req, res, next) {
  const user = req.body.name
  const msg = req.body.usermsg
  const dateAdded = new Date().toDateString()

  messages.push({text: msg, user: user, added: dateAdded})

  res.redirect('/')
})

module.exports = router
