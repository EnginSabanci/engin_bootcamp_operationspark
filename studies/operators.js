/**
 * OPERATORS:
 * 
 * 0.Assignment Operator
 * The = assignment operator assigns a value to a variable.
 * The += assignment operator adds a value to a variable.
 * The -= assignment operator subtracts a value from a variable.
 * The *= assignment operator multiplies a variable.
 * The /= assignment divides a variable.
 *
 * In below example, = operator assigns value 10 to the variable x.
 */

var x = 10;
x /= 5;

/**
 * 1.Arithmetic Operators
 * A typical arithmetic operation operates on two numbers.
 * Addition +
 * Subtraction  -
 * Multiplication  *
 * Exponentiation  ** The exponentiation operator (**) raises the first operand to the power of the second operand.
 * Division  /
 * Modulus (Remainder) % The modulus operator (%) returns the division remainder.
 * Increment ++
 * Decrement --
 * Operator precedence describes the order in which operations are performed in an arithmetic expression.
**/

console.log(2**5); // produces the same result as Math.pow(2.5)

var x = 100 + 50 * 3; //250



//equal and not equal operators//

/***
*2. Comparison Operators
* 
*0.Theree are two types of equal operators.
*"==" and "===". "===" is strict equal operator.
*They compare any variable even if they are in different data types.
*9=='9' --> One is number and the other is String It would print me true.
*Equal operator does not care about the data type of both sides.
*9 ==='9' It would check if they are same data type. It would give us "false".
*The only time strictly equal gives true is when they are same data type
*and exactly same values.
* 
* 
*1.Not equal operator. != or !== Even if I compare different data type,
*it does not care about data type.
*9 != "9" would give false. However, if I use 9!=="9", it gives true.
*Since they are not same data type, it autoatically gives me true.
* 
* >	greater than
* <	less than
* >=	greater than or equal to
* <=	less than or equal to
* 
* 
* 3.Logical Operators
* &&	logical and : If there are more than one condition and we want them all being considered together.
* ||	logical or  : If we want either of or at least one conditions is being considered we use or "||" operators.
* !	    logical not: This esclamation sign gives opposite value of the given condition.
* 
**/

var a = 9 > 8 && 5 > 4; // There are two conditions and we want both valid
var b = true || false; // true There is false in this code but it is ok since other condition is true.