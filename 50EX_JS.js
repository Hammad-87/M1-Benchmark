
/*              JS EXERCISES
 */
/* 21) Given variable X = "John" and Y = "Doe", write on the console log "John <> Doe" */
let x = "John"
let y = "Doe"
console.log(x + y);

/* 22) Create an object with properties such Name, Surname, Email
 */
 let object = {
     Name: "name",
     Surname: "surname",
     Email: "email@email.com"
 }

/*  23) Delete Email from the previously created object
 */
 delete object.Email;
 
 
 /* 24) Create an array with 10 strings in it */

 let array = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

/* 25) Print in the console every string in the previous array */
console.log(array);

/* 26) Create an array with 100 random numbers in it
 */
 let arr100 = []
 for (let i = 0, n = 99; i < n; i++){
     arr100.push(Math.round(Math.random() * n))
 }
  let newArray = array.concat(arr100);
  console.log(newArray);
 
/*  27) Wrote a function to get the MAX and the MIN from the previously created array
 */
 var filtered = a.filter(function (item) {
    return (parseInt(item) == item);
  });
  var max = filtered.reduce(function(a, b) {
    return Math.max(a, b);
});
console.log(max);
var min = filtered.reduce(function(a, b) {
    return Math.min(a, b);
});
console.log(min);

/*  28) Create an array of arrays, in which every array has 10 random numbers
 */
let array1 = []
let array2 = []
for (let i = 0, n = 9; i < n ; i++){
    arr100.push(Math.round(Math.random() * n))
}
let newArray = array1.concat(array2);
  console.log(newArray);
 
/*  29) Create a function that gets 2 arrays and returns the longest one
 */ 
 let arr = [[1,2,3,4,5], [1,2,3]]
 var longest = arr.reduce(function (a, b) { return a.length > b.length ? a : b; });
 console.log(longest);


 
/*  30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values
 */
 var longest = arr.reduce(function (a, b) { return (a.reduce((a, b) => a + b, 0)) > (b.reduce((a, b) => a + b, 0)) ? a : b; });