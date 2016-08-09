'use strict';

var React = require('react');
var Router = require('react-router');

var Index = require('./views/index.jsx');
var App  = require('./views/app.jsx');

var routes = (
  <Router.Route component={App}>
    <Router.Route path="/" component={Index}></Router.Route>
    <Router.Route path="/person/:id" component={Index}></Router.Route>
  </Router.Route>
);

module.exports = routes;
