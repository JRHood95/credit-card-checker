// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]

// Own made up faulty array to test idInvalidCardCompanies
const compTest = [
	[3, 4, 5, 6],
	[7, 8, 9, 5, 4],
	[5, 6, 7, 8],
	[1, 2, 4, 5]
];
 
// Add your functions below:

// Validate each card number
const validateCred = (array) => {
	let otherNumArray = [];
	let checkNumArray = [];
	// Push every other digit after the 'check digit', after its been checked and changed, in to checkNumArray
	for (i = array.length - 2; i >= 0; i -= 2) {
		let digit = array[i] * 2;
		if (digit > 9) {
			digit = digit - 9;
			checkNumArray.push(digit);
		} else {
			checkNumArray.push(digit);
		};
	};
	// Push every other digit including the 'check digit' in to otherNumArray
	for (i = array.length - 1; i>= 0; i -= 2) {
		otherNumArray.push(array[i]);
	};
	// Join both arrays and sum up all the digits in to variable totalSum
	let jointArray = checkNumArray.concat(otherNumArray);
	let totalSum = jointArray.reduce((accumulator, currentValue) => {
		return accumulator + currentValue;
	});
	// Divide totalSum by 10.... if the remainder is equal to 0, it is valid!
	if (totalSum % 10 === 0) {
		return 'Card is valid';
	} else {
		return 'Card is invalid';
	};
};

// Go thru a batch of cards and use validateCred to return a nested array of invalid numbers
const findInvalidCards = (batch) => {
	let invalidCards = [];
	for (let i = 0; i < batch.length; i++) {
		if (validateCred(batch[i]) === 'Card is invalid') {
			invalidCards.push(batch[i]);
		};
	};
	return invalidCards;
};

// Save the invalid cards to 'invalidCardsArray' after calling the 'findInvalidCards' function on batch
let invalidCardsArray = findInvalidCards(batch);


// Create and return an array of the companies that gave out invalid cards
const idInvalidCardCompanies = (array) => {
	let amex = 0;
	 let visa = 0;
	 let mastercard = 0;
	 let discover = 0;
	 
	 let badCardComp = [];
	 // Loop that checks the starting digit of each card number and increments the variables above if it finds one for each companies unique start digit. If not it then logs a message
	for (i = 0; i < array.length; i++) {
		if (array[i][0] === 3) {
			amex += 1;
		} else if (array[i][0] === 4) {
			visa += 1;
		} else if (array[i][0] === 5) {
			mastercard += 1;
		} else if (array[i][0] === 6) {
			discover += 1;
		} else {
			console.log(`Company not found for Card: ${array[i]}`);
		}
	}
	// Push the company name in to the badCardComp array if the variables for each company had more than one invalid card
	if (amex > 0) {
		badCardComp.push('American Express');
	};
	if (visa > 0) {
		badCardComp.push('Visa');
	};
	if (mastercard > 0) {
		badCardComp.push('Mastercard');
	};
	if (discover > 0) {
		badCardComp.push('Discover');
	};
	
	return badCardComp;
};


// Test your code
console.log(validateCred(mystery3));
console.log(validateCred(mystery5));
console.log(invalidCardsArray);
console.log(idInvalidCardCompanies(invalidCardsArray));
console.log(idInvalidCardCompanies(compTest));







 
 



