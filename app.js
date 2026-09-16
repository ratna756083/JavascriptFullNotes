// let i=1;
// while(i<2){
//     i++
//     console.log(i)
// }

// let day=1
// switch(day){
//     case 1:console.log("Monday")
//     break;
//     case 2:console.log("Tuesday")
//     break;
//     case 3:console.log("Wednesday")
//     break;
//     case 4:console.log("Thursday")
//     break;
//     case 5:console.log("Friday")
//     break;
//     case 1:console.log("Saturday")
//     break;
//     case 1:console.log("Sleeping day")
//     break;
//     default:console.log("Invalid input")

// }

// for(let i=1;i<10;++i){
//     console.log(i)
// }
// console.time("forLoop")
//  let i=1
//  while( i<10){
//      i++
    // console.log(i)
// }
//console.timeEnd("forLoop")
// let i=2
// console.log(i++)
// console.log(++i)
// console.log(i)

// let j = 1;

// do {
//   console.log(j);
//   j++;
// } while (j <= 5);

//? functions:
//demo() //! Only in normal functions hoisting is posible
// function demo(){
//     console.log("demo executed")
// }
// demo()

//parameterized function
//parameters:variable which are passed during function declearation
//arguments:values which are passing during function invocation

// function add(a,b){
//     console.log(a+b)
// }
// add(4,5)

//default
// function sub(a,b){
//     console.log(a-b)
// }
// sub(15) //NaN
// function sub(a,b=10){
//     console.log(a-b)
// }
// sub(15,undefined)

// function sub(a,b=10){
//     console.log(a-b)
// }
// sub(15,null)  //null is trated as 0


// function sub(a,b){
//     return a-b;
// }
// console.log(sub(3,2))
//      /or
// let store=sub(3,2)
// console.log(store)

// function add(a,b){
//     // return 
// }
// let val=add(1,2)
// console.log(val)  //every function default return value is undefined

// ? Anonymous function
//  let ano= function (){
//    console.log("anonymous")
//   }

//   ano()


// ? Arrow function
//!Limitation
//1.no "this" keyword in arrow function
//2.can not be used as constructor 
//no arguments object in arrow function

//?IIFE function
//*Immediate Invoked function expression
//;(c
//function
//)()

// ;(()=>{
//     console.log("i am from IIFE function")
// })()


// ;(function add(a,b){
//     console.log(a+b)
// })(1,2)

// ;(function(){
//     console.log("anonymous function ")
// })()


//?Higher Order function

//functions which accepts another functions as argument
//ex-1:
// function student(){
//     console.log("we are students")
// }
// function jsp(a){ //where a is act as a function
//   a()
//   console.log("students come to jspider")
// }
// jsp(student)

// //Ex-2
// function jspider(jp){
//     console.log("jspider")
//     jp()
// }
// jspider(()=>{
//     console.log("students from invoke")
// })
//  //function which returns another function
// function bb(){
//     console.log("pela")
//     return ()=>{
//         console.log("i am from return")
//     }
// }
// bb()()  //another way to store to function inside a variable then console the valiable


// ? callback function

//The function passed as agrument to another function that is called callback function

//Nested function
// function outer(){
//     console.log("outer function")
//      function inner(){
//         console.log("inner function")
//     }
//     inner()
// }

// outer()



//Global execution Context

// console.log(a)
// var a=20
// let b
// const c=30
// console.log(b)
// console.log(c)

// function demo(){
//     console.log("demo executed")
// }
// demo()

// function demo(a,b){
//     let x=100
//     var y=200
//     console.log("demo executed")
// }
// demo(10,20)

// function outer(){
//     let a=10
//     console.log("oter function")
//     function inner(){
//         let b=20
//         console.log("inner function")
//         console.log(a+b)
//     }
//     return inner
// }
// let inner=outer()
// inner()

//?closure:    Closure = inner function + access to outer function's lexical environment. ✅
// function jsp(name){
//     function test(){
//         console.log(name)
//     }
//     test()
// }
// jsp("jspider")

//?create a counter example using closure
// function counter(){
//     let count=0
//     function increCount(){
//         count++
//         console.log(count)
//     }
//     return increCount
// }

// let increCount=counter()
// increCount()
// increCount()
// increCount()

// increCount()



//isNaN(x) x convert into NaN then if it Nan it returns true nor false
console.log(Number.isNaN(Infinity) )
console.log(isNaN(undefined) )

console.log(isNaN("hbdn") )
console.log(isNaN(Infinity))
console.log(typeof Infinity)

console.log(isNaN(NaN))
console.log(typeof 0/0)

//Number.isNaN(x) where x should be NaN value then it return true nor false
isNaN(x) //x convert into NaN then if it Nan it returns true nor false