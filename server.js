'use strict';

require('node-jsx').install();

var express = require('express');
var renderer = require('react-engine');
var app = express();
var engine = renderer.server.create();

app.engine('.jsx', engine);
app.set('views', __dirname + '/public/views');
app.set('view engine', 'jsx');
app.set('view', renderer.expressView);

app.use(express.static(__dirname + '/public'));


var index = function(req, res){
  res.render('index', {
    title: req.params.msg || 'HOME'
  })
}

app.get('', index);
app.get('/:msg', index);

app.listen(4000);
