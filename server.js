'use strict';

require('node-jsx').install();

var express = require('express');
var renderer = require('react-engine');
var eggheads = require('./public/data/eggheads');
var app = express();
var engine = renderer.server.create({
  routes: __dirname + '/public/routes.jsx',
  routesFilePath: __dirname + '/public/routes.jsx'
});

app.engine('.jsx', engine);
app.set('views', __dirname + '/public/views');
app.set('view engine', 'jsx');
app.set('view', renderer.expressView);

app.use(express.static(__dirname + '/public'));


var handler = function(req, res){
  var title = 'Egghead List';
  var id = req.params.id;
  if(id){
    var egghead = eggheads.egghead(id);
    if(egghead){
      title = egghead.fname + ' ' + egghead.lname
    }
  }
  res.render(req.url, {
    title: title
  })
}

app.get('', handler);
app.get('/:id', handler);

app.listen(4000);
