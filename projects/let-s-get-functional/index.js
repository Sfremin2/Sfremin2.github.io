// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lowdown-sfremin2');

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
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(array) {
    let count = _.filter(array, function(e, i, c) {
        if (e.gender === "male") {
            return true;
        }
    });
    return count.length;
};

var femaleCount = function(array) {
    let count = _.filter(array, function(e, i, c) {
        if (e.gender === "female") {
            return true;
        }
    });
    return count.length;
};

var oldestCustomer = function(array) {
    let oldest;
    const ages = [];
    _.each(array, function(e, i, c) {
      ages.push(e.age);
    });
    let oldestAge = 0;
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] > oldestAge) {
            oldestAge = ages[i];
        }
    }
    _.each(array, function(e, i, c) {
      if(e.age === oldestAge) {
          oldest = e.name;
      }
    });
    return oldest;
};

var youngestCustomer = function(array) {
    let youngest;
    const ages = [];
    _.each(array, function(e, i, c) {
      ages.push(e.age);
    });
    let youngestAge;
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] < youngestAge || youngestAge === undefined) {
            youngestAge = ages[i];
        }
    }
    _.each(array, function(e, i, c) {
      if(e.age === youngestAge) {
          youngest = e.name;
      }
    });
    return youngest;
};

var averageBalance = function(array) {
    let balances = [];
    let total = 0;
    _.each(array, function(e, i, c) {
        let balance = e.balance;
       balances.push(Number(balance.replace(/[^0-9\.-]+/g,"")));
    });
    for(let i = 0; i < balances.length; i++) {
        total += balances[i];
    }
    let avg = total / balances.length;
    return avg;
};
    
var firstLetterCount = function(array, letter) {
    let count = _.filter(array, function(e, i, c) {
        if (e.name[0].toLowerCase() === letter.toLowerCase()) {
            return true;
        }
    });
    return count.length;
};

var friendFirstLetterCount = function(array, customer, letter) {
    let customerObj;
    _.each(array, function(e, i, c) {
        if (customer === e.name) {
            customerObj = e;
        }
    });
    let count = _.filter(customerObj.friends, function(e, i, c) {
        if (e.name[0].toLowerCase() === letter.toLowerCase()) {
            return true;
        }
    });
    return count.length;
};

var friendsCount = function(array, name) {
    const arr = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].friends.length; j++) {
            if (array[i].friends[j].name === name) {
                arr.push(array[i].name);
            }
        }
    }
    return arr;
};

var topThreeTags = function(array) {
  const topThree = [];
  const allTags = [];
  const tagsCount = {};
  let highestTagNum = 0;
  let highestTag;
  
  /*
  This is great! Below, i've written
  something that will get the job done a little
  quicker...
  
  _.each(array, function(e, i, c) {
    let tagsArr = e.tags;
    for (let j = 0; j < tagsArr.length; j++) {
      allTags.push(e.tags[j]);
     }
  });
  //console.log(allTags);
  dedup(allTags);
  for (let p = 0; p < allTags.length; p++) {
    const indTag = allTags[p];
    tagsCount[indTag] = 0;
  }
  //console.log(tagsCount);
  _.each(array, function(e, i, c) {
    let tagsArr = e.tags;
    for(let q = 0; q < tagsArr.length; q++) {
      let tag = tagsArr[q];
      tagsCount[tag] += 1;
    }
  });
  */
  
  // for each person iterate through their tags
  _.each(array, function(person, i, c) {
    let tagsArr = person.tags;
    
    // for each tag, if the count doesn't exist
    // set it to 0, otherwise increment
    _.each(tagsArr, function(tag, i, c) {
       if (tagsCount[tag] === undefined) {
           tagsCount[tag] = 0;
       } 
       tagsCount[tag]++;
    });
  });
  
  
  //console.log(tagsCount);
  
  // this is excellent, i would just change
  // <key> to <tag>
   for (let t = 0; t < 3; t++) {
     for (let tag in tagsCount) {
       if (tagsCount[tag] > highestTagNum) {
         highestTagNum = tagsCount[tag];
         highestTag = tag;
         tagsCount[tag] = 0;
      }
    }
     topThree.push(highestTag);
     highestTagNum = 0;
  }
  return topThree;
};

function dedup(array) {
  const arr = array;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        continue;
      }
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr;
}

var genderCount = function(array) {
    const result = {};
    result.male = maleCount(array);
    result.female = femaleCount(array);
    let count = _.filter(array, function(e, i, c) {
        if (e.gender === "transgender") {
            return true;
        }
    });
    result.transgender = count.length;
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
