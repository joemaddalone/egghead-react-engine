var React = require('react');
var Page = require('./page.jsx');

var Index = React.createClass({
  render:function(){
    return <h1>This is person # {this.props.params.id}</h1>
  }
});

module.exports = Index;
