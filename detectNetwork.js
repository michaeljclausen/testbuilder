// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var prefix = cardNumber.slice(0, 2);
  if (cardNumber.length === 14 && (prefix === '38' || prefix === '39')) {
  	return 'Diner\'s Club';
  }
  if (cardNumber.length === 15 && (prefix === '34' || prefix === '37')) {
  	return 'American Express';
  }
  if (cardNumber.length === 16 && (prefix === '51' || prefix === '52' || prefix === '53' || prefix === '54' || prefix === '55')) {
  	return 'MasterCard';
  }
 
  if ((cardNumber.slice(0,4) === '6011' || cardNumber.slice(0,3) === '644'|| cardNumber.slice(0,3) === '645'|| cardNumber.slice(0,3) === '646'|| cardNumber.slice(0,3) === '647'|| cardNumber.slice(0,3) === '648'|| cardNumber.slice(0,3) === '649' || prefix === '65') && (cardNumber.length === 16 || cardNumber.length === 19)) {
  	return 'Discover';
  }
  if ((cardNumber.slice(0,4) === '5018' || cardNumber.slice(0,4) === '5020' || cardNumber.slice(0,4) === '5038' || cardNumber.slice(0,4) === '6304') && (cardNumber.length >= 12 && cardNumber.length <=19)) {
  	return 'Maestro';
  }
  var prefix6 = parseInt(cardNumber.slice(0, 6));
  var prefix4 = parseInt(cardNumber.slice(0, 4));
  var prefix3 = parseInt(cardNumber.slice(0, 3));
  if (((prefix6 >= 622126 && prefix6 <= 622925) || (prefix4 >= 6282 && prefix4 <= 6288) || (prefix3 >= 624 && prefix3 <= 626)) && (cardNumber.length >= 16 && cardNumber.length <= 19)) {
  	return 'China UnionPay';
  }
  if ((prefix4 === 4903 || prefix4 === 4905 || prefix4 === 4911 || prefix4 === 4936 || prefix4 === 6333 || prefix4 === 6759 || prefix6 === 564182 || prefix6 === 633110) && (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19)) {
  	return 'Switch';
  }
  if ((cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) && prefix.charAt(0) === '4') {
  	return 'Visa';
  }
};


