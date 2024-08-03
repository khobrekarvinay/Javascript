console.log("Q Give an aray, do addition of numbers by using while loop");

var array = [2, 4, 5, 6, 7, 8, 3, 2];

var sum=0;
var i=0;
while (i <= array.length-1){
    sum=sum + array[i];
    i++;
}
console.log(`The sum is ${sum}`);


console.log("Q Give an aray, find only odd numbers by using while loop")  

var arrayx = [2, 4, 5, 6, 7, 8, 3, 2];

var array= [];
var i=0;
 while (i <= arrayx.length-1){
    if (arrayx[i] % 2 == 1){
        array.push(arrayx[i]);
    }
    i++;
 }
console.log(array);

console.log("Q Give an aray, find count of even numbers by using while loop");


var arrayy = [2, 4, 5, 6, 7, 8, 3, 2];
count=0;
var i=0;
 while (i <= arrayy.length-1){
    if (arrayy[i] % 2 == 0){
        count++;
    }
    i++;
 }
console.log(`The count of even numbers is ${count}`);

// ouput : 