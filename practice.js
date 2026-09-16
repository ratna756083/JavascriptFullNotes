console.log(!!0)
function test() {
    console.log(arguments);
}
test(10, 20);

console.log(typeof true)
console.log("2"+2-2)
console.log(typeof 10n)
function abc(){
    console.log(arguments.length)
}
abc(1,2,3)

console.log(typeof typeof 10)
console.log(10/"2")

const fn=()=>{
    console.log(arguments.length)
}
console.log(fn(1,2,3))
console.log(Boolean(1))
console.log(5+undefined)
let num=4


console.log([1]+[1])
console.log([1,2]+[2,4])
console.log([1]+[])

function demo(){
    // console.log("object")
    return;
    5
}
console.log(demo())

const fn1=()=>arguments.length;
console.log(fn1(1,2,3))