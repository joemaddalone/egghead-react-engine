'use strict';

var React = require('react');
var Router = require('react-router');

var Index = require('./views/index.jsx');
var App  = require('./views/app.jsx');

var routes = (
  <Router.Route handler={App}>
    <Router.Route path="/" name="home" handler={Index}></Router.Route>
    <Router.Route path="/:id" name="person" handler={Index}></Router.Route>
  </Router.Route>
);

module.exports = routes;
