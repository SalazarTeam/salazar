var page = require('webpage').create();
var system = require('system');
var args = require('system').args;

console.log('in phantomjs')

var manip = '';
var address = 'http://localhost:3000';
var blah = system.args[1];

console.log(system.args.length);
   
   

page.open(address , function () {  
        
      var i=1;  
      var arr = []  
      while (i < system.args.length) {
      //  var manip = '';
      console.log('start of while loop, arr is: ', arr);
      console.log('address is: ', address)
      console.log('----------------in while loop, i is ' + i + '----------------')
      var action = system.args[i];
      var type = system.args[i+1];
      var elem = system.args[i+2];
      var png = system.args[i+3];
      var value = system.args[i+4];

      console.log(action, type, elem, png, value);

      if (action === 'onClick') {
        console.log('in onClick')
        arr.push('function(){document.getElementBy' + type + '(\"' + elem + '\").click();}');
        console.log('after onclick, arr is: ', arr);    
      }
      if (action === 'value') {
        console.log('in value')
        arr.push('function(){document.getElementBy' + type + '(\"' + elem + '\").value=\'' + value +'\';}');
        console.log('after value, arr is: ', arr);
      }

        for (var j=0; j<arr.length; j++) {
          console.log('evaluating... ', arr[j])
          page.evaluate(arr[j]);
        }
        
        page.render('./Screenshots/' + png + '.png');
      
        
        
      // console.log(manip);  
      
      i=i+5; 
   }
     
  phantom.exit();
  });














//WORKING EXAMPLE OF TEST AFTER A TEST. CLICKS ON THE BUTTON AND THEN 
//CHANGES VALUE OF A FIELD.


// page.open('http://localhost:3000/', function() {
  
//   page.render('test.png');

//   page.evaluate(function() {
//    document.getElementById('filepathbtn').click();
//   });

//   page.evaluate(function() {
//    document.getElementById('filepath').value="hello";
//   });  

//   page.render('test2.png');

//   phantom.exit();
// });