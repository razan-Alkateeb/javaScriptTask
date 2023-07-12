
function calculatSum(...numbers) {
    let result = 0;

    for (let i = 0; i < numbers.length; i++) {

        if(numbers[i]%2===0){
            result += numbers[i];
        }
       
    }
    return ` Result = ${result}`;
  }
  
  console.log(calculatSum(2, 3, 4));

//--------------------------

let person={
    firstName:'Razan',
    lastName:'Alkateeb',
    fullName:function(){
        return this.firstName+this.lastName
    },
    birthday:{
        age:21,
        date:'21/12',

    }
}
person.age=21
console.log(person.age)







