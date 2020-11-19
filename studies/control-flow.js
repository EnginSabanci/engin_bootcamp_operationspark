/*
   * CONTROL-FLOW:
   *
   * 0. Conditional Statements
   *if statements
   *switch statements
   * ternary
   *
   *1. If statement in JavaScript, we give the condition and then the statement.
   *If block gets executes only if the if condition is true.
   *Other than if statement, we have else if statement and
   *it gets executed only if first condition is not true. The second condition should be true.
   *Then, we have else statement.
   *In the below example, the first condition is false. 
   *Therefore, the first statement would never get executed.
   *Therefore, the else block gets executed.
   */
   
   var num = 10;
   
   if(num < 9){
       console.log(num + " is less than 9"); 
   } else{
       console.log(num + " is greater than 9");
   }
   
  /* 
   *2.We can use any statement which gives Boolean expression can be used in condition.
   *In the below example,
   *Since the second condition is true, the second statement would be executed.
   *The remaining condition would not be checked.
   */
   
   var str = "New Orleans";
   
   if(str.startsWith('B')){
       console.log(str + " starts with B");
   } else if(str.startsWith('N')){
       console.log(str +" starts with N");
   } else{
       console.log(str + " starts with P");
   }
   
   //Multibranch if statement//
   
   /**
    * 
   */
   
   var n1 = 0;
   if(8 > 9){
       n1 = 8;
   } else if(8 === 9){
       n1 = 9;
   } else{
       n1 =0;
   }
   
   //The value is going to be 0;
   
   //Switch Statment//
   
   /**
   *In switch statment, first we give expression. It does not need to be boolean. 
   *Then, we have cases. Then we give our statement and "break" statement.
   *If we don't give "break" statement, it would still execute the next.
   *The break statement plays to role of exiting switch statement.
   *In java, expression cannot be boolean, double, float or long.
   * In JavaScript, we don't have such rule.
   * In JavaScript, we can use 8.5 as expression.
   */
   
   var num = 8.5;
   
   switch (num) {
       case 5.5:
           console.log("number is 5.5");
           break;
       case 7.5:
           console.log("number is 7.5");
           break;
       default:
           console.log("Unknown number");
   }
   
   /*In the about switch statement, the default statement would be executed.
   *Because, expression does not match with any of availablecasess.
   *If I change 7.5 into 8.5 "number is 8.5" would be printed.
   */
   
   //ternary//
   
   var number = true ? 15 : 20;
   console.log(number); // 15
   
   /**
    * Let's say I have ternary that eventually returns me a number.
    * If the condition is true, returns me 15. Otherwise, return me 20.
    * If I console.log() the number it would print me 15.
    * 
    * Let's convert the multibranch if statement example above into ternary.
    * Ternary evantually return us n2.
   */
   
   var n2 = (8 > 9) ? 8 : (8 === 9) ? 9 : 0;
   
   //0
   
   
   
   
   
   
   