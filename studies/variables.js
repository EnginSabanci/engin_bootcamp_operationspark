/*
   * VARIABLES:
   *
   * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
   * are named identifiers that can point to values of a particular type, like a Number, String,
   * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
   * can CHANGE the value (and type of value) to which they point.
   *
   * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
   * variable.
   *
   * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
   */

  // 1. declaration //
  var myName;

  /*
   * At the declaration phase, the variable myName is undefined because we have NOT initialized
   * it to anything
   */
  console.log(myName); // prints => undefined

  // 2. initialization or assignment //
  myName = 'john';
  console.log(myName); // prints => john

  // 3. re-assignment //
  myName = 'bob';
  console.log(myName); // prints => bob

  // NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
  var myVariable = 1;
  var myVariable = true;
  myVariable = "someString";
  
  /**
   * 1.Var
   * Variables can be reassign to a new value.
   * They are hoisted. They don't scope to if and loop blocks. They scope to the function block.
   * 
   * 
   * 2.Constants
   * Containers whose values can never change; they are block scoped, and not hoisted to the top of their block scope
   * Constants are created by using key word const and must be assigned a value immediately.
   * We can not leave a const unassigned or undefined.
   * 
   * 3. Let
   * Let is a container for reassignable value.They are not hoisted to their code block.
   * Let is block scoped local variable. It is optional to initialize a value to Let.
   * 
   * 4.Hoisting 
   * Constant is block scoped. They are bound within the block in which they are assigned.
   * They are not hoisted to the top of their enclosing block.
   * Their values can not be defined until declaration/assignment.
   * 
   * Let are not hoisted to their code block
   * Declaration of var is dragged up to the top of the program.
   * Therefore, if we call a var variable after declaration but before assigning a value,
   * it does not throw an error. It gives undefined value.
   * 
  **/