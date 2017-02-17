# Salazar

### Salazar is still under development. Our first full release should be available by March 3rd. Please check back for any future updates!

A UI focused library for test driven development.

## Setup
Salazar has been designed so that you can easily drop the library into test scripts you've already written. We recommend you install Salazar via npm:
```
npm install salazar
```

## Usage
Salazar relies on your description in your tests to connect UI snapshotting with corresponding unit tests. The "describe" key in the object you pass to Salazar should be the exact string used for the describe used in the parent test.

```
...
describe("Enter Valid Email", function() {
  it("User enters email in user-email field", function() {
    expect(shallow(<LoginPanel />).contains(<input id="user-email" value="salazar@UI-BDD.com" />)).to.equal(true);
    Salazar({
      progression: "successful login",
      describe: "Enter Valid Email"	,
      event: "setValue",
      element: "#user-email",
      key: "userEmail",
      value: "salazar@UI-BDD.com"
    });
    ...
```

From there, the library will compound objects in a given progression (i.e. a narrative for a given test) to ensure that preceding actions are taken leading up to a given snapshot:

```
describe("Initial UI State", function() {
  it("Interface Loads", function() {
    expect(shallow(<LoginPanel />).contains(<div className="login-panel" />)).to.equal(true);
    Salazar({
    	progression: "successful login",
    	describe: "Initial UI State",
    	event: "initialState",
    	element: "",
    	key: "",
    	value: ""
    });

    describe("Enter Valid Email", function() {
    	it("User enters email in user-email field", function() {
		    expect(shallow(<LoginPanel />).contains(<input id="user-email" value="salazar@UI-BDD.com" />)).to.equal(true);
        //previous object sent in this progression will be processed before snapshot for this call is made
        //since it is nested in the same progression
        Salazar({
        	progression: "successful login",
		      describe: "Enter Valid Email"	,
		    	event: "setValue",
		    	element: "#user-email",
		    	key: "userEmail",
		    	value: "salazar@UI-BDD.com"
		    });

```

## Visualization Tool
We're in the process of developing a more robust visualization tool but in the meantime you can use our progressions scrubber. Salazar will generate a narrative object in progressions.json. Configure your path for this file to be generated in the root of the visualizer directory. All of your narratives will be automatically organized by the "progression" key, making it easy to spot where your UI may not be behaving correctly even when corresponding unit tests might be passing.

<img src="https://raw.githubusercontent.com/SalazarTeam/salazar/master/salazar-example.png"/>
