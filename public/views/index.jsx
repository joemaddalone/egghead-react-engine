var React = require('react');
var Page = require('./page.jsx');

var Index = function(props){
    return (
        <Page {...props}>
          <h1>{props.title}</h1>
        </Page>
      )
  };

module.exports = Index;
