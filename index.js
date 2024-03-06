const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 5001

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/home', (req, res) => res.render('pages/index'))
  .get('/about', (req, res) => res.render('pages/about'))
  .get('/services', (req, res) => res.render('pages/services'))
  .get('/projects', (req, res) => res.render('pages/projects'))
  .get('/contact', (req, res) => res.render('pages/contact'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
