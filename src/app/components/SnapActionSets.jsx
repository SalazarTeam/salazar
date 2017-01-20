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
			this.refs['action-set-name'].value = "";
		}
	}

	handleRemoveSnapActionSets(name) {}

	render() {
		var snapActionSets = this.props.snapActionSets.map(function(snapActionSet, i) {
			return (
					<li key={i}>
						<h4>{ snapActionSet.name }</h4>
						<SnapActions progressionId={ this.props.progressionId } snapActionSetId={ snapActionSet.id } snapActions={ snapActionSet.actions } addSnapAction={ this.props.addSnapAction } />
					</li>
			);
		}.bind(this));

		if (!snapActionSets.length) {
			snapActionSets = <li className="no-snap-actions">Add a snap action set!</li>;
		}

		var addSnapActionSetPanel = <button onClick={this.toggleAddSnapActionSetsPanel}>+ New Snap Action Set</button>;
		if (this.state.showAddSnapActionSetPanel) {
			addSnapActionSetPanel = (
				<div>
					<input ref="action-set-name" placeholder="Snap Action Set Name" onChange={this.handleNewSnapActionSetsName} />
					<button onClick={this.handleAddNewSnapActionSets}>Add</button>
					<a href="#" onClick={this.toggleAddSnapActionSetsPanel}>Cancel</a>
				</div>
			);
		}
		return (
			<div className="snap-actions-panel">
				<h2>Snap Action Sets Panel</h2>
				{ addSnapActionSetPanel }
				<ul className="snap-actions">
					{ snapActionSets }
				</ul>
			</div>
		);
   }
}

export default SnapActionSets;