//?destraturing
//extracting or unpacking values from array or object

//?array?

// let arr=[10,20,30,40]
// // let a=arr[0]
// // let b=arr[1]

// let [a,b,,d,e]=arr  //to skip paticular element

// console.log(a)
// console.log(b)
// console.log(c)


//nested array
let arr2=[10,[20,30,[40]]]

let [a,[b,c,[d]]]=arr2
console.log(d)

??Object

let person={
    name:"hello",
    age:22,
    salary:30000,
    adress:{
        state:"odisha",
        city:"bbsr"
    }
}

let {name,salary}=person
console.log(name)
console.log(salary)

let {city,state}=person.adress
// let {adress:{city,state}}=person

console.log(city)
