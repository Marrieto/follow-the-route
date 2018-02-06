const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')

var app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.engine('.hbs', exphbs({defaultLayout: 'main',
  extname: 'hbs'}))
app.set('view engine', '.hbs')

app.use(express.static(path.join(__dirname, '/public')))
// app.use(express.static(__dirname + '/public'))

// Set the port if it's not already set.
process.env.PORT = process.env.PORT || 8000

// Create an array of temporary products
let products = []

app.get('/products', (req, res) => {
  res.render('products', {product: products})
})

app.get('/product/:id', (req, res) => {
  res.render('product', {id: req.params.id})
})

app.get('/products/create', (req, res) => {
  res.render('createProduct')
})

app.post('/products/create', (req, res) => {
  products.push(req.body.productName)
  res.redirect(303, '/products/')
})

app.use((req, res, next) => {
  res.status(404)
  res.send('404: Bad url')
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500)
  res.send('500: Server is kill')
})

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Express server up and running on port: ${process.env.PORT}. Press CTRL + C to shut it down.`)
})
