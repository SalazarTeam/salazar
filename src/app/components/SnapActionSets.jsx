import React from 'react';
import SnapActions from './SnapActions.jsx';

class SnapActionSets extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			showAddSnapActionSetPanel: false,
			newSnapActionSetName: ""
		}

		this.toggleAddSnapActionSetsPanel = this.toggleAddSnapActionSetsPanel.bind(this);
		this.handleNewSnapActionSetsName = this.handleNewSnapActionSetsName.bind(this);
		this.handleAddNewSnapActionSets = this.handleAddNewSnapActionSets.bind(this);
	}

	toggleAddSnapActionSetsPanel(event) {
		event.preventDefault();
		if (this.state.showAddSnapActionSetPanel) {
			this.setState({ showAddSnapActionSetPanel: false, newSnapActionSetName: "" });
		} else {
			this.setState({ showAddSnapActionSetPanel: true });
		}
	}

	handleNewSnapActionSetsName(event) {
		this.setState({ newSnapActionSetName: event.target.value });
	}

	handleAddNewSnapActionSets() {
		if (this.state.newSnapActionSetName) {
			console.log("Attempt add", this.state.newSnapActionSetName);
			this.props.addSnapActionSet(this.props.progressionId, this.state.newSnapActionSetName);
			this.setState({ showAddSnapActionSetPanel: false, newSnapActionSetName: '' });
			this.refs['progression-name'].value = "";
		}
	}

	handleRemoveSnapActionSets(name) {}

	render() {
		var snapActions = this.props.snapActions.map(function(snapAction, i) {
			return <li key={i}>{snapAction.id} { snapAction.name }</li>;
		});

		if (!snapActions.length) {
			snapActions = <li className="no-snap-actions">Add a snap action!</li>;
		}

		var addSnapActionSetPanel = <button onClick={this.toggleAddSnapActionSetsPanel}>+ New SnapActionSets</button>;
		if (this.state.showAddSnapActionSetPanel) {
			addSnapActionSetPanel = (
				<div>
					<input id="progression-name" ref="progression-name" placeholder="SnapActionSets Name" onChange={this.handleNewSnapActionSetsName} />
					<button onClick={this.handleAddNewSnapActionSets}>Add</button>
					<a href="#" onClick={this.toggleAddSnapActionSetsPanel}>Cancel</a>
				</div>
			);
		}
		return (
			<div className="snap-actions-panel">
				<h2>Snap Actions Panel</h2>
				{ addSnapActionSetPanel }
				<ul className="snap-actions">
					{ snapActions }
				</ul>
			</div>
		);
   }
}

export default SnapActionSets;