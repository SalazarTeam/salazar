import React from 'react';

class Overhaul extends React.Component {
	constructor() {
		super();

		this.state = {
			className: "--overhaul-inactive"
		}

		this.toggleObserverBird = this.toggleObserverBird.bind(this);
	}

	toggleObserverBird() {
		if (this.state.className === "--overhaul-inactive") {
			this.setState({ className: "--overhaul-observing" });
		} else {
			this.setState({ className: "--overhaul-inactive" });
		}
	}

  render() {
      return (
         <div className={this.state.className}>
            <button onClick={ this.toggleObserverBird }>Open Eagle Eye</button>
         </div>
      );
   }
}

export default Overhaul;