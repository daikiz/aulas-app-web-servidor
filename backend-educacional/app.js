var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var pessoaRouter = require('./routes/pessoa');
var turmaRouter = require('./routes/turma');

var app = express();

// DEV = DESENVOLVIMENTO
// TEST/QA = TIME DE QA VALIDAR O SISTEMA
// HOMOLOGACAO = CLIENTE VALIDAR O SISTEMA 
// PROD - AMBIENTE REAL FINAL DE PRODUÇAÕ

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/pessoas', pessoaRouter);
app.use('/turmas', turmaRouter);

module.exports = app;
