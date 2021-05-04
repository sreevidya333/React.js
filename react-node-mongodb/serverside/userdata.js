var express = require('express')
var router = express.Router()

router.get('/get1',function(request,response){
      var name = request.query.name
      var city = request.query.city
    //   response.send("<h1>my name + 'name' + where am from + 'city' </h1>")
      response.send(`<h1> my name ${name} i am from ${city}</h1>`)
})

router.get('/get2',function(request,response){
    response.send("welcome to mongo db")
})

module.exports = router


