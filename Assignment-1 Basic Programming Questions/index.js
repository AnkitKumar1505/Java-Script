// Question 1:- Ans

var str1 = 'Today is';
var str2 = '      a beautiful day     ';
var str3 = ' In Hawaii.     ';

var result = str1.trim() + " " + str2.trim() + " " + str3.trim();
console.log(result);

// Question 2:- Ans

let enteredAlphabet = prompt("Please enteredAlphabet...");

if(enteredAlphabet >= 'a' && enteredAlphabet <= 'z'  || enteredAlphabet >= 'A' && enteredAlphabet <= 'Z')
{
	switch(enteredAlphabet)
	{
		case 'a':
			console.log("Vowel");
			break;
		case 'e':
			console.log("Vowel");
			break;
		case 'i':
			console.log("Vowel");
			break;
		case 'o':
			console.log("Vowel");
			break;
		case 'u':
			console.log("Vowel");
			break;
		case 'A':
			console.log("Vowel");
			break;
		case 'E':
			console.log("Vowel");
			break;
		case 'I':
			console.log("Vowel");
			break;
		case 'O':
			console.log("Vowel");
			break;
		case 'U':
			console.log("Vowel");
			break;
		default:
			console.log("Consonant");
			break;
	}
}
else{
console.log("you have enter a Non- Alphabet");
}

// Question 3:-Ans

var num1 = parseInt(prompt("Enter the first value"));
var operator = prompt("Enter the operation to perform [+, -, *, /]");
var num2 = parseInt(prompt("Enter the second value"));

switch(operator)
{
	case '+':
		console.log(num1 + " " + operator + " " + num2 + " = " + (num1 + num2));
		break;
	case '-':
		console.log(num1 + " " + operator + " " + num2 + " = " + (num1 - num2));
		break;
	case '*':
		console.log(num1 + " " + operator + " " + num2 + " = " + (num1 * num2));
		break;
	case '/':
		console.log(num1 + " " + operator + " " + num2 + " = " + (num1 / num2));
		break;
	default:
		console.log("Invalid operation or Value entered");
		break;
}

// Question 4:-Ans

var A = parseInt(prompt("Enter value for side A"));
var B = parseInt(prompt("Enter value for side B"));
var C = parseInt(prompt("Enter value for side C"));

if(A == B && A == C)
{
	console.log("Equilateral Triangle");
}
else if(A == B || A == C || B == C)
{
	console.log("Isosceles Triangle");
}
else
{
	console.log("Scalene Triangle");
}

// Question 5:-Ans

var units = parseFloat(prompt("Please Enter the total number of electricity units..."));
var bill = 0;
var Total_bill = 0;

if(units > 0 && units <= 50){
    bill = bill + (units * 0.50);
	Total_bill = Total_bill + bill;
}
else if( units > 50 && units <= 150){
    bill = bill + (50 * 0.50)  + ((units - 50) * 0.75);
	Total_bill = Total_bill + bill;
}
else if( units > 150 && units <= 250){
    bill = bill + (50 * 0.50)  + (100 * 0.75) + ((units - 150) * 1.2);
	Total_bill = Total_bill + bill;
}
else if( units > 250){
    bill = bill + (50 * 0.50)  + (100 * 0.75) +  (100 * 1.2) + ((units - 250) * 1.5);
	Total_bill = Total_bill + bill + (bill * 0.20);

}

console.log("Total Bill = " , Total_bill);
