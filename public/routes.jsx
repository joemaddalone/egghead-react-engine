'use strict'

var React = require('react');
var Router = require('react-router');

var App = require('./views/app.jsx');
var Index = require('./views/index.jsx');
var Egghead = require('./views/egghead.jsx');

var routes = (
  <Router.Route handler={App}>
    <Router.Route name="home" path="/" handler={Index} />
    <Router.Route name="egghead" path="/:id" handler={Egghead} />
  </Router.Route>
);

module.exports = routes;
