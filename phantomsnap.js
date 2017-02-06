
var system = require('system');
var args = require('system').args;

// console.log('in phantomjs')


//to be replaced with localhost:3000
var address = 'http://www.google.com';

//prints the arguments passed into it for our reference
for (var i=1; i<system.args.length; i++) {
  console.log(system.args[i]);
}

//just testing system args
var blah = system.args[1];
page.open(address , function () {
    
    //taking the screenshot, putting it in screenshots folder, and naming it the first argument for lols
    page.render('./Screenshots/' + blah + '.png');
    phantom.exit();

page.open('http://localhost:3000/', function() {
  page.render('localhost.png');
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



