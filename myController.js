module.exports = {


   
    
    Salazar: (req,res)=> {
        console.log('in Salazar function')
    let obj = {
            progression: "Login",
            description: "Interface Loads",
            result: 'res',
            step: 1,
            element: {type: "class", elem: "login-panel"},
            action: '',
            png: "ss47",
       }

       if (obj.action === '') {
           obj.action = 'none';
       }


       var exec = require('child_process').exec;

       exec('npm run phantom ' + obj.element.type + ' ' + 
       obj.element.elem + ' ' + obj.action + ' ' + obj.png,
            function (error, stdout, stderr) {
                console.log('redirecting to phantom');
                console.log(stdout);
                res.end();
            }
        );
    
    
    
    
    
    
    
    //    let obj = {name: 'anto', age: '27', location: 'Pasadena'}
    

    //     exec('phantomjs phantomsnap.js http://www.google.com', function(error, stdout, stderr) {
    //         console.log('taking screenshots...')
    //     });
    //    console.log('helloooooo')

    }
}
