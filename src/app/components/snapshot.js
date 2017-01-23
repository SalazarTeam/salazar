// let page = require('webpage').create();
var React = require('react');
var ReactDOM = require('react-dom');

// import React from 'react';

let snapshot = {
  snap: function(selector) {
    $(document).ready(function() {
      // $(selector).clone().appendTo("#staging");
      console.log("Get what you are saying - to import to 2nd part of le snap!")
      console.log($("#staging").html());
      console.log($(selector).html());
    })
    // React.findDOMNode(selector.ref);
    // console.log(selector)



  }
};

module.exports = snapshot;
