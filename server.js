'use strict';

const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const fsmonitor = require('fsmonitor');
const modifiedObj = require('./changedFiles.json');

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


  fs.writeFile(__dirname + '/paths.json', JSON.stringify(req.body, null, '\t'), function(){
      console.log(req);
      res.end();
  });
})

app.get('/changed', function(req, res) {
    let json = modifiedObj;
    res.send(json["modified"]);
})


fsmonitor.watch(__dirname + '/src/app/components', null, function(change) {
    
    console.log("Change detected: " + change);  //has a nice toString

    // console.log("Added files:    %j", change.addedFiles);
    // console.log("Modified files: %j", change.modifiedFiles);
    // console.log("Removed files:  %j", change.removedFiles); 

    console.log('modifiedObj: ', modifiedObj)
    console.log('modifiedKeys ', Object.keys(modifiedObj))

    let currFile = change.modifiedFiles[0];

    if (Object.keys(modifiedObj) === undefined || Object.keys(modifiedObj).length < 1) {
      console.log('modified ', modifiedObj.keys);
      let modifiedReq = {};
      modifiedReq["modified"] = {};
      modifiedReq["modified"][[currFile]] = true;
      modifiedReq["counter"] = 1;
      console.log('the object!!!', JSON.stringify(modifiedReq, null, '\t'))

      fs.writeFile(__dirname + '/changedFiles.json', JSON.stringify(modifiedReq, null, '\t'), function(){
        console.log(modifiedReq);
      });
    } else {
      console.log('in else')
      let json = modifiedObj;
      console.log(currFile, ' ready to push')
      console.log(json["modified"])
      json["modified"][[currFile]] = true;
      json["counter"]++;

      fs.writeFile(__dirname + '/changedFiles.json', JSON.stringify(json, null, '\t'), function(){
        console.log(json);
      });
    }

      

      console.log('escaped appendfile')

      // if (!modifiedObj["modified"][currFile[0]]) {
      //     modifiedObj["modified"][currFile[0]] = true;
      //     modifiedObj["counter"]++;
      // }

    // console.log("Added folders:    %j", change.addedFolders);
    // console.log("Modified folders: %j", change.modifiedFolders);
    // console.log("Removed folders:  %j", change.removedFolders);
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