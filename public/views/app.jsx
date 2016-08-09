'use strict';

var React = require('react');
var Router = require('react-router');
var Page = require('./page.jsx');

var App = React.createClass({
  render:function(){
    return (
      <Page {...this.props}>
        {this.props.children}
      </Page>
    );
  }
});

module.exports = App;
