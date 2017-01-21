const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');

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
  fs.writeFile(__dirname + '/paths.json', JSON.stringify(req.body), function(){
      console.log('wrote file')
      res.end();
  });
})



app.listen(3000);