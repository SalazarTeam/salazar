var Nightmare = require('nightmare');       
var nightmare = Nightmare({ show: true });
var open = require('open');

module.exports =  (obj) => {
    var salazar = require('./index.js');
    let path = salazar.getPath;
    eval(obj);
}