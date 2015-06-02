var React = require('react');
var Page = require('./page.jsx');

var Index = React.createClass({
  clickHandler: function(){
    alert(this.props.title)
  },
  render:function(){
    return (
        <div>
          <h1>{this.props.title}</h1>
          <button onClick={this.clickHandler}>Click</button>
        </div>
      )
  }
});

module.exports = Index;
