var express = require('express')
var router = express.Router()
var mongodb = require('mongodb')
// "client is a property of mongodb it is used to  express application connect to the server"
var mongoclient = mongodb.MongoClient 
var url ="mongodb://localhost:27017"

var router = express.Router()
router.get('/get',function(req,res){
      mongoclient.connect(url,function(error,cluster){
          var mydb= cluster.db('reacrdb')
          var mycollection = mydb.collection('formcollection')
          mycollection.find({}).toArray(function(error,success){
              if(error){
                  res.send(error)
              } else {
                   res.send({data:success})
              }
          })
      })
})



router.post('/getDatafromclient',function(request,res){
    var name = request.body.uname
    var password = request.body.password
    var myData = {
        username:name,
        password:password
   } 
 mongoclient.connect(url,function(error,cluster){
          if(error){
              res.send(error)
          }else{
              var myDB=cluster.db('reactdb')
              var mycollection= myDB.collection('formcollection')
              mycollection.insertOne(myData,function(error,success){
                       if(error){
                           res.send(error)
                       }else{
                           res.send("successfuly Inserted the Document")
                       }
              })
          }
})
 })
 module.exports = router