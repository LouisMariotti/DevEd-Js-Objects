/* Like with functions when you have variables that relay kind of the 
same data you wouldn't use a bench of variable, you would use objects */

const name = "ed";
const age = 19;
const email = "mariotti.louis@icloud.com";

// We can totally do the above but there is a simplier way of doing it.

const user = {
  name: "Louis",
  age: 19,
  email: "mariotti.louis@icloud.com",
  greet: function () {
    console.log("Hello there");
  },
};

// console.log(); // nameofthevariable.thepreciseinformationwewant
user.greet();

// We can also have function on the above.

// Methods are functions that are inside an object like greet on the above
