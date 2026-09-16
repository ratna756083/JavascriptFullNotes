//? String:


// let name="Virat"
// let surname="kohli"
// console.log("your name is "+name+" "+surname)

// console.log(`your name is ${name} ${surname}`)
// console.log(`your name is ${name +" "+ surname}`)
// console.log(name.length)
// console.log()

// let name="Rat nak ar"
// let newString=name.toUpperCase()
// console.log(name)  //beasuse string is immutable
// console.log(newString)
// console.log(name.replaceAll(" ",""))

// const str="   hello      "
// console.log(str.trimStart())
// console.log(str.trimEnd())
// console.log(str.trim())

// let str1="ratugiri"
// console.log(str1.replace("r","p"))
// console.log(str1.replace("rat","pat"))
// console.log(str1.replace('i','p'))  //here one drawback of replace method it only replace the first char of string
//then replaceAll() is solved the problem
// console.log(str1.replaceAll('i','p'))

// const str2=" he l l o"
// console.log(str2.replaceAll(" ",""))

// let num=10
// console.log(typeof num.toString())
// console.log(null.toString()) //?error
// console.log(undefined.toString())  //?error

//? slice(startIndex,endIndex): endIdex is excluded
//let str5="javascript"

// console.log(str5.slice(2))
// console.log(str5.slice(0,4))
// console.log(str5.slice(4,10))
// console.log(str5.slice(4,3))  //it give empty string (sIndex< endIndex)
//console.log(str5.slice(-4,-10))



//?split("separator"):  it convert string into array by separator
//  //separator is not included in the array

// console.log(str5.split())
//console.log(str5.split(""))
//console.log(str5.split(" ")) //it don't find any separator so dipaly entair string


//?concat():
let fanme="Pawan"
let lname="kalyan"
// console.log(fanme.concat(" ",lname,"last nnn"))


// //?chatAt(index):
// console.log(fanme.charAt(0))

// //?indexOf():
// console.log(fanme.indexOf("P"))
// console.log(fanme.indexOf("l"))//in string p char is not there so it return -1

//?lastIndexOf():
console.log(fanme.lastIndexOf("a"))
console.log(fanme.lastIndexOf("P"))
console.log(fanme.lastIndexOf("a"))

//?startsWith():
console.log(fanme.startsWith("P"))
console.log(fanme.startsWith("j"))
console.log(fanme.startsWith("Pawan"))

//?endsWith():
console.log(fanme.endsWith("n"))

console.log(fanme.endsWith("wan"))

//?repeat():
console.log(fanme.repeat(3))
console.log(fanme.repeat(6))
//console.log(fanme.repeat(-3))  //it throw errow Invalid count value


//?includes()
console.log(fanme.includes("P",0))
console.log(fanme.includes("Pawan"))
console.log(fanme.includes("w",2))











