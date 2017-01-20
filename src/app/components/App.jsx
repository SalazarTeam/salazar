import React from 'react';
import ProgressionsPanel from './ProgressionsPanel.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			progressions: [
							// { id: 0, name: 'Successful Login',  actionSets: []},
							// { id: 1, name: 'Unsuccessful Login: invalid username', actionSets: [] },
							// { id: 2, name: 'Unsuccessful Login: no info provided', actionSets: [] }
						]
		};

		this.addProgression = this.addProgression.bind(this);
		this.addSnapActionSet = this.addSnapActionSet.bind(this);
		this.addSnapAction = this.addSnapAction.bind(this);
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
			console.log("good to add");
			progressions.push({ id: progressions.length, name: name, actionSets: [] });
			console.log("Now progs: ", progressions);
			this.setState({ progressions: progressions });
		}
	}

	addSnapActionSet(id, name) {
		var progressions = this.state.progressions.slice();
		var progressionFound = false;
		for (var progression in progressions) {
			if (progressions[progression].id === id) {
				progressionFound = true;
				progressions[progression].actionSets.push({ id: (progressions[progression].actionSets.length), name: name, actions: [] })
				break;
			}
		}

		if (progressionFound) {
			this.setState({ progressions: progressions });
		}
	}

	addSnapAction(id, actionSetId, name, element, type, value) {
		console.log("SO, ", id, actionSetId, name);
		var progressions = this.state.progressions.slice();
		var progressionFound = false;
		for (var progression in progressions) {
			console.log("prog", progressions[progression]);
			if (progressions[progression].id === id) {
				progressionFound = true;
				console.log("Go it: ", progressions[progression].actionSets[actionSetId]);
				progressions[progression].actionSets[actionSetId].actions.push({ name: name, element: element, type: type, value: value });
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

			<ProgressionsPanel progressions={this.state.progressions} addProgression={ this.addProgression } addSnapActionSet={ this.addSnapActionSet } addSnapAction={ this.addSnapAction }/>
		</div>
      );
   }
}

export default App;
