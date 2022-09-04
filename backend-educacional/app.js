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
    console.log('app.js Database connection: ' + connectionSample);
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

module.exports = app;
