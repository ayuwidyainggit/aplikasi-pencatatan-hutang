const express = require('express')
const app = express()

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/halo', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hallo Ayu !' })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))