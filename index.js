var Snapshot = require('./nightmaresnap.js');
var fs = require('fs');


function Salazar(obj) {
    //Compiled list of all test cases
    this.compiled = [];
    //Keeps track of which group of tests you're in
    this.currProgression = '';
    //Holds the path that the user submitted with salazar.path
    this.getPath = '';

    //Sets the path given by user to getPath, which gets accessed by Nightmare later
    this.path = function(str){this.getPath = str;}

    //Runs the algorithm to create the Nightmare command depending on all of your test cases
    this.run = function(obj) {
        this.compiled.push(obj);

        if (obj.end === 'true') {
            let snapshotString = 'nightmare.goto(path)';
            this.currProgression = '';

            function evaluatePosition(currObj) {
                //Does the test fill a field with a value? 
                if (currObj.action === 'value') {
                    snapshotString += '.insert(\'' + currObj.element + '\', \'' + currObj.text + '\').wait().screenshot(\'./Screenshots/' + currObj.png + '.png\')\n'; 
                    }

                //Does the test click on a button?
                if (currObj.action === 'onClick') {
                    snapshotString += '.click(\'' + currObj.element + '\').wait(100).screenshot(\'./Screenshots/' + currObj.png + '.png\')\n';
                }
            }

            count = 0;
            //Checking to see if the tests are in the same group, by the progression names
            for (let i=0; i<this.compiled.length; i++) {
                if (this.currProgression === '') {
                    this.currProgression = this.compiled[i];
                }
                if (this.compiled[i].progression === this.currProgression) {
                    evaluatePosition(this.compiled[i]);
                } else {
                    this.currProgression = this.compiled[i].progression;
                    snapshotString += '.then(function(result){\nnightmare.goto(path)';
                    count++;
                    evaluatePosition(this.compiled[i]); 
                }
                if (i === this.compiled.length - 1) {
                    snapshotString += '.end()'
                    snapshotString += '.then(function(result){\n})'
                    for (let j=0; j<count; j++) {
                        snapshotString += '})';
                    }
                    snapshotString += '.catch(function(error){\nconsole.error(\'Search failed:\', error);\n})' 
                }
            }

            //writes the full list of objects to text database
            fs.writeFile(__dirname + '/progressions.json', JSON.stringify(this.compiled, null, '\t'), function(){
                console.log('wrote to progressions.json');
            });

            Snapshot(snapshotString);
        }
    }
}



var salazar = module.exports = exports = new Salazar;





