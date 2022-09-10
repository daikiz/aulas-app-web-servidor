var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var peopleRouter = require('./routes/people');
var teacherRouter = require('./routes/teacher');

var db = require('./db');
// execute outside async block
db.connect();

// execute inside async block
(async () => {
    var connectionSample = await db.connect();
    console.log('app.js - using nodemon Database connection: ' + connectionSample);
})();

var app = express();

// Environment list available
// DEV = development
// TEST/QA = QA team will validate the system
// HOMOLOG = The client will validate the system 
// PROD = Real / final production environment

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/people', peopleRouter);
app.use('/teacher', teacherRouter);

// start node server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App UI available http://localhost:${port}`);
  // console.log(`Swagger UI available http://localhost:${port}/swagger/api-docs`);
});

// refernecia: https://github.com/IBM/nodejs-express-app/blob/master/server/server.js
// error handler for unmatched routes or api calls
// app.use((req, res, next) => {
  // res.sendFile(path.join(__dirname, '../public', '404.html'));
// });

module.exports = app;
