var express = require('express');
var router = express.Router();
var db = require('../mySQLConnect'); 
//  var Car = require("../models/car").Car;
//  var checkAuth = require("./../middleware/checkAuth.js")
var async = require("async")




/* GET cars listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с cars')
});


/* Страница машин */
router.get('/:nick' ,function(req, res, next) {
  db.query(`SELECT * FROM cars WHERE cars.nick = '${req.params.nick}'`, (err, cars) => {
    if(err) {
      console.log(err);
      if(err) return next(err)
    } else {
      if(cars.length == 0) return next(new Error("Нет такой bmw"))
      var car = cars[0];
      res.render('car', {
        title: car.title,
        picture: car.avatar,
        desc: car.about
      })
    }
  })
})


/* Страница машин на mongodb*/
// router.get('/:nick', checkAuth,function(req, res, next) {
//  Car.findOne({nick:req.params.nick}, function(err,Car){ 
//      if(err) return next(err)
//      if(!Car) return next(new Error("Нет такой bmw"))
//      res.render('Car', {
//          title: Car.title,
//          picture: Car.avatar,
//          desc: Car.desc
//      })
// })
// })
// .
module.exports = router;