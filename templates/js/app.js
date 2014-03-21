'use strict';
var kopress = require('./kopress.js');
var router = require('./router.js');

var app = kopress();
router(app);

app.listen(3000);
console.log('Kopress listen on port 3000');