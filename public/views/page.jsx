var React = require('react');
var Router = require('react-router');
var eggheads = require('../data/eggheads');

var Page = React.createClass({
  render:function(){
    var nav = eggheads.data.map(function(egghead){
      return (
        <li key={egghead.id} >
          <Router.Link to={'/egghead/' + egghead.id}>
            {egghead.fname + ' ' + egghead.lname}
          </Router.Link>
        </li>
      );
    })
    return (
        <html>
          <head>
            <title>{this.props.title}</title>
          </head>
          <body>
            <ul>{nav}</ul>
            {this.props.children}
            <script src="/bundle.js"></script>
          </body>
        </html>
      )
  }
});

module.exports = Page;
