import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div className="container">
					<section className="clear">
						<h1>Llama Karma</h1>
						<div className="user-login">
							<h2>User Login</h2>
							<div className="user-entry">
								<div className="entry-group clear">
									<input type="text" id="email" placeholder="Login Email"/>
								</div>
								<div className="entry-group clear">
									<input type="password" id="password" placeholder="Login Password"/>
								</div>
								<button className="submit-login">Submit</button>
							</div>
						</div>
					</section>
					<h3>An adoption service for spit tolerant humans.</h3>
				</div>
      );
   }
}

export default App;