/*
1. Merge and split strings

concat (string1, string2, ..., stringN) - concatenates strings
split ('separator') - splits strings into an array of substrings using the specified delimiter

Сoncat is the union of strings.

Example:

Concat*/
var a = "first line ";
var b = "second line ";
var c = "third line";
result = a.concat(b);
//console.log(result);

var myString = "cat,dog,bird";
var myArray = myString.split("d");
//console.log(myArray);

/*var myString = "cat:dog:bird";
var myArray = myString.split (":", 3);
console.log(myArray)*/

var myString = "cat:dog:bird";
var myArray = myString.split(":", 2);
//console.log(myArray);

/*
2.Convert register

toLowerCase () - returns new string with all letters converted to lowercase
toUpperCase () - returns new string with all letters converted to uppercase
toLocaleLowerCase () - returns new string with all letters converted to lowercase
toLocaleUpperCase () - returns new string with all letters converted to uppercase
(The last two methods have some special features for languages ​​whose rules contradict the Unicode conventions.)

Since the syntax of all these methods is the same, consider only one example.*/

var catName = "Kitty";
console.log(catName.toUpperCase());
console.log(catName.toLocaleUpperCase());

/*As a result of executing this code, the contents of the line will be displayed in the console with capital letters - "KITTY"*/

//Test:

function testStr(a, b) {
  // Put your code here
  var a = "Hello";
  var b = "World!";
  var myLower = a.toLowerCase();
  var myUpper = b.toUpperCase();

  var myString = myLower.concat(myUpper);

  console.log(myString);
}


/*
3. Return part of a string

substring (indexA [, indexB]) - returns part of the string starting at position indexA, but not including indexB

slice (indexA [, indexB]) - returns part of the string starting at position indexA, but not including indexB

substr (indexA [, length]) - returns a portion of the string starting at position indexA, in the number of length

replace (regexp, newSubString | function) - returns a new string after the replacements specified in regexp, or the function that returns it. Regular expressions - RegExp, we will discuss in detail in the third module of the course.

For example, we will see operation with the method substring (indexA [, indexB])*/

var myString = "This is just a string!";
console.log (myString.substring (4, 17));
console.log(myString.slice(4,17));
console.log(myString.substr(4));

/*As a result, the text will appear in the console from 4 to 16 positions - " is just a st"
*/

/*
4.Find a substring in a string

indexOf (searchValue [, fromIndex]) - searches for a searchValue substring starting from the fromIndex position

lastIndexOf (searchValue [, fromIndex]) - searches for the last substring of searchValue starting from fromIndex

search (regExp) - checks whether there is a match with the argument, the result is true or false

match (regExp) - returns an array of all matches with an argument


First, lets work with indexOf (searchValue [, fromIndex])*/


var myString = "This is just a test string!";
console.log (myString.indexOf ("is", 0));

/*In this case, the console will display the position number with which the first found substring "is" - 2 begins.
"This is just a test string!";*/

/*
However, if we specify the method to look for a substring not from the very beginning, but, for example, from the 3rd position:*/

console.log (myString.indexOf ("is", 3));

/*Then the result will be "5" - the position with which the second occurrence of the substring "is" begins.
"This is just a test string!";*/

/*
The lastIndexOf (searchValue [, fromIndex]) method works similarly, but returns the number from which the last occurrence of the searched substring begins. fromIndex denotes the place from which to start the search towards the beginning of the line, its default value is the length of the string. In the example:*/


var myString = "This is just a test string!";
console.log (myString.lastIndexOf ("just"));

/*the number 5 - the beginning of the last occurrence of the substring "is" will be displayed in the console.

The methods search (regExp) and match (regExp) here we indicated for completeness of the enumeration, their work will be considered in the next module, after learning the work with regular expressions.*/



/*
5. Type conversion

fromCharCode (num1, num2, ..., numN) - creates an elementary string from the values of Unicode characters
For example, the expression myString = String.fromCharCode (65, 66, 67); assigns the variable myString the value "ABC".


toString () - returns an elementary string instead of a String object

valueOf () - returns an elementary string instead of a String object, equivalent to toString ()

As a result of the following code, an elementary value will be output to the console.*/

myString = new String ("Hello world");
console.log (myString.toString ());
console.log (myString.valueOf ());
