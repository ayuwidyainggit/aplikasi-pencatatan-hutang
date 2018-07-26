const express = require('express')
const app = express()
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/ayu')

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static('public'))

app.get('/ayu', function(req, res){
   res.render('suplier')
}) 
app.get('/ayu1', function(req, res){
   res.render('form2')
})   
app.get('/person1', function(req, res){
   res.render('person')
});


app.listen(3000, () => console.log('Example app listening on port 3000!'))