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
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    var obj = {}
    obj.id = id;
    obj.nameFirst = nameFirst;
    obj.nameLast = nameLast;
    return obj;
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
  var contacts = {};
  var contactNum = 1;
    return {
        // we implemented the length api for you //
        length: function() {
          return getObjectKeys(contacts).length;
        },
        addContact: function(contact) {
            contacts[contactNum] = contact;
          contactNum += 1;
          console.log(contacts);
        },
        findContact: function(fullName) {
            for (var key in contacts) {
                let name = contacts[key].nameFirst + ' ' + contacts[key].nameLast;
                if (fullName.toLowerCase() === name.toLowerCase()) {
                    return contacts[key];
                }
            }
            return undefined;
        },
        removeContact: function(contact) {
            delete contacts.contact;
        }
        
      
}




// YOUR CODE GOES ABOVE HERE //
}

function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  var arr = [];
  
  for (var key in object) {
    arr.push(key);
  }
  
  return arr;
  
  // YOUR CODE ABOVE HERE //
}



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
