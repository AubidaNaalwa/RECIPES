//inclusing libraries
const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const api = require('./server/routes/api')

//serving files
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(express.static(path.join(__dirname, 'dist')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))



app.use('/', api)

// listing to port 8080
const port = 8080
app.listen(port, () => console.log(`Listening on port ${port}:all GOOOOOOD :-)`))

//after this it should work