//string-manipulation//

/**
*Main methods and property used in String Manipulations.
* concat()
* toLoweCase()
* toUpperCase()
* trim()
* indexOf()
* substring() It creates substring.
* startsWith() It checks the string starts with the given character or not.
* endsWith()
* charAt() It provides index of the character and retrieve the specific index.
* length It gives total number of character in given string. How many character is contained in a string.
**/


/**
*String is immutable in JavaScript so the only way we can change object is by reassigning.
**/


var str = "   Operation";

str = str.concat(" Spark");

//I intentionally put spaces before Operation above. To remove space, I apply trim() method.

str = str.trim();

console.log(str.startsWith('O')); // "true" It gives true.

console.log(str.substring(1,3)); // "pe" 1 is the beginning index and 3 is ending index but 3 is excluded.

console.log(str.substring(4)); // "ation Spark"
                               //if I provide just the beginning index, it provides the substring from the given index to last index

console.log(str.charAt(2)); // "e"

console.log(str.length); // 15