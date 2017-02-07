import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import LoginPanel from '../src/LoginPanel';
//import Salazar

describe("Initial UI State", function() {
  it("Interface Loads", function() {
    expect(shallow(<LoginPanel />).contains(<div className="login-panel" />)).to.equal(true);
//     Salazar({
//     	progression: "successful login",
//     	describe: "Initial UI State",
//     	event: "initialState",
//     	element: "",
//     	key: "",
//     	value: ""
//     });

    describe("Enter Valid Email", function() {
    	it("User enters email in user-email field", function() {
		    expect(shallow(<LoginPanel />).contains(<input id="user-email" value="salazar@UI-BDD.com" />)).to.equal(true);
//         Salazar({
//         	progression: "successful login",
// 		      describe: "Enter Valid Email"	,
// 		    	event: "setValue",
// 		    	element: "#user-email",
// 		    	key: "userEmail",
// 		    	value: "salazar@UI-BDD.com"
// 		    });


		    describe("Enter Valid Password", function() {
		    	it("User enters password in user-password field", function() {
				    expect(shallow(<LoginPanel />).contains(<input id="user-password" value="passw0rd" />)).to.equal(true);
// 		        Salazar({
// 		        	progression: "successful login",
// 				      describe: "Enter Valid Password",
// 				    	event: "setValue",
// 				    	element: "#user-password",
// 				    	key: "userPassword",
// 				    	value: "salazar@gmail.com"
// 				    });


				    describe("Submit Login", function() {
					  	it("User clicks login button", function() {
						    expect(mount(<LoginPanel />).contains(<button id="login-button" />)).to.equal(true);
// 						    Salazar({
// 						      progression: "successful login",
// 				      			describe: "Submit Login",
// 						    	event: "click",
// 						    	element: "#login-button",
// 						    	key: "",
// 						    	value: ""
// 						    });
						});
					});
				});
	});
    });
  });		  
});
