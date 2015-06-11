'use strict';

var React = require('react');
var Router = require('react-router');

var Page = React.createClass({
  render:function(){
    return (
        <html>
          <head>
            <title>{this.props.title}</title>
          </head>
          <body>
            <ul>
              {[1,2,3,4,5,6,7,8,9,0].map(function(item){
                return (
                  <li key={item}>
                    <Router.Link to="person" params={{id: item}}>
                      Person # {item}
                    </Router.Link>
                  </li>
                );
              })}
            </ul>
            {this.props.children}
            <script src="/bundle.js"></script>
          </body>
        </html>
      )
  }
});

module.exports = Page;
