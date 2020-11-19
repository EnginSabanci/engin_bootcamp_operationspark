//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
var arr = [];
for(var property in object){
    arr.push(object[property]);
} return arr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var str = "";
    var keys = Object.keys(object);
    for(var i = 0; i < keys.length; i++){
        str += " " + keys[i];
    }
   // var newStr = str.trim();
    return str.trim();
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
   //Create an empty string.
   //Create a new string.
   //If object is an array, iterate over these object with for loop. If object is not an array but an object, use for in loop to get value of each property
   //If elements of array or property values of object is String data type, concate them with the created string by puting space before " " + object[i]
   //Trim the space before or after the String and assign it to  the new string
   //Return the new string
    var str = "";
    var newStr;
   
    if(Array.isArray(object)){
        for(var i = 0; i < object.length; i++){
            if(typeof object[i] === "string"){
                str += " " + object[i];
            }
        } newStr = str.trim();
    } else if(typeof object === "object"){
        for(var property in object){
            if(typeof object[property] === "string"){
                str += " " + object[property];        
            }
        } newStr = str.trim();
    } return newStr;
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    var str;
   
   
    if(Array.isArray(collection)){
        str = "array";
    } else if(typeof collection === "object"){
        str = "object";
    } return str;
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
   return string[0].toUpperCase() + string.substring(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    /*
    Split the string with .split(" ").
    Take the first element then firt letter of that element and make it capital letter.
    Assign it same index.
    Join the array elements with .join(" ").
    */
    var arr = string.split(" ");
    for (var i = 0; i < arr.length; i++){
        arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
    } return arr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    return "Welcome " + capitalizeWord(object["name"]) + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
   return capitalizeWord(object["name"]) + " is a " + capitalizeWord(object["species"]) ;

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    var str;
    if(object["noises"] && object["noises"].length > 0){
        str =  valuesToString(object["noises"]);
    } else if (["noises"]) {
        str = "there are no noises";
    }
    return str;
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    return string.includes(word);

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object["friends"].push(name);
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a name and an object and return true if <name> is a friend of <object> and false otherwise
function isFriend(name, object) {
    var isFriends;
    var arr = object["friends"];
   
   if (arr !== undefined){
        
        for(var i = 0; i < arr.length; i++){
            if(name === arr[i]){
                isFriends = true;
               // console.log(arr[i] + " is a friend");
            } else{
               isFriends = false;
                //console.log(arr[i] + " is not a friend;");
            }
            
        }
        return isFriends;
   } else{
        return false; 
   }  
   
}


//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////Should take a name and a list of people
//return a list of all the names that <name> is not friends with

function nonFriends(name, array) {
var arrTemp;
var arrCompare = [];  
for(var i = 0; i < array.length; i++){
    if(array[i]["name"] !== name){
        arrCompare.push(array[i]["name"]);
        }
    if(array[i]["name"] === name){
        arrTemp = array[i]["friends"];
    }
}
var arrUnique = [];

for (var h = 0; h < arrCompare.length; h++){
    var k = 0;
    for(var j = 0; j < arrTemp.length; j++){
        if(arrCompare[h] === arrTemp[j]){
           k = k +1;
        }
    }
    
    if (k === 0){
        arrUnique.push(arrCompare[h]);
    }
    
}

    return arrUnique;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value;
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    var arrKeys = Object.keys(object);
    for (var i = 0; i < arrKeys.length; i++){
        for(var j = 0; j < array.length; j++){
            if(arrKeys[i] === array[j]){
                delete object[arrKeys[i]];
            }
        }
        
    }
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    var arrUnique = [];

for (var i = 0; i < array.length; i++){
    var k = 0;
    for(var j = i; j < array.length; j++){
        if(array[i] === array[j]){
           k = k +1;
        }
    }
    
    if (k === 1){
        arrUnique.push(array[i]);
    }
    
}

    return arrUnique;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}