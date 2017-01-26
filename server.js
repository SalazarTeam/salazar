const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const fsmonitor = require('fsmonitor');

const app = express();



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './')));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/login', (req, res) => {
  Message.find((err, msgs) => {
    if (err) console.log(err);
    else console.log('msgs',msgs);
    res.send(msgs);
  });
});

app.post('/paths', function(req, res) {
  console.log('in /message post');
  
  var fs = require('fs');
  // console.log('writing ' + req.body);
  fs.writeFile(__dirname + '/paths.json', JSON.stringify(req.body), function(){
      console.log(req);
      res.end();
  });
})


fsmonitor.watch(__dirname + '/src', null, function(change) {
    console.log("Change detected:\n" + change);  //has a nice toString

    console.log("Added files:    %j", change.addedFiles);
    console.log("Modified files: %j", change.modifiedFiles);
    console.log("Removed files:  %j", change.removedFiles);

    console.log("Added folders:    %j", change.addedFolders);
    console.log("Modified folders: %j", change.modifiedFolders);
    console.log("Removed folders:  %j", change.removedFolders);
});

var monitor = fsmonitor.watch('.', {
    // include files
    matches: function(relpath) {
        return relpath.match(/\.js$/i) !== null;

    },
    // exclude directories
    excludes: function(relpath) {
        return relpath.match(/^\.git$/i) !== null;
    }
});
monitor.on('change', function(changes) {
    console.log(changes);
});



app.listen(3000);