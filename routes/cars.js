var express = require('express');
var router = express.Router();
var Car = require("../models/car").Car
var checkAuth = require("./../middleware/checkAuth.js")
var async = require("async")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с cars');
});

/* Page cars */
router.get('/:nick', checkAuth,function(req, res, next) {
    Car.findOne({nick:req.params.nick}, function(err,car){
        if(err) return next(err)
        if(!car) return next(new Error("Нет такого автомобиля"))
        res.render('car', {
            title: car.title,
            picture: car.avatar,
            desc: car.desc
        })
    })
})


module.exports = router;