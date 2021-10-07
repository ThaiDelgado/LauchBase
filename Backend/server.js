const nunjucks = require('nunjucks')
const express = require('express')

const server = express()

server.set("view engine", "html") //Configurando nunjucks

nunjucks.configure("views", {  //Configurando nunjucks
    express: server
})

server.listen(5000, function(){
    console.log('server in running')
})

server.get("/", function(req, res){
    return res.send("Meu Primeiro Servidor!!!")
})