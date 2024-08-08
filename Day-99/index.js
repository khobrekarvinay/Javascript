console.log("Q. Is string Palindrome or not")
  function isPalindrome(string) {
    // Remove non-alphanumeric characters and convert the string to lowercase
    // rotator - 7 = string length. Array[6] 7/2= 3.5 | Mathfloor=3 | i<=3
    // rottor
    // 1st 
    
    for (var i = 0; i <= Math.floor((string.length - 1) / 2); i++) {
      console.log(string[i] + "==" + string[string.length - 1 - i])
        
        if (string[i] !== string[string.length - 1 - i]) {
          
          return "String is not a palindrome";  
        }
    }
    return "String is palindrome"; 
}


console.log(isPalindrome("rotator"));  
console.log(isPalindrome("holloh"));    
console.log(isPalindrome("A man, a plan, a canal, Panama"));  
console.log(isPalindrome("No 'x' in Nixon"));  