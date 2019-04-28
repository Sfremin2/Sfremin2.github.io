//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    var arr = [];
    
    for (var key in object) {
        arr.push(object[key]);
    }
    return arr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var arr = [];
    
    for (var key in object) {
        arr.push(key);
    }
    return arr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var arr = [];
    
    for (var key in object) {
       if (typeof object[key] === 'string') {
         arr.push(object[key]);
       }
    }
    return arr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
        return "array";
    }
    else {
        return "object";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    var arr = string.split("");
    arr[0] = arr[0].toUpperCase();
    return arr.join("");
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var arr = string.split(" ");
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
        arr2.push(capitalizeWord(arr[i]));
      console.log(arr2);
    }
    return arr2.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    var name = capitalizeWord(object.name);
    console.log(name);
    var mess = 'Welcome ' + name + '!';
    return mess;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    var name = capitalizeWord(object.name);
    var species = capitalizeWord(object.species);
    var mess = name + " is a " + species;
    return mess;
    
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    var result = 'there are no noises';
    if (object.noises && object.noises !== []) {
        var arr = object.noises;
        result = arr.join(" ");
    } 
    if (result === "") {
        result = 'there are no noises';
    }
    return result;
}


//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    var arr = string.split(" ");
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === word) {
            return true;
        }
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if (object.friends) {
        for (var i = 0; i < object.friends.length; i++) {
            if (object.friends[i] === name) {
                return true;
            }
        }
    }
    return false;
}
//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    var arr = [];
    
    for(var i = 0; i < array.length; i++) {
      var name1 = array[i];
      //console.log(name1.name);
      //console.log(name1.friends);
      if (isFriend(name, name1) !== true && name1.name !== name) {
        arr.push(name1.name);
      }
    }
  return arr;
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
    var obj = object;
    
    for (var i = 0; i < array.length; i++) {
        delete object[array[i]];
    }
    
    return obj;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    // this is a clever solution but it has one major flaw
  const arr = array;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        continue;
      }
      if (arr[i] === arr[j]) {
          
          /* this will remove the first instance of arr[i] which will be arr[i] itself 
          
          instead, once you find that arr[i] matches arr[j], just remove the value at arr[j]:
          
            arr.splice(j, 1)
          
          now you need to make sure that you decrement j as well:
            
            j--;
            
          because now you've shifted all elements that follow back 1 index and you'll skip
          the value at j+1
          
          */
        let index = arr.indexOf(arr[i]);
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr;
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