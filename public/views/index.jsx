var React = require('react');
var Page = require('./page.jsx');

var Index = React.createClass({
  render:function(){
    return (
        <Page {...this.props}>
          <h1>{this.props.title}</h1>
        </Page>
      )
  }
});

module.exports = Index;
