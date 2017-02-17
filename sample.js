/* SAMPLE FILE TO RUN SOME TEST CASES (modify to your project's HTML element names)

action: 2 choices, "value" inputs text into a form, "onClick" clicks on a button on your HTML

If you put "value" for action, specify which element on the HTML you want to target with "element"
Next, specify what you want the text to be in "text"

For example, if your test is inputting 'hello' into 'class="username"', then you would put:

action: 'value',
text: 'hello',
element: '.username'

If you put "onClick" for action, specify which element you want to click on.

For example, if your test is clicking on 'id="loginbtn"', then you would put:

action: 'onClick',
element: '#loginbtn'

-salazar.path sets the path to take screenshots of
-salazar.run sends the narrative object to the algorithm

*/


var salazar = require('./index.js');

salazar.path('http://localhost:8000');

salazar.run({
    progression: "Incorrect Login",
    description: "Puts in username",
    result: 'res',
    step: 1,
    element: ".username",
    text: 'wrongusername',
    action: 'value',
    png: "fl1",
})

salazar.run({
    progression: "Incorrect Login",
    description: "Puts in password",
    result: 'res',
    step: 2,
    element: ".password",
    text: 'dkfjk',
    action: 'value',
    png: "fl2",
})

salazar.run({
    progression: "Incorrect Login",
    description: "Press login button",
    result: 'res',
    step: 3,
    element: "#loginbtn",
    text: '',
    action: 'onClick',
    png: "fl3",
})



salazar.run({
    progression: "User Registration",
    description: "Click new user",
    result: 'res',
    step: 1,
    element: "#newuser",
    text: '',
    action: 'onClick',
    png: "gb1",
})

salazar.run({
    progression: "User Registration",
    description: "Puts in name",
    result: 'res',
    step: 2,
    element: ".name",
    text: 'dan',
    action: 'value',
    png: "gb2",
})

salazar.run({
    progression: "User Registration",
    description: "Puts in username",
    result: 'res',
    step: 2,
    element: ".username",
    text: 'dan',
    action: 'value',
    png: "gb3",
})

salazar.run({
    progression: "User Registration",
    description: "Puts in password",
    result: 'res',
    step: 2,
    element: ".password",
    text: 'pass123',
    action: 'value',
    png: "gb4",
})

salazar.run({
    progression: "User Registration",
    description: "Clicks on register",
    result: 'res',
    step: 2,
    element: "#registerbtn",
    text: '',
    action: 'onClick',
    png: "gb5",
})


salazar.run({
    progression: "Correct Login",
    description: "Type in username",
    result: 'res',
    step: 1,
    element: ".username",
    text: 'hello',
    action: 'value',
    png: "cl1",
}) 

salazar.run({
    progression: "Correct Login",
    description: "Type in password",
    result: 'res',
    step: 2,
    element: ".password",
    text: 'hello',
    action: 'value',
    png: "cl2",
}) 

salazar.run({
    progression: "Correct Login",
    description: "Clicks on button",
    result: 'res',
    step: 3,
    element: "#loginbtn",
    text: '',
    action: 'onClick',
    png: "cl3",
    end: 'true'
}) 