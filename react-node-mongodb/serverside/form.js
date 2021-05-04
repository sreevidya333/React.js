var express = require('express')
var router = express.Router()

router.get('./get',function(request,responce){
        responce.send("this is responce")
})

router.post('/getDatafromclinet',function(request,response){
    var username = request.body.username
    var password = request.body.password
    response.send({
        "username":username,
        "password":password
    })
})

module.exports = router
