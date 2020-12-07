// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-enginsabanci"/* Replace this with the name of your lodown! */);

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./<YOUR_GITHUB_FOLDER/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    var acc = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i]["gender"] === "male"){
            acc++;
        }
    }  return acc;
};

var femaleCount = function(array){
    var acc = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i]["gender"] === "female"){
            acc++;
        }
    }  return acc;
};

var oldestCustomer = function(array){
    var name;
    var baseAge = 0;
    for(let i = 0; i < array.length; i++){
      if(array[i]["age"] > baseAge){
          baseAge = array[i]["age"];
      }
    }
    for(let i = 0; i < array.length; i++){
      if(array[i]["age"] === baseAge){
          name = array[i]["name"];
      }
    }
    return name;  
};

var youngestCustomer = function(array){
    var name;
    var baseAge = 200;
    for(let i = 0; i < array.length; i++){
      if(array[i]["age"] < baseAge){
          baseAge = array[i]["age"];
      }
    }
    for(let i = 0; i < array.length; i++){
      if(array[i]["age"] === baseAge){
          name = array[i]["name"];
      }
    }
    return name;  
};

var averageBalance = function(array){
    var allBalancesAddedArray = 0;
 
    _.each(array,function(customer,i,a){
       
        allBalancesAddedArray += parseFloat(customer.balance.replace(/\$|,/g,''));
       
    });
   
    return allBalancesAddedArray/array.length;
};

var firstLetterCount = function(array,letter){
    var counter = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i]["name"][0].toLowerCase() === letter.toLowerCase()){
            counter++;
        }
    } return counter;
};

var friendFirstLetterCount = function(array, customer,letter){
    
  var arrFriends;
    for(let i = 0; i < array.length; i++){
        if(array[i]["name"].toLowerCase() === customer.toLowerCase()){
            arrFriends = (array[i]["friends"]);
        }
    }
    
    var counter = 0;
    for(let i = 0; i < arrFriends.length; i++){
        if(arrFriends[i]["name"][0].toLowerCase() === letter.toLowerCase()){
            counter++;
        }
    }

    return counter;
};


var friendsCount = function(array,name){
    
    let output = [];
    for(let i = 0; i < array.length; i++){
       for(let j = 0; j < array[i]["friends"].length;j++){
           
         if(array[i]["friends"][j]["name"] === name) output.push(array[i]["name"]);
    }
}   
    return output;
    // on this one study how to iterate over all data!!
   //iterate over every element to access objects
//   return _.reduce(array,function(seed,customer,i,a){
//     // iterate over array
//     _.each(customer.friends,function(friend,i,a){
//      if(friend.name === name){
//       seed.push(customer.name);
//      }
//     });
//         return seed ;
//      },[]);
};


var topThreeTags = function(array){
    var tagCount = {};
    // iterate over array
    _.each(array, function(customer, i, a){
        //iterate over customer.tags array
        _.each(customer.tags, function(tag, i, a){
            //if tag is no in object tagCount add it at = 0
            if(!tagCount[tag]){
            tagCount[tag] = 0;
            }
            // else add 1 to existing tag
            tagCount[tag] += 1;
        });
    });
    var resultArr = [];
    // iterate over tag count object
    _.each(tagCount, function(value, key, a){
        // push int o result array objects with key and count this will show the tag and the repeated number
        resultArr.push({tag: key, count: value});
   });
    var compare = function(a,b) {
       //
  if (a.count < b.count)
      //
    return -1;
  if (a.count > b.count)
    return 1;
  return 0;
};
var sortedArr = resultArr.sort(compare);
var topThree = _.map(sortedArr, function(e){
    return e.tag;
});
return topThree.slice(-3);
};

var nonBinaryCount = function(array) {
    var acc = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i]["gender"] === "non-binary"){
            acc++;
        }
    }  return acc;
};

var genderCount = function(array){
    let result = {};
    result["male"] = maleCount(array);
    result["female"] = femaleCount(array);
    result["non-binary"] = nonBinaryCount(array);
    return result;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
