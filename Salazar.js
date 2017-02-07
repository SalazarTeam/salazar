let currProgression = '';
let progressionString = '';

console.log('in mycontroller')

function Salazar(obj) {
        var exec = require('child_process').exec;
        console.log('in Salazar function')
    
    // let obj = {
    //         progression: "Login",
    //         description: "Interface Loads",
    //         result: 'res',
    //         step: 1,
    //         element: {type: "Id", elem: "filepath"},
    //         text: 'ilovetesting',
    //         action: 'value',
    //         png: "ss47",
    //    }

       if (obj.action === '') {
           obj.action = 'none';
       }
       if (obj.text === '') {
           obj.text = 'none';
       }
       
       if (currProgression !== obj.progression) {
           currProgression = obj.progression;
           progressionString = '';           
       } 
           
       progressionString += obj.action + ' ' + 
       obj.element.type + ' ' + obj.element.elem + ' ' + obj.png + ' ' + obj.text + ' ';

       exec('npm run phantom ' + progressionString,
            function (error, stdout, stderr) {
                if (error) console.log (error);
                if (stderr) console.log(stderr);
                console.log('redirecting to phantom');
                console.log(stdout);
            }
        );
    
    
    
    
    
    
    
    //    let obj = {name: 'anto', age: '27', location: 'Pasadena'}
    

    //     exec('phantomjs phantomsnap.js http://www.google.com', function(error, stdout, stderr) {
    //         console.log('taking screenshots...')
    //     });
    //    console.log('helloooooo')

    }

  Salazar({
            progression: "feelinglucky",
            description: "put ilovetesting in filepath bar",
            result: 'res',
            step: 1,
            element: {type: "Id", elem: "timechoice"},
            text: 'ilovetesting',
            action: 'value',
            png: "fl1",
          })

   Salazar({
            progression: "feelinglucky",
            description: "click on the button",
            result: 'res',
            step: 2,
            element: {type: "Id", elem: "filepathbtn"},
            text: '',
            action: 'onClick',
            png: "fl2",
          })
    
    Salazar({
            progression: "feelinglucky",
            description: "put ilovetesting on the filepath bar",
            result: 'res',
            step: 3,
            element: {type: "Id", elem: "filepath"},
            text: 'ilovetesting',
            action: 'value',
            png: "fl3",
          })
    Salazar({
            progression: "feelinglucky",
            description: "click on the button",
            result: 'res',
            step: 2,
            element: {type: "Id", elem: "filepathbtn"},
            text: '',
            action: 'onClick',
            png: "fl4",
          })

    Salazar({
            progression: "newprogression",
            description: "puts newprogressionnnn in the timechoice bar",
            result: 'res',
            step: 1,
            element: {type: "Id", elem: "timechoice"},
            text: 'newprogressionnnnn',
            action: 'value',
            png: "np1",
          })

    Salazar({
        progression: "greenbackground",
        description: "makes background green",
        result: 'res',
        step: 1,
        element: {type: "Id", elem: "filepathbtn"},
        text: '',
        action: 'onClick',
        png: "gb1",
    })

    Salazar({
        progression: "greenbackground",
        description: "puts ilovetesting on filepath",
        result: 'res',
        step: 1,
        element: {type: "Id", elem: "filepath"},
        text: 'ilovetesting',
        action: 'value',
        png: "gb2",
    })

    Salazar({
        progression: "greenbackground",
        description: "clicks btn on green background",
        result: 'res',
        step: 1,
        element: {type: "Id", elem: "newtimechoice"},
        text: '',
        action: 'onClick',
        png: "gb3",
    })


