import React from 'react';
import SnapActionSets from './SnapActionSets.jsx';

class ProgressionsPanel extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			showAddProgressionPanel: false,
			newProgressionName: ""
		}

		this.toggleAddProgressionPanel = this.toggleAddProgressionPanel.bind(this);
		this.handleNewProgressionName = this.handleNewProgressionName.bind(this);
		this.handleAddNewProgression = this.handleAddNewProgression.bind(this);

		this.handleAddSnapActionSet = this.handleAddSnapActionSet.bind(this);
	}

	toggleAddProgressionPanel(event) {
		event.preventDefault();
		if (this.state.showAddProgressionPanel) {
			this.setState({ showAddProgressionPanel: false, newProgressionName: "" });
		} else {
			this.setState({ showAddProgressionPanel: true });
		}
	}

	handleNewProgressionName(event) {
		this.setState({ newProgressionName: event.target.value });
	}

	handleAddNewProgression() {
		if (this.state.newProgressionName) {
			console.log("Attempt add", this.state.newProgressionName);
			this.props.addProgression(this.state.newProgressionName);
			this.setState({ showAddProgressionPanel: false, newProgressionName: '' });
			this.refs['progression-name'].value = "";
		}
	}

	handleAddSnapActionSet() {
		this.props.addSnapActionSet();
	}

	handleRemoveProgression(name) {}

	render() {
		var progressions = this.props.progressions.map(function(progression, i) {
			return (
					<li key={i}>
						<h3>{ progression.name }</h3>
						<SnapActionSets progressionId={ progression.id } snapActionSets={ progression.actionSets } addSnapActionSet={ this.props.addSnapActionSet } addSnapAction={ this.props.addSnapAction } />
					</li>
			);
		}.bind(this));

		var addProgressionsPanel = <button onClick={this.toggleAddProgressionPanel}>+ New Progression</button>;
		if (this.state.showAddProgressionPanel) {
			addProgressionsPanel = (
				<div>
					<input ref="progression-name" placeholder="Progression Name" onChange={this.handleNewProgressionName} />
					<button onClick={this.handleAddNewProgression}>Add</button>
					<a href="#" onClick={this.toggleAddProgressionPanel}>Cancel</a>
				</div>
			);
		}
		return (
			<div className="progressions-panel">
				<h2>Progressions Panel</h2>
				{ addProgressionsPanel }
				<ul className="progressions">
					{ progressions }
				</ul>
			</div>
		);
   }
}

export default ProgressionsPanel;