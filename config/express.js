var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

module.exports = () => {
    var app = express();

    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    app.set('view options', {layout: false});
    app.use('/static', express.static('static'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    consign({cwd : 'app'})
       .include('modelsDAO')
       .then('routes')
       .into(app)

    return app;
}