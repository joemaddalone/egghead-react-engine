var React = require('react');

var Page = function(props){
    return (
        <html>
          <head>
            <title>{props.title}</title>
          </head>
          <body>
            {props.children}
          </body>
        </html>
      )
  };

module.exports = Page;
