import React from 'react';
import IndexPage from './IndexPage'
import ProgressionsPanel from './ProgressionsPanel.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			progressions: [
							// { id: 0, name: 'Successful Login',  actionSets: []},
							// { id: 1, name: 'Unsuccessful Login: invalid username', actionSets: [] },
							// { id: 2, name: 'Unsuccessful Login: no info provided', actionSets: [] }
						],
			appState: {}
		};

		this.addProgression = this.addProgression.bind(this);
		this.addSnapActionSet = this.addSnapActionSet.bind(this);
		this.addSnapAction = this.addSnapAction.bind(this);
		this.sampleSnap = this.sampleSnap.bind(this);
	}

	addProgression(name) {
		var progressions = this.state.progressions.slice();
		var duplicateName = false;
		for (var progression in progressions) {
			if (progressions[progression].name === name) {
				duplicateName = true;
			}
		}

		if (!duplicateName) {
			progressions.push({ id: progressions.length, name: name, actionSets: [] });
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

	addSnapAction(id, actionSetId, name, element, key, type, value) {
		var progressions = this.state.progressions.slice();
		var progressionFound = false;
		for (var progression in progressions) {
			if (progressions[progression].id === id) {
				progressionFound = true;
				progressions[progression].actionSets[actionSetId].actions.push({ name: name, element: element, key: key, type: type, value: value });
				break;
			}
		}

		if (progressionFound) {
			this.setState({ progressions: progressions });
		}
	}

	sampleSnap() {
		var progressions = this.state.progressions;
		//iterate through each progression
		Object.keys(progressions).forEach(function(progression){
			var appState = {};
			//reset the appState to start from initial point for this progression

			this.setState({appState: appState});
			//iterate through each action of a given progressions actionSets
			Object.keys(progressions[progression].actionSets).forEach(function(actionSet){
				//and set the appState associated with each action for this actionSet
				Object.keys(progressions[progression].actionSets[actionSet].actions).forEach(function(action){
					var currentAction = progressions[progression].actionSets[actionSet].actions[action];
					appState[currentAction.key] = currentAction.value;

					this.setState({appState: appState});
				}.bind(this));

				console.log("State 'Snap Shot' for progression banel : " + progressions[progression].actionSets[actionSet].name, appState);

				//
				//
				//
				//Add visual/code/commit and other associated snapshotting here
				//
				//
				//

			}.bind(this));
		}.bind(this));
	}

	render() {
      return (
      	<div className="app">
	        <div>
	        	Eagle Eye - Let's do this!
	        </div>
          <IndexPage />
			    <ProgressionsPanel progressions={this.state.progressions} addProgression={ this.addProgression } addSnapActionSet={ this.addSnapActionSet } addSnapAction={ this.addSnapAction } sampleSnap={ this.sampleSnap } />
		    </div>
      );
   }
}

export default App;
