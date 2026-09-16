//?Browser Object model
// console.log(window) //global object or parent object provided by browser

//?dialog methods:

//1.promt():

// let a=Number(prompt("Enter a"))
// let b=Number(prompt("Enter b"))


// console.log(typeof a)
// console.log(typeof b)
// console.log(a+b)

// //?alert()

// console.log(alert("pela katidemi"))

// //3? confirm()
// let res=confirm("Are you sure") //returns boolean
// console.log(res)

// //?Asynchronus Exicution

// //?1.setTimeout(callback,delay/timeout)


// let timeId=setTimeout(()=>{
//     console.log("exicute after 2 sec")
// },2000)


// clearTimeout(timeId)

// //? setInterval(callback,interval)

// let intervalId=setInterval(()=>{
//     console.log("execute after 2 sec continue")
// },2000)














// for(let a=1;a<5;a++){
//     setTimeout(()=>{
// console.log(a)
// },3000)
// }
// for(var a=1;a<5;a++){
//     setTimeout(()=>{
// console.log(a)
// },3000)
// }


for(var c=1;c<5;c++){
    // console.log(c)
    setTimeout(()=>{
        console.log(c)
    })
}