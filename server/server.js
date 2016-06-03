'use strict'

let express = require('express');
let app = express();
let routes = require('../routes/router');
app.use('/',routes);
let path = require('path');
app.set('port', process.env.PORT || 8080);
app.use("/styles", express.static(path.join(__dirname, '../styles')));
app.use("/js/bundle", express.static(path.join(__dirname, '../js/bundle')));


let server = app.listen(app.get('port'), () =>{
   console.log("App is running.");
});
