/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/

// let number1 = 5;
// let number2 = 7;
// if (number1 > number2){
//     console.log(`the larger number is ${number1}`);
// }else if (number1 < number2){
//     console.log(`the larger number is ${number1}`);
// }else{
//     console.log(`the numbers is equals`);
// }


 /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/

// let x = 3,y=-7,z=2;

// let r = x*y*z;
// if(r<0){
//     alert("The sign is -");
// }else{
//     alert("The sign is -");
// }



 /******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
  
// let a=0, b=-1 , c=4;

// if(a < b && b < c) {
//     window.alert(a + "," + b +"," +","+c);
//   } else if (a < b && c < b) {
//     window.alert(a+","+ c+","+ b);
//   } else if (b < a && a < c) {
//     window.alert(b+","+ a+","+ c);
//   } else if(b < a && c < a) {
//     window.alert(b+","+ c+"," +a); 
//   } else if(c < a && a < b) {
//     window.alert(c+","+ a+","+ b);
//   } else {
//     window.alert(c+","+ b +","+ a);
//   }



 /******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/ 

// a=-5, b=-2, c=-6, d= 0, f=-1;

// if (a>b && a>c && a>d && a>f)
// {
//     console.log(`the larger number is ${a}`);
// }
// else if (b>a && b>c && b>d && b>f)
// {
//     console.log(`the larger number is ${b}`);
// }
// else if (c>a && c>b && c>d && c>f)
// {
//     console.log(`the larger number is ${c}`);
// }
// else if (d>a && d>c && d>b && d>f)
// {
//     console.log(`the larger number is ${d}`);
// }
// else
// {
//     console.log(`the larger number is ${f}`);
// }

 /******* End Your Code ********* */

 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
  
// let x =1, y= 2;
// if(x>y){
//     console.log("Hello World");
// }else{
//     alert("Goodbye");
// }

//******************************************** 

/* 1. Write a JavaScript program that returns rate as text
less than 50 return ==> Fail
equal or between 50 and 59 ===> E
equal or between 60 and 69 ===> D
equal or between 70 and 79 ===> C
equal or between 80 and 89 ===> B
*/
 
// let avg = 55;

// if (avg < 50){
//     console.log("Grade : Fail");      
//     }
//     else if (avg < 60){
//         console.log("Grade : E");      
//     } 
//   else if (avg < 70) {
//           console.log("Grade : D"); 
//             } 
//   else if (avg < 80) 
//        {
//           console.log("Grade : C"); 
//   } else if (avg < 90) {
//           console.log("Grade : B"); 
//   } 

 /******* End Your Code ********* */


// 1. Write a JS code to print numbers from 1 to 10

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//    }

/*2. Write a JS code to print Even numbers in arr :
   var arr = [13,23,12,45,22,48,66,100]
*/


let arr = [13,23,12,45,22,48,66,100];
let evenarr = [];
for(let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0)
        evenarr.push(arr[i]);
}

console.log(`Even numbers in an array are: ${evenarr}`);


/* 
3. Write a JS code to print a pattern using for loop

   1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8 

*/


// let p = "";

// for (let i = 1; i <= 8; i++) {
  
//    for (let num = 1; num <= i; num++) {
//       p += num;
//    }
//    p += "\n";
// }
// console.log(p);


 /* 
 Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
let x = "don’t know why"

*/

// let x = "don’t know why";

//     if(x.includes("y")){
//         console.log("yes");
//     }else{
//         console.log("no"); 
//     }




