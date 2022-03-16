// Q1 -------------------------------------------------------------------
// function myFunction(num1, num2) {
//   return num1 + num2;
// }

// const result = myFunction(5, 5);
// console.log(result);

// code calls myFunction which passes in 2 number arguments.
// function then returns the value of the 2 arguments added together
// expected output = 10 (correct)

// Q2 -------------------------------------------------------------------
// function myFunction2(num1, num2) {
//   num1 + num2;
// }

// const result2 = myFunction2(5, 5);
// console.log(result2);

// code calls myFunction which passes in 2 number arguments.
// the 2 arguments are then added together but nothing is returned
// expected output = undefined (correct)

// Q3 -------------------------------------------------------------------
// function myFunction3(num) {
//   return num - 1;
// }

// let num = 10;
// num = myFunction3(num);
// console.log(num);
// num = myFunction3(num);
// console.log(num);

// code calls myFunction which passes in 1 number argument.
// function returns the value of the input number - 1
// num declared to equal 10
// num is redclared to the value of the function which takes in num (10) as argument
// num now equal 9
// num redclared again but takes in 9 this time so 8 will be returned
// expected output = 9 8 (correct)

// Q4 -------------------------------------------------------------------
// function myFunction4(num) {
//   return num - 1;
// }

// let num = 10;
// let add = 3;
// add = myFunction4(add);
// console.log(add);
// add = myFunction4(add);
// console.log(add);

// function same as above
// num declared as 10 but not used
// add declared as 3
// add redclared to equal function passing in add (3)
// 2 returned
// add redclared same as above thi time taking in 2 and returning 1
// expected output 2 1 (correct)

// Q5 -------------------------------------------------------------------
// function myFunction(num, num1) {
//   console.log(num1);
// }

// let num = 10;
// let num1 = 2;

// myFunction(num);

// function taking in 2 arguments
// num1 is logged to console
// num declared as 10
// num1 declared as 2
// function called using num variable (=2)
// num is not used within funtion so
// expected output = undefined (correct)

// Q6 -------------------------------------------------------------------
// function myFunction(num, num1) {
//   console.log(num1);
// }

// let num = 10;
// let num1 = 2;

// myFunction(num1, num);

// function logic same as above
// num and num1 declarations same as above
// function called with num1 as first argument num as second argument
// since num passed in second num1 in function equals num which equals 10
// therfore expected output = 10 (correct)

// Q7 -------------------------------------------------------------------
// let counter = 1;

// function myFunction() {
//   counter++;
//   return counter;
// }

// myFunction();
// const num = myFunction();
// console.log(num);

// counter initilised to 1, globally scoped
// funtion adds 1 to counter each time its called
// function called, counter now = 2
// num variable declared as the value of the funtion called again
//  expected oputput = 3 (correct)

// Q8 -------------------------------------------------------------------
// function myFunction(num1, num2) {
//   return num1 + num2;
// }

// const num1 = 10;
// const num2 = 1;
// const num3 = 4;

// const result = myFunction(num3, num1);
// console.log(result);

// function returns num1 + num2 which are passed in as arguments
// num1 2 and 3 initilised to respective values
// funtion expression named result declared taking in 4 and 10
// EO = 14 (correct)

// Q9 -------------------------------------------------------------------
// function myFunction(num1, num2) {
//   console.log(num3);
// }

// const num1 = 10;
// const num2 = 1;
// const num3 = 20;

// myFunction(num3, num1);

// funtion logs num3
// num3 globally scoped so funtion is able to access num3
// paramaters and arguments are redundant in this scenario
// EO = 20 (correct)

// Q10 -------------------------------------------------------------------
// function myFunction(num1, num2, num3) {
//   console.log(num3);
// }

// const num1 = 10;
// const num2 = 1;
// const num3 = 20;

// myFunction(num3, num1, 100);

// funtion takes in 3 args
// logs num3 last arg
// num1 2 and 3 declared
// funtion called with the args
// last arg = 100
// not sure weather it will equal 100 or 20

// Output = 100 because function looks for num 3 first - if it couldnt fin d it, then it would search outer scope

// Q11 -------------------------------------------------------------------
// function myFunction(num1, num2, num3) {
//   return num1 + num2 + num3;
// }

// const num1 = 10;
// const num2 = 1;
// const num3 = 20;

// const result = myFunction(1, 1, 1);
// console.log(result);

// function takes in 3 args and adds them together
// num 1 2 and 3 declared
// function expression declared with 1 as the 3 parameters
// EO = 3 (correct)

// Q12 -------------------------------------------------------------------
// function getSomeValue() {
//   return 2;
// }

// function myFunction(num1) {
//   const num2 = getSomeValue();
//   return num1 * num2;
// }

// const result = myFunction(5);
// console.log(result);

// getsomevalue function declared that returns 2
// my function declared which takes in 1 arg
// num2 var declared as getsomevalue (2)
// returns num1 in this case 5 and * 2
// EO = 10 (correct)

// Q13 -------------------------------------------------------------------

// function getSomeValue() {
//   return 2;
// }

// function myFunction(num1) {
//   const num2 = getSomeValue();
//   return num1 * getSomeValue();
// }

// const result = myFunction(5);
// console.log(result);

// funtion same as above except my function returns its argument * getsomevalue (2)
// num2 redundant in its function
// num1 (5) * getsomevalue (2) = 10
// EO = 10 (correct)

// Q14 -------------------------------------------------------------------
// function getSomeValue() {
//   return 2;
// }

// function myFunction(num1) {
//   return getSomeValue() * getSomeValue();
// }

// const result = myFunction(5);
// console.log(result);

// num1 redundant
// 2 * 2 = 4
//  EO = 4

// Q15 -------------------------------------------------------------------
// function myFunction(num1) {
//   if (true) {
//     return -10;
//   }

//   return num1 * 10;
// }

// const result = myFunction(5);
// console.log(result);

// my function called with 5 as arg
// myfunction doesnt utilise arg
// returns - 10
// other return statement redundant
// EO -10 (correct)

// Q16 -------------------------------------------------------------------
// function myFunction(num1) {
//   if (false) {
//     return -100;
//   }

//   return num1 * 10;
// }

// const result = myFunction(5);
// console.log(result);

// EO = 50
// if statement not triggered
// arg taken in (5) is * by 10 and returned (50)

// Q17 -------------------------------------------------------------------
// function myFunction(num1) {
//   return -100;

//   return num1 * 10;
// }

// const result = myFunction(5);
// console.log(result);

// EO = -100
// function returns - 100 as soon as its called and doesnt utilise arg passed into it

// Q18 -------------------------------------------------------------------
// function myFunction(num1) {
//   return num1 * 10;

//   return -100;
// }

// const result = myFunction(5);
// console.log(result);

// EO = 50
// function returns arg passed into it (5) * 10 (=50)
// second return statement redundant

// Q19 -------------------------------------------------------------------
// function myFunction(num1, num2, num3) {
//   return num2;
// }

// const result = myFunction(5, 10, 15);
// console.log(result);

// EO 10
// 2nd arg (10) passed in is returned

// Q20 -------------------------------------------------------------------
// function myFunction(num1, num2, num3) {
//   return num1 + num3;
// }

// const num1 = 20;
// const num2 = 200;
// const num3 = 1000;

// const result = myFunction(5, 10, num3, 15);
// console.log(result);

// EO = 1005
// function returns 1st arg (5) and 3rd arg (1000) added together

// Q21 -------------------------------------------------------------------
// function myFunction(num1, num2) {
//   const result = num1 + num2;
//   return result;
// }

// const result = myFunction(10, 20);
// console.log(result);
// myFunction(100, 2);

// EO = 30
// function adds together both args it takes in (10 and 20)
// result = 20
// function called again but it wont change result value thats scoped globally
// reult returned inside function will equal 102

// Q22 -------------------------------------------------------------------
// function myFunction(num1, num2) {
//   let result = num1 + num2;
//   return result;
// }

// let result = 0;
// myFunction(100, 2);
// console.log(result);

// EO = 0
// when function is called the result variable scoped to the function will return 102
// but the globally scoped result varibale will remain as 0

// Q23 -------------------------------------------------------------------
// function myFunction(num1, num2) {
//   result = num1 + num2;
// }

// let result = 0;
// myFunction(100, 2);
// console.log(result);

// EO 102
// result is globally scoped
// function takes result value and adds together passed in args

// Q24 -------------------------------------------------------------------
// function myFunction(num1, num2) {
//   const result = num1 + num2;
//   return 100;
// }

// const result = myFunction(5, 2);
// console.log(result);

// EO = 100
// func returns 100 when called
// args are redundant here

// Q25 -------------------------------------------------------------------
function myFunction(a) {
  let b = 20;

  console.log("a:", a);
  console.log("b:", b);
  console.log("c:", c);
}

let a = 1;
let b = 2;
let c = 3;

myFunction(100);

// EO
// a: 100
// b: 20
// c: 3
// func gets a from arg
// gets b from b variable coped inside function
// c from global scope since its not defined in function or parameter
