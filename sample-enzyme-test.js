import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Foo from '../src/LoginPanel';

describe("Initial State", function() {
  it("Interface Loads", function() {
    expect(shallow(<LoginPanel />).contains(<div className="login-panel" />)).to.equal(true);
    //corresponding Salazar data
    // {
    // 	event: "initialState",
    // 	element: "",
    // 	key: "",
    // 	value: ""
    // }

    describe("Enter user email", function() {
    	it("User enters email in user-email field", function() {
	expect(shallow(<LoginPanel />).contains(<input id="user-email" value="salazar@gmail.com" />)).to.equal(true);
        //corresponding Salazar data
	// {
	// 	event: "setValue",
	// 	element: "#user-email",
	// 	key: "userEmail",
	// 	value: "salazar@gmail.com"
	// }


		    describe("Login", function() {
			  	it("User clicks login button", function() {
				    expect(mount(<LoginPanel />).contains(<button id="login-button" />)).to.equal(true);
				    //corresponding Salazar data
				    // {
				    // 	event: "click",
				    // 	element: "#login-button",
				    // 	key: "",
				    // 	value: ""
				    // }
				  });
			  });
		  });
    });
  });		  
});
