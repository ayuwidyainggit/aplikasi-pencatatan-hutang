const express = require('express')
const app = express()

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static('public'))

app.get('/ayu', function(req, res){
   res.render('suplier')
}) 
app.get('/ayu1', function(req, res){
   res.render('hutang1')
})
app.post('/ayu1', function(req, res){
   res.render('bphtb')
}) 
app.get('/person', function(req, res){
   res.render('person')
})   
app.post('/ayuu', function(req, res){
   res.render('form2')
})  

app.listen(3000, () => console.log('Example app listening on port 3000!'))