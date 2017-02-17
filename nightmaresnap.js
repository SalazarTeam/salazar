var Nightmare = require('nightmare');       
var nightmare = Nightmare({ show: true });


module.exports =  (obj) => {
    var salazar = require('./index.js');
    let path = salazar.getPath;
    eval(obj);
}