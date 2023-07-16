/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/



// function tellFortune(numberChildren, partnerName, geographicLocation, jobTitle){
// console.log(`You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberChildren} kids.`)
// }

// let numberChildren = 4,
//  partnerName= "ahmad", geographicLocation = "irbid", jobTitle = "teacher";

// tellFortune(numberChildren, partnerName, geographicLocation, jobTitle);


/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.function named calculateDogAge
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/

// function calculateDogAge(year){
//     let dogAge=year * 7;
//     console.log(`Your doggie is ${dogAge} years old in dog years!`)
// }

// calculateDogAge(5)

/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> `You will need 76650 cups of tea to last you until the ripe old age of 100`;
*/
// function calculateSupply(age,amount){
// let y=100-age;
// let x = amount * y * 365
// console.log(`You will need ${x} cups of tea to last you until the ripe old age of ${age}`)
// }

// calculateSupply(30, 3)


/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
// function greet(name){
// console.log("Hello "+name)
// }

// greet("Adam")

/*
5
what is the error:
function double(cat) {
  return 2 * cat;
}

function double(num=7) {
  return 2 * 7;
}

function double(x=7) {
  return 2 * x;
}

*/


/*
6
fix these functions:

function double1(x) {
  return 2 * x ;
}

function double2 (x){
return 2 * x;
}

function double3 (x) {
  return 2 * x;
}

*/

/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/

// function cube(x){
// return x**3
// }

// console.log(cube(4))

/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/

// function cube(x, y){
// return x*y
// }

// console.log(multiply(3,4))

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/

// function canIGetADrivingLicense(age){

//     if (age >= 20){
//         console.log("yes you can")  
//     }else{
//         console.log("please come back after "+(20-age) +" years to get one")
//     }
// }
// canIGetADrivingLicense(18)

/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

// function sameLength(str1, str2){
// if(str1.length == str2.length){
// console.log("true")
// }else{
//     console.log("false") 
// }
// }

// sameLength("ras", "dewr")


/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/

// function largerNubmer(num1,num2){
// if(num1>num2){
//     console.log(num1)
// }else{
//     console.log(num2)
// }

// }
// largerNubmer(6,9)



/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/

// function smallerNubmer(num1, num2, num3){
//     let minimum=0
//     if (num1 < num2 && num1 < num3){
//         minimum = num1;
//     }
//     else if (num2 < num1 && num2 < num3){
//         minimum = num2;
//     }
//     else if (num3 < num1 && num3 < num2){
//         minimum = num3;
//     }
//     console.log(minimum)
// }
// smallerNubmer(5,1,2);



/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/



// function shorterString(...strs){
//     let shorter= strs[0]
// for(let i=0;i<strs.length;i++){
//     if( strs[i].length < shorter.length){
//         shorter=strs[i]
//     }
// }
// console.log(shorter)
// }

// shorterString("air","t","car","github","by")


/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/


// function longerString(...strs){
//     let longer= strs[0]
// for(let i=0;i<strs.length;i++){
//     if( strs[i].length > longer.length){
//         longer=strs[i]
//     }
// }
// console.log(longer)
// }

// longerString("air","t","car","github","by")



/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/

// function isEven(num){
//     if(num % 2 === 0){
//         console.log("true");
//     }else{
//         console.log("false");
//     }
// }

// isEven(6)



/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/


// function isOdd(num){
//     if(num % 2 === 1){
//         console.log("true");
//     }else{
//         console.log("false");
//     }
// }

// isOdd(3)




/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/

// function positive(num){
//     if(num >0){
//         console.log("true");
//     }else{
//         console.log("false");
//     }
// }

// positive(-2)



/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/

// function fullName(firstName, lastName){
// console.log(firstName+" "+ lastName)
// }

// fullName("razan","alkateeb")

/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/

// function average(...numbers){
//     let sum=0
//     for(let i=0 ; i < numbers.length ; i++){
//         sum +=numbers[i]
//     }
//     console.log(sum / numbers.length )
// }

// average(1,2,3,4,5)

/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/



// function randomNumber() {
//     return console.log(Math.random());
//   }
  
//   randomNumber();
//   randomNumber(); 



/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/



// function randomBetweenNumbers(min, max) {
//     return console.log(Math.random() * (max - min) + min); 
//   }
  
//   randomBetweenNumbers(1, 8); 
//   randomBetweenNumbers(3, 100); 






/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/

// function scoreInUniversty(score) {
//     let result;
//     switch(true) {
//         case score <= 49:
//             result = "F";
//             break;

//         case score <= 69:
//             result = "D";
//             break;

//         case score <= 84:
//             result = "C";
//             break;
        
//         case score <= 94:
//             result = "B";
//             break;

//         case score <= 100:
//             result = "A";
//             break;
//     }


//     return result;
// }

// console.log(scoreInUniversty(60))



/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/

// let count = 0;

// function counter() {
//     console.log(count++);
// }
// function resetCounter(){
//     console.log(`${count} and the counter reset now`);
//     cnt = 0;
// }

// counter()
// counter()
// counter()
// resetCounter()
// counter()
// resetCounter()


/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1


*/






