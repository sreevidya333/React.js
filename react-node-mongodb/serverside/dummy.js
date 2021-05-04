var express = require('express')
var router = express.Router()

router.get('/get1',function(request,response){
    response.send("welcome to express js")
})

router.get('/get2',function(request,response){
    response.send("welcome to mongo db")
})

module.exports = router


