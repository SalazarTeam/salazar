import React from 'react';

class SnapActions extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			showAddSnapActionPanel: false,
			newSnapActionName: ""
		}

		this.toggleAddSnapActionsPanel = this.toggleAddSnapActionsPanel.bind(this);
		this.handleNewSnapActionsName = this.handleNewSnapActionsName.bind(this);
		this.handleAddNewSnapActions = this.handleAddNewSnapActions.bind(this);
	}

	toggleAddSnapActionsPanel(event) {
		event.preventDefault();
		if (this.state.showAddSnapActionPanel) {
			this.setState({ showAddSnapActionPanel: false, newSnapActionName: "" });
		} else {
			this.setState({ showAddSnapActionPanel: true });
		}
	}

	handleNewSnapActionsName(event) {
		this.setState({ newSnapActionName: event.target.value });
	}

	handleAddNewSnapActions() {
		if (this.state.newSnapActionName) {
			console.log("Attempt add", this.state.newSnapActionName);
			this.props.addSnapAction(this.props.progressionId, this.state.newSnapActionName);
			this.setState({ showAddSnapActionPanel: false, newSnapActionName: '' });
			this.refs['progression-name'].value = "";
		}
	}

	handleRemoveSnapActions(name) {}

	render() {
		var snapActions = this.props.snapActions.map(function(snapAction, i) {
			return <li key={i}>{snapAction.id} { snapAction.name }</li>;
		});

		if (!snapActions.length) {
			snapActions = <li className="no-snap-actions">Add a snap action!</li>;
		}

		var addSnapActionPanel = <button onClick={this.toggleAddSnapActionsPanel}>+ New SnapActions</button>;
		if (this.state.showAddSnapActionPanel) {
			addSnapActionPanel = (
				<div>
					<input id="progression-name" ref="progression-name" placeholder="SnapActions Name" onChange={this.handleNewSnapActionsName} />
					<button onClick={this.handleAddNewSnapActions}>Add</button>
					<a href="#" onClick={this.toggleAddSnapActionsPanel}>Cancel</a>
				</div>
			);
		}
		return (
			<div className="snap-actions-panel">
				<h2>Snap Actions Panel</h2>
				{ addSnapActionPanel }
				<ul className="snap-actions">
					{ snapActions }
				</ul>
			</div>
		);
   }
}

export default SnapActions;