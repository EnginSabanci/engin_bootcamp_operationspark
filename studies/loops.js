/*
*LOOPS
*
*0. There are 4 types of loops in JavaScript.
*The first loop is for loop, then we have while-loop and do-while loop, another special loop calles for-in-loop.
*The functionality of for-loop, while-loop, and do-while loop is exactly same with those in JAVA.
*/

//1.for loop//

for(var i = 0; i < 3; i++){
    console.log("Hello World!");
}
/*
*In for-loop, we have initilization, condition, and iterator. Condition decides how many times this loop is going to run.
*Whatever statement I give between {} foing to be repeated multiple times. Number of times depending on condition, iretator.
*
*In the above example, "Hello World" would be printed to the console 3 times. The variable i would get 0, 1, 2 values and  the statement gets executed 3 times.
*/

//2.while loop//

var num = 5;
while(num > 0){
    console.log("Operation Spark");
    num--;
}

/**
*While-lopp executes as long as the condition is true. In the above example, as long as num is greater than 0, the statement gets executed until it becomes false.
* If we don't give any iterator, condition is never going to be false so it would run infinite times. 
* Only time the condition becomes false if we decrease the value of num. Therefore, iterator is "num--"" with decrement operator.
**/


//3.do while loop//

do{
    console.log("Hola");
}while(false);

/**
 *In JAVA, do-while-loop gets executed at least once even though the condition is false.
 * First, do block get executed and later condition is checked.
 */
 
 //4.for in loop//
 
 var nums = [5,4,3,2];
 for(var each in nums ){
     console.log(each);
 }
 
 /* It will print out:
 0
 1
 2
 3
 */
 
 /**
  * "each" in the above "for in loop" represents each of the indexes. We give var name which represents index number. We give keyword in and collection.
  * For in loop can also be applied to object literals.
 */
 
 //Loop over an object//
 
 /**
  * We have a special for in loop to loop over objects in JavaScript.
  * The for/in statement loops through the properties of an object.
  * The block of code inside the loop will be executed once for each property.
  * The below for in loop will print to the console following keys and values
  * id: 1
  * nameFirst: Max
  * nameLast: Gaudin
  **/
  
  var obj = {
        "id": 1,
        "nameFirst": "Max",
        "nameLast": "Gaudin"
    };
    
    for(var prop in obj){
        console.log(prop +": " + obj[prop]);
    }
 
 //Loop over an array//
 
 var cars = ["BMW", "Volvo", "Saab", "Ford"];

 /**
  * for in loop is not suggested to be used for arrays in JavaScript
  * Klasik for loop fit best for the arrays.
  * In for loop before the execution start we set variable and assign a value. For instance, var i = 0.
  * This value would be a starting point for the loop.
  * Then we set the condition i < cars.length. 
  * Next, we set the iterator. Let's say i++. It increases the value  of i (i++) each time by one the code block in the loop has been executed.
 */
for(var i =0; i < cars.length; i++){
    console.log(cars[i]);
}