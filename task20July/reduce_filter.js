console.log('Here is : ', 'Reduce & Filter') 

//Using Reduce 1 -5
var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];



/*
1
Using the varabile persons
Create a function called avgAge
that accept an array
and return average age of this array

Ex: avgAge(persons) => 41.2
*/

// let sumAge = persons.reduce(function(acc,ele) {
// return acc + ele.age
// },0);

// let avgAge = sumAge/persons.length;
// console.log(avgAge);

/*
2
Using the varabile persons
Create a function called longestName
that accept an array
and return the longerst full name

Ex: longestName(persons) => 'Soso Al-Amora'
*/

// let longestName = persons.map(function(ele) { 
//   return ele.name.first + " " + ele.name.last
// }).reduce(function(acc,ele) {
//   return ele.length > acc.length ? acc=ele : acc
// });

// console.log(longestName);

/*
3
Create a function called maxNumber
that accept an array
and return max number

Ex: maxNumber([1,2,4,9]) => 9
*/


// maxNumber=[1,2,4,9];
// let max = maxNumber.reduce(function(acc,ele) {
//   return acc < ele ? acc=ele :acc 
//   },);
//   console.log(max);

/*
4
Create a function called repeatChar
that accept a string and char
and return number times that this char repeat inside the string

Ex: repeatChar("hello world",w) => 1
*/

// let str =("hello world")

// let repeatChar = str.split("").filter(function(ele) { 
//   return ele ==="w"});
//   console.log(repeatChar.length);


/*
5
Create a function called usAndNumberBeetweenUs
that accept two numbers
and return array of these two numbers and the numbers between them

Ex: usAndNumberBeetweenUs(2,5) => [2,3,4,5]
*/

//?????????????????????

//  let num = [2,5];

//  let usAndNumberBeetweenUs = num.filter(function(ele) {
//  return ele > 2 && ele < 5;
//  },);

//console.log(Math.floor(Math.random() * (5 - 2 + 1)) + 2) 


//Filter 6 - 11
/*
6
Create a function called evenOnly
that accept an array
and return an array of even number only

Ex: evenOnly([1,8,6,4]) => [8,6,4]
*/

// let num = [1,8,6,4];
// let evenOnly = num.filter(function(ele){
//   return ele % 2 === 0;
// });
// console.log(evenOnly);

/*
7
Create a function called multiFour
that accept an array
and return an array of these number that is a mutiply by 4

Ex: multiFour([1,8,6,4]) => [8,4]
*/

// let num = [1,8,6,4];
// let evenOnly = num.filter(function(ele){
//   return ele % 4 === 0;
// });
// console.log(evenOnly);

/*
8
**this question not that easy mybe you will need to use two function inside each other

Create a function called containChar
that accept an array of string
and return an array of these string that contain this char

Ex: containChar(["hello","world"],w) => ["world"]
Ex: containChar(["hello","world"],l) => ["hello","world"]
*/


// let containChar = ["hello","world"]

// let newArray = containChar.filter(function(ele){
//   return ele.includes("l");
// });

// console.log(newArray);


/*
9
Create a function called evenIndexOddLength
that accept an array of strings
and return an array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
*/

//  let strings= ["alex","mercer","madrasa","rashed2","emad","hala"]


//  let evenIndexOddLength = strings.filter(function(ele ,i){
//    return i % 2 === 0;
//  }).filter(function(ele){
  
//    return ele.length % 2 === 1;
//  });

//  console.log(evenIndexOddLength);


/*
10
Using the varabile persons
Create a function called olderThan
that accept an array and number
and return the person that have age older than this number

Ex: olderThan(persons,56) => [{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }]
*/

// let oldThan = persons.filter(function(ele){
//   return ele.age > 56;
// });

// console.log(oldThan);

/*
11
Create a function called shorterThan
that accept an array of strings and a number
and return the shorter string than the number

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterThan(strings,5) => ["alex","emad","hala"]
*/

// let strings = ["alex","mercer","madrasa","rashed2","emad","hala"]

// let shorterThan = strings.filter(function(ele){
//   return ele.length < 5;
// });

// console.log(shorterThan); 


// if you finish the exercises review the material of the week and help your classmate