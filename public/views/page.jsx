var React = require('react');

var Page = React.createClass({
  render:function(){
    return (
        <html>
          <head>
            <title>{this.props.title}</title>
          </head>
          <body>
            {this.props.children}
            <script src="/bundle.js"></script>
          </body>
        </html>
      )
  }
});

module.exports = Page;
