'use strict';

var Client = require('react-engine/lib/client');
var Routes = require('./routes.jsx');

require('./views/**/*.jsx', {glob: true});

var options = {
  routes: Routes,
  viewResolver: function(viewName){
    return require('./views/' + viewName);
  }
}

document.addEventListener('DOMContentLoaded', function onLoad(){
  Client.boot(options)
})
