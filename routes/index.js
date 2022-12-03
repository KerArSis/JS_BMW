var express = require('express');
var router = express.Router();
var Car = require("../models/car").Car

/* GET home page. */
Car.find({}, { _id: 0, title: 1, nick: 1 }, function (err, menu) {
  res.cookie('greeting', 'Hi!!!').render('index', {
      title: 'Express',
      menu: menu
  });
})


/* Page coupe */
router.get('/coupe', function(req, res, next) {
  res.render('bmw', {
    title: "Coupe",
    picture: "images/coupe.jpg",
    desc: "BMW 8 серии — это роскошное купе, второе поколение которого выпускается в Германии с 2018 года. Автомобили для России оснащаются шестицилиндровым турбодизелем объёмом три литра и турбомотором V8 4.4. У всех машин — полный привод и восьмиступенчатая автоматическая коробка передач."
  })
});
/* Page crossover */
router.get('/crossover', function(req, res, next) {
  res.render('bmw', {
    title: "Crossover",
    picture: "images/crossover.jpg",
    desc: "BMW X5 — это кроссовер, четвертое поколение которого выпускается с 2018 года в США под заводским индексом G05. В России автомобиль предлагается с бензиновыми и дизельными турбомоторами. У всех версий — полный привод и восьмиступенчатый «автомат», а в салоне может быть пять или семь мест."
  })
});
/* Page sedan */
router.get('/sedan', function(req, res, next) {
  res.render('bmw', {
    title: "Sedan",
    picture: "images/sedan.jpg",
    desc: "BMW E60 — это пятое поколение седанов 5 серии, пришедшее на смену E39 и выпускалось с 2003 по 2010 год. Внешность кузова был разработан дизайнером Davide Arcangeli, и следует отметить, что для своей нетрадиционной внешности, и несмотря на некоторую критику, седан стал самой продаваемой маркой БМВ в своем классе."
  })
});
module.exports = router;
