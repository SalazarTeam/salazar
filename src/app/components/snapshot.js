let React = require('react');
let ReactDOM = require('react-dom');
let app = require('./App.jsx')
let snapshot = {
  progressionCache: {},
  snap: function(selector) {
    $(document).ready(function() {
      //set cache to store progressions
    const progressionCache = snapshot.progressionCache;

      //modify selector string to only include characters
      const selectorArr = selector.split('');
      selectorArr.shift();
      const selectorString = selectorArr.join('');
      const refinedString = selectorString.replace(/\W/g, '');

      //console.log('refinedString', refinedString);

      if (!progressionCache[refinedString]) {
        progressionCache[refinedString] = {};
        progressionCache[refinedString].count = 0;
        //console.log('count', progressionCache[refinedString].count)
        const copy = $(selector).clone()
        progressionCache[refinedString][progressionCache[refinedString].count] = copy;
        progressionCache[refinedString].count += 1;
      }

      else {
        //console.log('count', progressionCache[refinedString].count)
        const copy = $(selector).clone()
        progressionCache[refinedString][progressionCache[refinedString].count] = copy;
        progressionCache[refinedString].count += 1;
      }

      console.log('progressionCache', progressionCache)
      //
      // if(progressionCache.refinedString) {
      //   // console.log('progressionCache.refinedString else statement', progressionCache.refinedString);
      //   // console.log('count', progressionCache.refinedString.count);
      //   progressionCache.refinedString[progressionCache.refinedString.count] = $(selector);
      //   progressionCache.refinedString.count += 1;
      // }
      //console.log('after everything', progressionCache.refinedString)

    })
 },
 post: function() {
   const progressionCache = snapshot.progressionCache.snap1;
   let objKeys = Object.keys(progressionCache);
   console.log('objKeys', objKeys.length);
   for(let i = 0; i < objKeys.length - 1; i += 1) {
     console.log('progressionCache post', progressionCache[i][0])
     $('#div1').append(progressionCache[i][0]);
   }
 }
};

module.exports = snapshot;
