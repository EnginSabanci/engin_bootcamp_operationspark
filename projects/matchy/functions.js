/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


var search = function(arr, name){
    // var result;
    for(var i = 0; i < arr.length; i++){
        if (arr[i].name === name){
            return arr[i];
        } 
    }return  null;
    
};


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var replace = function(arr, name,replacement){
    // var result;
    for(var i = 0; i < arr.length; i++){
        if (arr[i].name === name){
            // result = arr[i].name;
            arr[i] = replacement;
        } 
    }return  null;
    
};
//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var remove = function(arr, name){
    for(var i = 0; i < arr.length; i++){
        if (arr[i].name === name){
            arr.splice(i,1);
        } 
    }return  null;
    
};

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//  1. Write a function declaration called `add` with a signature of `add(animals, animal) { //... }` that:
//   - Takes 2 parameter, an Array of animals, and an Object representing a new animal to be added.
//   - Checks that the animal Object has a `name` property with a length > 0.
//   - Checks that the animal Object has a `species` property with a length > 0.
//   - Has a **unique** name, meaning no other animals have that name.
//   - Adds this new Object to the `animals` Array, **only** if all the other conditions pass.
//   - Make sure it works.

var add = function(animals,animal){
    var allTrue = 0;
    for (var i = 0; i < animals.length; i++){
        if(animal.hasOwnProperty("species") && animal.species.length > 0 && animal.hasOwnProperty("name") && animal.name.length > 0 && animals[i].name !== animal.name){
            allTrue += 1;       }
    } if (allTrue == animals.length){
        animals.push(animal);
    }
    return null;
};

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
