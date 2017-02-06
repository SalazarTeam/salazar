var page = require('webpage').create();
var system = require('system');
var args = require('system').args;

// console.log('in phantomjs')

var address = 'http://www.google.com';
for (var i=1; i<system.args.length; i++) {
  console.log(system.args[i]);
}
var blah = system.args[1];
page.open(address , function () {
    page.render('./Screenshots/' + blah + '.png');
    phantom.exit();
});


// page.open('http://localhost:3000/', function() {
  
//   page.render('test.png');

//   page.evaluate(function() {
//    document.getElementById('filepathbtn').click();
//   });

//   page.render('test2.png');
// //   console.log('made both new screenshots')
// //   page.injectJS(myController.js);
// //      console.log(myVar);

//   phantom.exit();
// });



