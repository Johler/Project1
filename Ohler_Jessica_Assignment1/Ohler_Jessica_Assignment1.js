//alert("JavaScript works!");

// Jessica Ohler
// SDI 1407
// Project 1
// Starbucks Order in JavaScript

// Set my variables
var customerDrinkChoice = "Caramel Ribbon Crunch Frappuccino",
	readyToMakeDrink = true,
	coffeeBase = true,
	whippedCream = true,
	payCash = true,
	cash = 5,
	cash2 = 10,
	drinkTotal = 4.52,
	change = cash - drinkTotal,
	change2 = cash2 - drinkTotal,
	fakeName = "Thomas Riddle"
	customerRealName = 'Kevin O\'malley';
	
// Outputs
//The customer is first greeted and asked what they would like today.
console.log("Customer orders grande " +  customerDrinkChoice + ".");
console.log("Customer would like coffeeBase today " + coffeeBase + ".");
console.log("Customer would like whipped cream today " + whippedCream + ".");
console.log("Customer would like to pay in cash " + payCash);
console.log("Customer can choose " + cash + "or " + cash2 + " to pay with.");
console.log("Cost of drink will be $" + drinkTotal);
console.log("Customer uses their real name, " + customerRealName + ".");
console.log("If user choses customer to pay with a " + 5 + " dollar bill, their change will be, " + change + ".");
console.log("If user choses customer to pay with a " + 10 + " dollar bill, their change will be, " + change2 + ".");

//Confirm for Input
myConfirmation = confirm("Are we ready to specify our customers drink?");
if (readyToMakeDrink === true) {
	console.log("Let's get picky!")
} else {
	console.log("Let's get it how it's made.")
}

// Conditionals
/*First we find out if base wanted.  I used a Boolean Conditional which is true. 
I also nested in if they would like whipped cream due to the fact that it is still 
referring to how they would like their drink made.*/
if (coffeeBase === true) {
	console.log("Coffee based preferred over Creme");
	//I netted in the whipped cream variable using a number condition. Which is true.
	if (whippedCream === true) { 
		console.log("Yes I would like whipped cream today.");
	} else {
		console.log("No whipped cream on that drink please.");
	};
} else { 
	console.log("I'll take creme based today please.");
}
/*First prompt:
After asking for payment they state that they would like to pay in cash. 
This is another Boolean condition and then the Math is done after the statement is true.*/
myPrompt = prompt("Will you be paying with a " + 5 + " or " + 10 + " dollar bill today?");
myPrompt = parseInt(myPrompt);
	if (cash === 5) {
		console.log("I'll pay with $" + 5 + " today. $" + change +" should be my change.");
	} else {
		console.log("I'll pay with $" +10 +" today. $" + change2 +" should be my change.");
	}
	
//The customer has decided to give their real name when asked and that is placed on the cup ready to be made.

if (fakeName === 'Kevin O\'malley') {
	console.log("My name is " + fakeName + ".");
} else { 
	console.log("My name is " + customerRealName + ".");
};
//Prompt for Input
myPrompt = prompt("Rate us of 1-10, 10 being best.");
myPrompt = parseInt(myPrompt);
if (myPrompt >= 6) {
	console.log("We are glad you were satisfied with your purchase");
} else {
	console.log("We are sorry you weren't happy and hope to make your next visit better.");
}
//Now to end this transaction the customer is given their drink correctly made to enjoy and thanked for purchase.