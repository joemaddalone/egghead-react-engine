'use strict'
var React = require('react');
var eggheads = require('../data/eggheads');

var Egghead = React.createClass({
  render:function(){
    var content;
    var egghead = eggheads.egghead(this.props.params.id);
    if(egghead){
      content = (
        <div>
          <h1>{egghead.fname + ' ' + egghead.lname}</h1>
          <img src={'https://avatars.githubusercontent.com/' + egghead.g} width="100" height="100"/>
        </div>
      );
    }
    else {
      content = <h1>Not Found</h1>
    }
    return content;
  }
});

module.exports = Egghead;
