const express = require('express')
const path = require('path')
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const router = express.Router();

// const PORT = process.env.PORT || 5001
let views = path.join(__dirname, '../');

const app = express()
            .use(express.static(path.join(__dirname, 'public')))
            .set('views', path.join(__dirname, 'views'))
            .set('view engine', 'ejs')
            // .get('/', (req, res) => res.render('pages/index'))
            // .get('/home', (req, res) => res.render('pages/index'))
            // .get('/about', (req, res) => res.render('pages/about'))
            // .get('/services', (req, res) => res.render('pages/services'))
            // .get('/projects', (req, res) => res.render('pages/projects'))
            // .get('/contact', (req, res) => res.render('pages/contact'))
//  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

router.get('/', (req, res) => {
    res.sendFile('index.html', { root: views });
});

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda (express/server.js)

module.exports = app;
module.exports.handler = serverless(app);