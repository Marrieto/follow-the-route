const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')

var app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(express.static(path.join(__dirname, '/public')))
// app.use(express.static(__dirname + '/public'))

// Set the port if it's not already set.
process.env.PORT = process.env.PORT || 8000

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Express server up and running on port: ${process.env.PORT}. Press CTRL + C to shut it down.`)
})
