var snapshot = require('./snapshot.js');

import React from 'react';

class App extends React.Component {


   render() {
      return (
         <div id="snap1" ref="hello">
            Eagle Eye - Let's do this!
            {snapshot.snap("#snap1")}
         </div>
      );
   }
}

export default App;
