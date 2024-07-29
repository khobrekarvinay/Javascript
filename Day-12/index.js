// Q Given an string find out numbers of repetation for single lette.

// v : 1
// i : 1
// n : 1
// a : 2
// y : 1
var string = "nayannayan";

function findDuplicates(string) {
  var output = {};
  var count = 0 ;
  var repeat = "";
  console.log(string, "string");
  for (var i = 0; i <= string.length - 1; i++) {
    // console.log(string[i]);
    // console.log(output[string[i]]);
    if (output[string[i]] == undefined) {
      output[string[i]] = 1;
    } else {
      output[string[i]]++;
    }
  }
  console.log(output);
  for( let element in output ){
    output[element]
  }
}

findDuplicates(string);

// Q Given an string find out numbers of repetation for single letter and return a letter which having most of reperation .
function findMostFrequentLetter(string) {
    var output = {};
  
    
    for (var i = 0; i < string.length; i++) {
      var char = string[i];
  
      
      if (output[char] === undefined) {
        output[char] = 1;
      } else {
        output[char]++;
      }
    }
  
    
    var mostFrequentChar = '';
    var maxCount = 0;
  
    
    for (var char in output) {
      if (output[char] > maxCount) {
        mostFrequentChar = char;
        maxCount = output[char];
      }
    }
  
    console.log(`The most frequent letter is '${mostFrequentChar}' and it appears ${maxCount} times.`);
    
    
    return { letter: mostFrequentChar, count: maxCount };
  }
  
  
  var string = "hello world";
  findMostFrequentLetter(string);
  