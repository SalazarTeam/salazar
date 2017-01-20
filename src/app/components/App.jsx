import React from 'react';
import ProgressionsPanel from './ProgressionsPanel.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			progressions: [
							{ name: 'Successful Login' },
							{ name: 'Unsuccessful Login: invalid username' },
							{ name: 'Unsuccessful Login: no info provided' }
						]
		};

		this.addProgression = this.addProgression.bind(this);
	}

	addProgression(name) {
		var progressions = this.state.progressions.slice();
		var duplicateName = false;
		for (var progression in progressions) {
			console.log("prog", progressions[progression]);
			if (progressions[progression].name === name) {
				duplicateName = true;
			}
		}

		if (!duplicateName) {
			progressions.push({ name: name });
			this.setState({ progressions: progressions });
		}
	}

	render() {
      return (
      	<div className="app">
	        <div>
	        	Eagle Eye - Let's do this!
	        </div>

			<ProgressionsPanel progressions={this.state.progressions} addProgression={this.addProgression}/>
		</div>
      );
   }
}

export default App;
