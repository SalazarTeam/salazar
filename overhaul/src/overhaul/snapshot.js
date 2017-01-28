let React = require('react');
let ReactDOM = require('react-dom');

let snapshot = {
  snap: function(selector) {
    $(document).ready(function() {
      console.log('current selector',$(selector).clone());
      $(selector).clone().appendTo("#staging");
      console.log("Get what you are saying - to import to 2nd part of le snap!")
      console.log('staging html',$("#staging").html());
      console.log('selector html', $(selector).html());
    })
 }
};

module.exports = snapshot;
