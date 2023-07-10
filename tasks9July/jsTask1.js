/*
let x = 250 ;
create variable Calculate the value of zakat for x ,If you know the percentage of zakat = 2.5 %; 
*/

let x = 250 ;
let percentage = 2.5;
let zakat = (percentage/100) * x;
console.log(`Zakat value for ${x} is ${zakat}`);


console.log(`----------------------`);

//  let arrayOne = [ 1,7,9,45];
//  console.log(arrayOne);

 let arrayTwo = ["Str", "alex","moh"];
 console.log(arrayTwo);

 let arrayThree = ['the','fox' ,'over', "lazy", 'dog' ];
 console.log(arrayThree);


 console.log(`----------------------`);


//What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"];
console.log(fruits[1]);
console.log(fruits[0]);



console.log(`----------------------`);


//Create an array represents your:
let favoriteFood =["pasta" ,"pizza" ];
console.log(favoriteFood);

let favoriteSport =["Running" , "Football" , "swmming"];
console.log(favoriteSport);

let favoriteMovie =["TheGodfather" ,"SpaceOdyssey"];
console.log(favoriteMovie);


console.log(`----------------------`);


//Create a Variable to return the first element in an array 
//Ex: firstOfArray([1,4,5]) => 1
//Ex: firstOfArray(["t","u","g","x"]) => "t"

let listOne = [1,4,5];
console.log(listOne[0]);
console.log(listOne[listOne.length-1]);


let listTwo = ["t","u","g","x"];
console.log(listTwo[0]);
console.log(listTwo[listTwo.length-1]);



console.log(`----------------------`);


//Create a Variable to return the lastOfArray element in an array 
// Ex: lastOfArray([1,4,5]) => 5
// Ex: lastOfArray(["t","u","g","x"]) => "x"



/*
6-Using console make this array to be like this one (push, unshift, shift, pop)
var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/

let dyarray = [0,5,7,9];
dyarray.shift();
dyarray.shift();
dyarray.shift();
dyarray.unshift(1,3,4,6,8);
dyarray.push(10);

console.log(dyarray);


dyarray.pop();
dyarray.push(-7);
dyarray.push(3.5);
dyarray.shift();
dyarray.shift();
dyarray.shift();
dyarray.shift();
dyarray.shift();
dyarray.unshift(5);
console.log(dyarray);

console.log(`----------------------`);

/*
7-Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you
var array2 = [5,9,-7,3.5]
*/






/*
8.Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/

var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
console.log(arr1);
console.log(arr1.sort());
