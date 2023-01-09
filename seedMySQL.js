var mysql = require('mysql2');

var drop = 'TRUNCATE TABLE cars;'
var seedQuery = 'INSERT INTO cars (title, nick, avatar, about) VALUES ("Coupe", "coupe", "/images/coupe.jpg", "BMW 8 серии — это роскошное купе, второе поколение которого выпускается в Германии с 2018 года. Автомобили для России оснащаются шестицилиндровым турбодизелем объёмом три литра и турбомотором V8 4.4. У всех машин — полный привод и восьмиступенчатая автоматическая коробка передач."), ("Crossover", "crossover", "/images/crossover.jpg", "BMW X5 — это кроссовер, четвертое поколение которого выпускается с 2018 года в США под заводским индексом G05. В России автомобиль предлагается с бензиновыми и дизельными турбомоторами. У всех версий — полный привод и восьмиступенчатый «автомат», а в салоне может быть пять или семь мест."), ("Sedan", "sedan", "/images/sedan.jpg", "BMW E60 — это пятое поколение седанов 5 серии, пришедшее на смену E39 и выпускалось с 2003 по 2010 год. Внешность кузова был разработан дизайнером Davide Arcangeli, и следует отметить, что для своей нетрадиционной внешности, и несмотря на некоторую критику, седан стал самой продаваемой маркой БМВ в своем классе.");'

var connection = mysql.createConnection({
host : '127.0.0.1',
port: '3306',
user : 'root',
password : 'root',
database: 'bmw'
});
connection.connect()



console.log("Running SQL seed...")


// Drop content
connection.query(drop, err => {
if (err) {
throw err
}
// Seed content
connection.query( seedQuery, err => {
if (err) {
throw err
}
console.log("SQL seed completed!")
connection.end()
})
})