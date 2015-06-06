'use strict';

var React = require('react');
var Router = require('react-router');

var App = require('./views/app.jsx');
var Index = require('./views/index.jsx');
var Home = require('./views/home.jsx');

var routes = (
  <Router.Route handler={App}>
    <Router.Route path="/" name="home" handler={Home} />
    <Router.Route path="/:id" name="person" handler={Index} />
  </Router.Route>
);

module.exports = routes
