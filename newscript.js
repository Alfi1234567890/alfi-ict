console.log('my first code');
// variables
a=5;   //without declaration
   //a --> variale & 5 --> value
   var a=5;
   console.log(a);
   let b=20;
const n=35;
   {
    const n=30;
    console.log(n)
    var a=10;                 //block 2
    console.log(a);
    let b=25;
    console.log(b);
   }
   console.log(typeof(b));
   var firstName='alfi';
   console.log(typeof(firstName));
   let bool=true;
   console.log(typeof(bool));
   var g;
   console.log(typeof(g));
   var g='';
   console.log(typeof(g));
console.log(b);

   //var a=15;
   //console.log(a)

  // var a=20
   //console.log(a)

   //var a=25;
   //console.log(a)

   //arrays
   var arr1=['apple','orange',1];
   console.log(arr1[1])
   var arr1=['apple','orange',1];
   console.log(arr1.length)
   var arr1=['apple','orange',1];
   arr1.push('mango')
   console.log(arr1)
   var arr1=['apple','orange',1];
   arr1.push('mango')
   arr1.pop()
   console.log(arr1)

   //objects
   //let person={
    //firstName:'ann',
    //age:50,
    //location:'tsr'
  // }
   //console.log(person.age)

   let person=new Object();
   person.fName='alfi';
   person.age=24;
   console.log(person)

   var arr2=[{
    firstName:'ann',
    age:50,
    location:'tsr'
   },
   {
    firstName:'anna',
    age:40,
    location:'tsr'
   }]
console.log(arr2[1].age)

//functions
function display(fname) {
   console.log(' welcome ' + fname + ' to funtions');
}
display('alfi');  //function call

//funtions to add 2 values 
function add_value(a,b) {
   var sum=a+b;
   console.log(sum);
}
add_value(10,5);

function add_value(a,b) {
   var sum=a+b;
   return sum;
}
var result=add_value(10,5);
console.log('the sum is ' + result);

function multiple_value(a,b) {
   var sum=a*b;
   return sum;
}
var result=multiple_value(10,5);
console.log('the sum is ' + result);


var ab=7;
var abc=ab++;   //post increment
console.log(ab);
console.log(abc);

var ab=7;
var abc=++ab;   //pre increment
console.log(ab);
console.log(abc);


var exp=(4*7)-8^2+9;
console.log(exp);

var exp=(4*7)-8**2+9;
console.log(exp);

//conditional statements
if (exp>0) {
   console.log('the value is greater than zero')
   }else{
      console.log('the value is less than zero')
   }

   if (exp>0) {
      console.log('the value is greater than zero')
      }else if (exp==0) {
         console.log('the value is equal to zero')
      }
      else{
         console.log('the value is less than zero')
      }

      if (exp>0) {
         console.log('the value is greater than zero')
         }else if (exp===0) {
            console.log('the value is equal to zero')
         }
         else{
            console.log('the value is less than zero')
         }

         var tt=56;
         var tm='56';
         if (tt>tm) {
            console.log('the value is greater ')
            }else if (tt==tm) {
               console.log('the value is equal ')
            }
            else{
               console.log('the value is less')
            }

            var tt=56;
         var tm='56';
         if (tt>tm) {
            console.log('the value is greater ')
            }else if (tt===tm) {         //===here check data type & data value
               console.log('the value is equal ')
            }
            else{
               console.log('the value is less')
            }

            var tt=56;
         var tm='56';
         if (tt>tm    ||   tt==tm) {
            console.log('the value is greater or equal')
            }
            else{
               console.log('the value is less')
            }

            var tt=56;
         var tm='56';
         if (tt>tm    ||   tt===tm) {
            console.log('the value is greater or equal')
            }
            else{
               console.log('the value is less')
            }
//ternary operator
            var result1=exp>0? 'value is greater than zero':'value is less than zero';
            console.log(result1);

//looping statements
//print numbers from 1 to 10
for (let i = 0; i < 10; i++) {
   console.log(i+1);
   
}
var array=[1,45,34,5,78];

for(let i=0;i<array.length;i++){
console.log(array[i]);
}

var obj= {fname:'alfi',age:40,place:'tvm'}
//for in loop
for (const i in obj) {
   console.log(obj[i]);
}

//for of loop
for (const i of array) {
   console.log(i);
}

//while loop
let i=1;
while (i<=10) {
   console.log(i); //(console.log(i+1);)
   i++;
}

//do while loop
let r=1;
do {
   console.log(r)
   r++;
} while (r<=10);