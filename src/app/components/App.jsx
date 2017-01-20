import React from 'react';
import ProgressionsPanel from './ProgressionsPanel.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			progressions: [
							{ id: 1, name: 'Successful Login',  actions: []},
							{ id: 2, name: 'Unsuccessful Login: invalid username', actions: [] },
							{ id: 3, name: 'Unsuccessful Login: no info provided', actions: [] }
						]
		};

		this.addProgression = this.addProgression.bind(this);
		this.addSnapActionSet = this.addSnapActionSet.bind(this);
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
			progressions.push({ id: (progressions.length + 1), name: name });
			this.setState({ progressions: progressions });
		}
	}

	addSnapActionSet(id, name) {
		var progressions = this.state.progressions.slice();
		var progressionFound = false;
		for (var progression in progressions) {
			console.log("prog", progressions[progression]);
			if (progressions[progression].id === id) {
				progressionFound = true;
				progressions[progression].actions.push({ name: name, actionSet: [] })
				break;
			}
		}

		if (progressionFound) {
			this.setState({ progressions: progressions });
		}
	}

	render() {
      return (
      	<div className="app">
	        <div>
	        	Eagle Eye - Let's do this!
	        </div>

			<ProgressionsPanel progressions={this.state.progressions} addProgression={ this.addProgression } addSnapActionSet={ this.addSnapActionSet }/>
		</div>
      );
   }
}

export default App;
