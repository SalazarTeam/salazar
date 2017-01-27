import React from 'react';
//App Components
import App from './App.jsx';

//Salazar dependencies
import Overhaul from '../../overhaul/Overhaul.jsx';



class Environment extends React.Component {
	constructor() {
		super();

		this.state = {
		}

	}

   render() {
      return (
         <div>
            <Overhaul envState={this.state}/>
            <App envState={this.state}/>
         </div>
      );
   }
}

export default Environment;