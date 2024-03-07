'use strict';
const app = require('./express/server');
const path = require('path');

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Local request handlers.
app.get('/', (req, res) => {
  res.render('pages/index');
  res.send('Hello World!')  
});


// Start Server.
let port = 3005;
app.listen(port, function(){
  console.log(`Server started on port ${port}...`);
});