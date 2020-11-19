//FUNCTIONS//

/**
 * 0.Functions are reusable chunsk of code that we wrapp up and give a name.
 * It reduces dublications and makes our codes easy to understand.
 * Functions accept input which allows us to modify their behaviors.
 * 1.0Syntax of a function.
 * Syntax of function is keyword function and functionName.
 * We can pass parameters and in function block we write statement.
 * It is two steps process. First, we define than we execute the function.
 * The code we write between {} would not run rigth away. We need to execute them.
**/

function addnums(num1, num2){
    let result = num1 + num2;
    return result;
}

var num3 = addnums(10,15); 

console.log(addnums(10.15));//25

/**
 * 2.Inputs and Outputs in the Functions
 * Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. 
 * 3.Parameters vs Arguments
 * Parameters are inputs into the functions. Functions accept inputs and use them in the codes
 * ans returns an output. Arguments are values pass into the parameters when we call the function.
 * When we run the function with the arguments we pass, it gives us specific output which depends on these parameters.
 * Parameters take plase of arguments.
 * Whenever I call above function and pass two arguments instead of num1 and num2 parameters,
 * It would return the sum of given numbers.
 * Assigning a function to a variable.
 * You can assign the return value another variable or you can print it out directly.
**/

//Scope//

/**
* 0.Where we define a variable in JavaScript impacts where we have access in it.
* In the below example, if I print it out I get 6.
* If I put console.log(totalDebt) after function block and run my code
* I immediately get an error.
* Does executing function help? No
* Variables defined in the function are scoped in this function.
* I can not access it from outside of the function.
* 
**/

function collectDebt(){
    let totalDebt = 6;
    console.log(totalDebt);
    
}

// console.log(totalDebt); Throw an error

/**
 * 1.If I initialize and assigned value to totalDebt out of the function,
 * it would be global variable.
 * Ususally in all functions, we have internal variables which are in function scope.
 * Functions accept input and returns outputs.
 * In the following example, I have two variables with exact same names.
 * Before I execute bird watch, if I console.log(bird), I get Mocking Bird to the console.
 * What happen if I execute the birdwatch() then console.log(bird)?
 * It is still "Mocking Bird" since variable bird containing value Hawk is scope the birdwatch() function.
 * If I add console.log(bird) inside the birdwatch() function,
 * then "Hawk" would be printed out if I call the birdwatch().
 * If I commend out let bird = "Hawk", "Mocking Bird" would be printed to the console.
**/

let bird = "Mocking Bird";

function birdwatch(){
    let bird = "Hawk";
    //console.log(bird);
}

birdwatch();
console.log(bird);

//Closures//

/**
 * Functions form closures around the data they house.
 * If an object returned from the Function and is held in memory somewhere (referenced),
 * that closure stays ALIVE, and data can continue to exist in these closures!
 **/
 
