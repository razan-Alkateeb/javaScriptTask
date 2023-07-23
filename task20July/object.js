console.log("Here is : ", "Object");

/*
1
Create an object represents you
have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)
*/

let myObject = {
  fname: "razan",
  lname: "alkateeb",
  age: 24,
  dob: "27-08-1998",
  favFood: ["food1", "food2", "food3"],
  favMovie: ["movie1", "movie2", "movie3", "movie4", "movie5"],
};

var persons = [
  { name: { first: "John", last: "Hob" }, age: 35 },
  { name: { first: "Alex", last: "Mercer" }, age: 25 },
  { name: { first: "Alice", last: "Zaheer" }, age: 24 },
  { name: { first: "Zues", last: "Odin" }, age: 55 },
  { name: { first: "Soso", last: "Al-Amora" }, age: 67 },
];

/*
2
Using the varabile persons
Create a function called firstName
that accept an object
and return all the first name of the person insides

Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
*/

// function firstName(arr){

//   const fName = arr.map((currentValue) => {
//       return currentValue.name.first;
//   });

//   return fName;
// }

// console.log(firstName(persons));

/*
3
Using the varabile persons
Create a function called averageAge
that accept an object
and return the average age of those persons

Ex: averageAge(persons) => 41.2
*/

// function averageAge(arr) {
//   const sumOfAges = arr.reduce(
//     (accumulator, currentValue) => accumulator + currentValue.age,
//     0
//   );
//   return sumOfAges / arr.length;
// }

// console.log(averageAge(persons));

/*
4
Using the varabile persons
Create a function called olderPerson
that accept an object
and return the full name of the older person

Ex: olderPerson(persons) => "Soso Al-Amora"
*/

// function olderPerson(arr) {
//   let olderOne = arr[0];
//   arr.forEach((currentValue) => {
//     if (currentValue.age > olderOne.age) {
//       olderOne = currentValue;
//     }
//   });

//   return `${olderOne.name.first} ${olderOne.name.last}`;
// }

// console.log(olderPerson(persons));

/*
5
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/

// function longestName(arr){

//   const longestFullName = arr.reduce((accumulator, currentValue) => {
//       //console.log(accumulator);
//       const fullName = `${currentValue.name.first} ${currentValue.name.last}`;

//       if(fullName.length >accumulator.length )
//           return fullName;
//       else 
//           return accumulator;
      
//   }, '');

//   return longestFullName;
// }

// console.log(longestName(persons));  



/*
6
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/

//////////////////////////////////////////////////////////////////

/*
7
Create a function called repeatWord
that accept a string
and return an object that represents how many times each word repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to words??

Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
=> {
  my:1,
  name:2,
  is:1,
  alex:1,
  mercer:1,
  class:1,
  b:1,
  baba:1,
  mama:1,
  hello:3
}
*/


// function repeatWord(str){
//   let splitStr = str.toLowerCase().split(' ');
//   const wordCountObj = {};

//   splitStr.forEach((currentValue) => {

//       if (wordCountObj.hasOwnProperty(currentValue)) {
//           wordCountObj[currentValue]++;
//       } else {
//           wordCountObj[currentValue] = 1;
//       }

//   });

//   return wordCountObj;

// }

// console.log(repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO"));


/*
8
Create a function called repeatChar
that accept a string
and return an object that represents how many times each char repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to char??

Ex: repeatChar("mamababatetacedo")
=> { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
*/

/*
9
Create a function called selectFromObject
that accept an object and an array
and return an object have the key that inside the array

Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
=>  {a: 1, cat: 3}
*/

/*
10
Create a function called objectToArray
that accept an object
and return an array of the keys and values in this object

Ex: objectToArray({firstName:"Moh",age:24})
=> ["firstName","Moh","age",24]
*/

/*
11
Create a function called arrayToObject
that accept an array
and return an object of the keys and values in this object

Ex: arrayToObject(["firstName","Moh","age",24])
=> {firstName:"Moh",age:24}
*/

/*
12
Create a function called onlyNumber
that accept an object
and return a new object that have only the values that is a number
**hint: search in MDN how to know the type of variable

Ex: onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {age:24}
*/

/*
13
Create a function called onlyString
that accept an object
and return a new object that have only the values that is a string
**hint: search in MDN how to know the type of variable

Ex: onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {firstName:"Moh"}
*/

/*
14
Create a function called onlyArray
that accept an object
and return a new object that have only the values that is a array
**hint: search in MDN how to know the type of variable

Ex: onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {movies:[1,5,"string"]}
*/

/*
15
Create a function called keysArray
that accept an object
and return an array have the key inside this object

Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ['firstName', 'age', 'movies']

*/

/*
16
Create a function called valuesArray
that accept an object
and return an array have the values inside this object

Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ["Moh", 24, [1,5,"string"]]

*/

/*
17
make this object => {a:1,b:3,c:4}
to be this object {a:4,c:66}
**hint: Search on MDN how to remove a key/value from an object
*/

/*
18
Create a function called objectLength
that accept an object
and return the number of keys inside this object

Ex: keysArray({a:1,b:2,c:3,d:4})
=> 4
*/

/*
19
Create a function called evenValue
that accept an object
and return a new object that have only the key/values if the value is even

Ex: evenValue({a:1, b:2, c:3, d:4})
=> {b:2, d:4}
*/

/*
20
Create a function called longestKey
that accept an object
and return the value inside the longest key

Ex: evenValue({car:1, school:2, monster:3, alexMercer:4})=> 4
*/
