// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    //make contact should return an object
    return {
        id:id,
        nameFirst: nameFirst,
        nameLast: nameLast,
    }

} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact){
            contacts.push(contact);
        },
        findContact: function(fullName){
            for(var i = 0; i < contacts.length; i++){
                var temp = contacts[i]["nameFirst"] + " " + contacts[i]["nameLast"];
                if(temp === fullName){
                   return contacts[i];
                }
            }
        },
        removeContact: function(contact){
            for(var i = 0; i < contacts.length; i++) { //for loop to loop through the contact array and check to see if the parameter value contact id strictly equals the contacts array id at the specified index after looping. 
            if(contact.id === contacts[i].id) {
              contacts.splice(i, 1); //.splice will take the contacts array at index I and remove one contact from the array.
            }
          }
        },
        printAllContactNames: function(fullName){
            var all = "";
            for(var i = 0; i < contacts.length -1; i++){
                all +=  contacts[i]["nameFirst"] + " " + contacts[i]["nameLast"] + "\n";
                
            } return (all + contacts[contacts.length-1]["nameFirst"] + " " + contacts[contacts.length-1]["nameLast"]);
            
            
        }
    };



}

// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
