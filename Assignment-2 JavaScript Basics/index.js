// Question 1: Ans
console.log("Question 1 Ans--------------------->")

let input = prompt("Please enter any array:-", [1234561]);
let find_element = prompt("Please enter i/p that you wont to find:-",1);
console.log("Original Array:- ", input);
console.log("Element to find:- ", find_element);

function search_all(input, find_element)
{
	var found = [];

	for(var i = 0 ; i < input.length ; i++)
	{
		if(input[i] == find_element)
           found.push(i);
	}

	if(found.length < 1)
    return -1;

	else if(found.length == 1)
    return found[0];

	else return found;
}

console.log(search_all(input, find_element));


// Question 2: Ans
console.log("Question 2 Ans--------------------->")

let input_element = prompt("Please enter any No:-", [5]);
function pattern(value)
{
	for(var i = 0 ; i < value ; i++)
	{
		var temp = "";
		for(var j = value ; j > i ; j--)
		{
			temp = temp + j;
		}
		console.log(temp);
	}
}

pattern(input_element);

// Question 3: Ans
console.log("Question 3 Ans--------------------->")

let array = [3, 2, 1, 4, 5, 45];

console.log("Original Array:", array);
array.sort();
console.log("Sort Array:",array);

// Question 4: Ans
console.log("Question 4 Ans--------------------->")


function anagram(str_1, str_2)
{
	if(str_1.length == str_2.length)
	{
		for(var i = 0 ; i < anagram.length ; i++)
		{
			if(!str_2.includes(str_1[i])) return false;
		}

		return true;
	}
	return false;
}

console.log("Anagram string");
console.log("HELLO & JELLO");

if(anagram("HELLO", "JELLO")) console.log("True");
else console.log("False");

console.log("LISTEN & SILENT");

if(anagram("LISTEN", "SILENT")) console.log("True");
else console.log("False");

// Question 5: Ans
console.log("Question 5 Ans--------------------->")

let str = prompt("Enter string to reverse it :-" , ["Hello"])
console.log("Original String :- ", str);
function reverse_string(str)
{
	var temp = "";
	for(var i = str.length - 1 ; i >= 0 ; i-- )
	{
		temp = temp + str[i];
	}

	return temp;
}

console.log(reverse_string(str));