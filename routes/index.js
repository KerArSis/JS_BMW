var express = require('express')
var router = express.Router()
var db = require("../mySQLConnect.js");




router.get('/', function(req, res, next) {
  res.render('index', { title: 'Проект "BMW"', counter:req.session.counter  });
});


router.get('/logreg', function(req, res, next) {
res.render('logreg',{title: 'Вход', error: null});
});



router.post('/logreg', function(req, res, next) {
  var username = req.body.username
  var password = req.body.password
  // console.log("hey")
  db.query (`SELECT * FROM user WHERE user.username = '${req.body.username}'`, function(err,users){
        if(err) return next(err)
        if(users.length > 0) {
          var user = users[0];
          if (password == user.password){
            req.session.user = user.user_id
            res.redirect('/')
          } else {
            res.render('logreg', {title: 'Вход', error: 'Пароль не верный'})
          }
        } else {
          db.query(`INSERT INTO user (username, password) VALUES ('${username}', '${password}')`, function(err, user){
            if(err) return next(err)
            req.session.user = user.user_id
            res.redirect('/')
          })
        }
})
});
router.post('/logout', function(req, res, next) {
  req.session.destroy()
  req.session.user = null
  res.redirect('/')
});
module.exports = router;
