/**
 * DATA TYPES
 * Primitive data types are number, string, boolean, NaN, undefined and Null
 * Non-primitive or complex data types are object, array, and function.
 * Primitive data types are immutable and don't hold other values.
 * Complex values agrregate other values so they don't have a definite size.
 * When assigning or passing , simple data types are coppied from one variable to next. On the other hand,
 * since the variable can hold max 8mb data, complex data types are  copied by reference.
 * 
 * 0.Numbers
 * Numbers are Numeric data.
 * 
 * 1.Strings
 * 
 * Strings are characters stores between single quote or double quotes. 'car', "home"
 * Strings ar array of characters.They are not mutable. 
 * Therefore we need to reassign it if we make a change on it.
 * We can access individual characters of string by using [] notation.
 * Please refer string manipulation.
 * 
 * 2.Boolean
 * 
 * Boolean is simply true false values.
 * 2 > 1 => true
 * !false => true
 * !true => false
 * Condition we pass into the conditional statement would turn into true false.
 * 
 * 
 * 
 *3. Array

var arrNames = ["Edward", "Holly", "Marco"];

*0.Arrays in JavaScripts are fix in size and have index numbers.
*When you declare and array, you can use var, let or const.
*The n we give variable name, then we put [].
*Each of the data in an array has representive index number. 
*For example, index 0 is for "Edward". If I want to print "Edward", I pass 0 like arrNames[0].
*Unless JAVA, we don't need to convert into String before printing out.
*If we try to print arrNames[4], it gives me undefined since we don't have an index and
*element represented by this index.
*
*1.Popular methods used with array are sort(), push(), pop(), shift(), and unshift().
*sort() sort the array in ascending order.
*push() assigns the given value to last index of an array.
*pop() Functionality is similar wit Queue and Stack in JAVA. Last-in-Firs-out
*shift() It returns the first entered value in the array.
*unshift() We provide value and unshift() insert the given value.
*length property gives the size of the array.
*/

var numbersArray = [9,8,7,6,5,4,3,2,1];

numbersArray.sort();
console.log(numbersArray);

//[1,2,3,4,5,6,7,8,9]

numbersArray.push(15);
// 15 would be added to numbersArray and expected result would be:
//[1,2,3,4,5,6,7,8,9,15]

var n = numbersArray.pop();
//it returns 15 and remove it from the array.
console.log(n); //-->print out 15.

var arr1 = ["A", "B", "C"];

arr1.pop();
//It would remove the "A".

arr1.unshift("F");
//"F" is inserted into index 0.
//["F", "B", "C"]

arr1.length;
// After pop() and unshift(). the length of the arr1 is 3.


/*4.Object
*/

var car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    price: 50000
};

/**
*Declaration of object litearal is same with declaration with variable. 
*Let's create an object for car. 
*Whatever we put between {} should be in key-value pairs
*or in JSON format. Make is the key represent "Toyota". 
*If I want to return "Toyota", I just need to get access through the key.
*Both following statement would print Corolla
*/
 
 console.log(car.model);
 console.log(car["model"]);
 
 /**
 *In the below for in loop, each represents keys. 
 *If I print out each, it gives me "make", "model", "year", and price.
 *If I wan to print oy values. 
 *I use either car.each notatiion or car["each"] noration.
 *
 */
 
 for(var keys in car){
     console.log(keys + ": " + car,keys); 
 }
 
 /**
 * 5.Functions
 * Functions are reusable chunsk of code that we wrapp up and give a name.
 * It reduces dublications and makes our codes easy to understand.
 * Functions accept input which allows us to modify their behaviors.
 * 1.0Syntax of a function.
 * Syntax of function is keyword function and functionName.
 * We can pass parameters and in function block we write statement.
 * It is two steps process. First, we define than we execute the function.
 * The code we write between {} would not run rigth away. We need to execute them.
  * 
  *
  * 6.undefined
  * 
  * The undefined property indicates that a variable has not been assigned a value, or not declared at all
  * 
  * 
  * 7.null
  * 
  * In JavaScript null is "nothing". It is supposed to be something that doesn't exist.
  * Null is an object in JavaScript.
  * undefined and null are equal in value but different in type.
  * 
  * 8.NaN
  * NaN is a property of the global object. In other words, it is a variable in global scope.
  * The initial value of NaN is Not-A-Number — the same as the value of Number.NaN.
  * In modern browsers, NaN is a non-configurable, non-writable property.
  * Even when this is not the case, avoid overriding it. It is rather rare to use NaN in a program.
  * 
  * 9.Infinity and -Infinity
  * The global property Infinity is a numeric value representing infinity.
 
 **/
 