var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')

var schema = mongoose.Schema({ name: String })

schema.methods.vrruummm = function(){
    console.log(this.get("name") + " сказал вррууммм")
}

var Car = mongoose.model('Car', schema)

var boomer = new Car({ name: 'Sedan' })
boomer.save(function (err) {
    boomer.vrruummm()
})