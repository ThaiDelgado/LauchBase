const nunjucks = require('nunjucks')
const express = require('express')

const server = express()

server.use(express.static("public")) 

server.set("view engine", "html")

nunjucks.configure("views", { //configurando nunjucks
    express: server
})

server.get("/", function(req, res){ //criando rota do index
    return res.render("about")     // responde renderizando o index.html
})

server.get("/classes", function(req, res){
    return res.render("classes")
})

server.listen(5000, function(){
    console.log('server in running')
})