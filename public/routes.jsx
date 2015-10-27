'use strict'

var React = require('react');
var Router = require('react-router');

var App = require('./views/app.jsx');
var Index = require('./views/index.jsx');
var Egghead = require('./views/egghead.jsx');

var routes = (
  <Router.Route component={App}>
    <Router.Route path="/" component={Index} />
    <Router.Route path="/egghead/:id" component={Egghead} />
  </Router.Route>
);

module.exports = routes;
