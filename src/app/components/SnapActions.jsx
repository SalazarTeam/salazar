import React from 'react';

class SnapActions extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			showAddSnapActionPanel: false
		}

		this.toggleAddSnapActionPanel = this.toggleAddSnapActionPanel.bind(this);
		this.handleAddNewSnapAction = this.handleAddNewSnapAction.bind(this);
		this.handleNewSnapActionCriteria = this.handleNewSnapActionCriteria.bind(this);
	}

	toggleAddSnapActionPanel(event) {
		event.preventDefault();
		if (this.state.showAddSnapActionPanel) {
			this.setState({ showAddSnapActionPanel: false, newSnapActionElement: "" });
		} else {
			this.setState({ showAddSnapActionPanel: true });
		}
	}

	handleNewSnapActionCriteria(event) {
		var criteria = {};
		console.log(event.target.name, event.target.value);
		criteria[event.target.name] = event.target.value;
		this.setState(criteria);
	}

	handleAddNewSnapAction() {
		if (this.state.name && (this.state.element || this.state.key) && this.state.type) {
			this.props.addSnapAction(this.props.progressionId, this.props.snapActionSetId, this.state.name, this.state.element, this.state.key, this.state.type, this.state.value);
			this.setState({ showAddSnapActionPanel: false, newSnapActionElement: '' });
			this.refs['action-name'].value = "";
			this.refs['action-element'].value = "";
			this.refs['action-state-key'].value = "";
			this.refs['action-type'].value = "";
			this.refs['action-value'].value = "";
		}
	}

	handleRemoveSnapActions(name) {}

	render() {
		var snapActions = this.props.snapActions.map(function(snapAction, i) {
			return <li key={i}>Action { (i + 1) }. "{ snapAction.name }" - {snapAction.element} => { snapAction.type }({ snapAction.value });</li>;
		});

		if (!snapActions.length) {
			snapActions = <li className="no-snap-actions">Add a snap action!</li>;
		} else {
			snapActions.push(<li key="snap">Snap()!</li>)
		}

		var addSnapActionPanel = <button onClick={this.toggleAddSnapActionPanel}>+ New Snap Action</button>;
		if (this.state.showAddSnapActionPanel) {
			addSnapActionPanel = (
				<div>
					<input name="name" ref="action-name" placeholder="Snap Action Summary" onChange={this.handleNewSnapActionCriteria} />
					<input name="element" ref="action-element" placeholder="Element (Selector)" onChange={this.handleNewSnapActionCriteria} />
					<input name="key" ref="action-state-key" placeholder="Key to be set in state" onChange={this.handleNewSnapActionCriteria} />
					<input name="type" ref="action-type" placeholder="Type (enterText, click)" onChange={this.handleNewSnapActionCriteria} />
					<input name="value" ref="action-value" placeholder="Value ('salazar', click)" onChange={this.handleNewSnapActionCriteria} />

					<button onClick={this.handleAddNewSnapAction}>Add</button>
					<a href="#" onClick={this.toggleAddSnapActionPanel}>Cancel</a>
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