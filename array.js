
// let arr2=["virat",10,null,undefined,()=>{},{},[],true*false]

// let arr=new Array(10)//if have a single value it treated as a length of array, length=10
// let arr3=new Array(10,20) //lenth =2
// console.log(arr)
// console.log(arr2)

//?update
// let arr=[10,20,30]
// arr[40]="jspider"

// console.log(arr)
// //?delete
// delete arr[1]
// console.log(arr)


//? !Array methods
// let nums=[10,20,30,100,40]
//?push() add the element of last of the index and   return type=length of orignal array
// let len=nums.push()
// console.log(nums)
// console.log(len)

//?pop()
// let elem=nums.pop(10) //delete last of the element and return type is which elememt delete
// console.log(nums)
// console.log(elem) //30

//?unshift()  //add the element in first index
// nums.unshift(10)
//?shift() //delete the element in first index
// nums.shift()

//?splice(startInd,deletElem,addElem)  return deleted element

// nums.splice(0,2)
// nums.splice(1,2,300,45,68) //it deleted two element from 1 elem then element add  new elem from 1 index
// nums.splice(0,0,100,200) //it add elem from first 
// console.log(nums)

//?sort()  //sort the array in ascending order

// let nums=['virat','dhoni','rohit','sachin']

// console.log(nums.sort())

// let nums1=[10,20,30,100,40]
// console.log(nums1.sort()) 
// console.log(nums1.sort((a,b)=>a-b)) //ascending order  a-b=+value then pos(b,a)  a-b=-value then pos(a,b) a-b=0 then pos(a,b) 
// console.log(nums1.sort((a,b)=>b-a)) //descending order

// // ??reverse()
// console.log(nums1.reverse())
// console.log(nums.sort().reverse()) //chaining


//?NoN -mutating methods

// console.log(nums1.toString()) //it don't accepts any separator
// //?join("separator")  //it join the array into string but it accepts  separator
// console.log(nums1.join("@")) 
// console.log(nums1.join(" "))

// let str="we are Indian"
// let arr=str.split(" ")
// console.log(arr.reverse().join(" ")) 

// console.log(str.split("").reverse().join(""))
// console.log(str.split("").reverse().join("").split(" ").join(" "))
// let newarr=[]
// for(let i=0;i<arr.length;i++){
//      newarr.push(arr[i].split("").reverse().join(""))
// }
// console.log(newarr.join(" "))

//?include()  //return type boolean
// console.log(nums1.includes(10))
// console.log(nums1.includes(1000))
//?indexOf()  //return type index of element
// console.log(nums1.indexOf(10))
// console.log(nums1.indexOf(1000)) //-1
//?lastIndexOf()  //return type index of element
// let nums2=[10,20,30,100,40,10]
// console.log(nums2.lastIndexOf(10))
// console.log(nums2.lastIndexOf(1000)) //-1

//?at
// console.log(nums1.at(0))
// console.log(nums1.at(-1))

//?concat()  //return type new array
// let arr1=[10,20,30]
// let arr2=[100,200,300]
// let arr3=arr1.concat(arr2)
// console.log(arr3)

//?slice(startInd,endInd)  //return type new array
//  let arr1=[10,20,30,100,40]
//  let arr2=arr1.slice(0,3)
//  console.log(arr1.slice(4,1)) //if startInd>endInd then return empty array
//  console.log(arr1.slice(-2,-1))
//  console.log(arr2)

//?flat()  //return type new array
// let arr1=[10,20,[30,100],40]
// let arr2=[10,20,[30,100,[40,50]]]
// console.log(arr1.flat())
//console.log(arr2.flat(2)) //it flat the array upto 2 level
//when we don't know the depth of array then we can use Infinity
//console.log(arr2.flat(Infinity)) //it flat the array upto Infinity level

//? ! Array Advanced methods

// let nums=[10,20,30,100,40]
//?forEach()  //it doesn't return anything
// nums.forEach((elem,index,arr)=>{
//     console.log(elem,index)
//     console.log(arr)
//    // return //undefind
   
// })

//?find()  //return type first matched element
//  let x= nums.find((elem)=>{
//     return elem%2 ===0
//   })
//   console.log(x)

//  let arr2=[0,10,20,30,100,40]
//  console.log(arr2.find(ele=>ele)) //it returns first truthy value when we don't know the condition then we can use this method


//?filter(): returns array of all matched elements
//  let arr2=[0,10,null,20,"",30,100,41]
//   console.log(arr2.filter((elem)=>{
//     return elem % 2==0
//   }))
//   console.log(arr2.filter(elem=>elem%2 != 0))

//   console.log(arr2.filter((e,index)=>{
//     return index
//   })) //it returns all truthy values so it returns all index except 0 index because 0 is falsy valuep


//   //Questions
//   let arr=[2,3,6,8,9,12,14,15]

//   //1.Get the numbers divisible by 3
// console.log(arr.filter((elem)=>elem%3==0))

// //2.Get the numbers between 10 and 30
// console.log(arr.filter((elem)=>{
//      return elem>=10 && elem<=40
// }))

// let arr2=[5,8,3,-2,7,-10]
// //?Find first negetive number
// console.log(arr2.find((elem)=>{
//   return elem <0
// }))


// // 4. Filter words with more than 5 characters
//  const words = ["apple", "banana", "cat", "elephant", "dog", "orange"];
//  console.log(words.filter((elem)=>{
//   return  elem.split("").length > 5
//  }))

// // 5. Find the first word starting with "a"
// console.log(words.find((elem)=>{
//   return elem.startsWith('a')
// }))
// const words1 = ["dog", "cat", "apple", "ant", "ball"];

// // 6. Filter words starting with "b"
// console.log(words1.find((elem)=>{
//   return elem.startsWith('b')
// }))
//  const words2 = ["apple", "banana", "ball", "cat", "bat", "dog"];

// // 7. Find the first word containing "e"
// console.log(words2.find((elem)=>{
//   return elem.includes('e')
// }))
// // const words = ["cat", "dog", "fish", "apple", "banana"];


// // 8. Find the first number that is greater than 10 AND divisible by 3
//  const arr5 = [4, 9, 11, 14, 18, 21, 25];
//  console.log(arr5.filter((elem)=>{
//   return elem>10 && elem%3==0
//  }))

// // 9. Find the first word that starts with "s" and has more than 4 characters
//  const words6 = ["sun", "star", "sky", "school", "sea", "street"];
//  console.log(words6.find((elem)=>{
//   return elem.startsWith('s') && elem.length >4
//  }))

 
// //10. Numbers between 20 and 50 AND odd
// let nums3=[15, 21, 24, 27, 32, 35, 42, 49, 55];

// console.log(nums3.filter((elem)=>{
//   return (elem>=20 && elem<=50 ) && (elem % 2 != 0)
// }))


//?map()
// let nums=[10,20,30,41,4]
// //condition is not working here if you use then it return boolean value or undefined
// console.log(nums.map((ele)=>ele**2))
// //?qube element if its even else square it
// console.log(nums.map((elem)=>{
//   if(elem%2 ==0){
//     return elem**3
//   }else{
//     return elem*elem
//   }
// }))

// //find the element greater then 3 and square it
// console.log(nums.filter(elem=>elem>3).map(elem=>elem**2))


// //?some()
// console.log(nums.some(ele=>ele%2 ==0))
// console.log(nums.some(ele=>ele%2 !=0))
// let nums2=[]
// console.log(nums2.some(ele=>ele>0))//false ->must have one element to satisfy

// //?every()
// console.log(nums.every(elem =>elem%2 == 0)) //if one is false then it return false
// console.log(nums2.every(elem=>elem>0)) //true

// let numbers=[10,20,30,40,50]
// //?reduce()
// console.log(numbers.reduce((acc,el)=>{
//   return acc*el
// },1))

// let number2=[10,2,3,4]
// //sum of the square of all elememnt
// console.log(number2.map(el=>el**2).reduce((acc,el)=>acc+el))
// //without using map
// console.log(number2.reduce((acc,el)=>{
//   return acc+el**2
// }))

// //product the squares of all element

// console.log(number2.reduce((acc,el)=>{
//   return acc*el**2
// },1))


// let num=[10,'a',20,'a',10,20]
// console.log(num.reduce((acc,el)=>{
//   acc[el]=(acc[el]|| 0)+1
//   return acc
// },{}))


//Questions
//   let num=[1,3,0,4,0,6,3,0,9,0]
// // 1.  Move all zeros to the end of the array using filter.
// console.log(num.filter((elem,ind)=>{  return elem != 0}).concat(num.filter((el)=>el==0)))

// let result=new Array()
// for(let i=0;i<num.length;i++){
//     if(num[i] != 0){
//       result.push(num[i])
//     }
// }
// for(let i=0;i<num.length;i++){
//   if(num[i]===0){
//     result.push(0)
//   }
// }
// console.log(result)
//   let num2=[2,4,5,6,0,9,1,3]
// // 2.  If the element is even, cube it; otherwise, square it using map.
// console.log(num2.map((elem)=>{
//   if(elem % 2 ==0) return elem**3
//   else {
//     return elem**2
//   }
// }))

// let str=['apple', 'banana', 'mango', 'watermelon', 'papaya', 'orange']

// // 3.  Reverse each string using map.
// console.log(str.map((elem)=>{
//   return elem.split("").reverse().join("")
// }))

// let str2=["Rohit","Rahul","Vishal","Suraj","Sanket"]

// // 4.  Return the length of each string using map.
//    console.log(str2.map((elem)=>{
//     return elem.split("").length
//    }))
// let str3=['apple', 'banana', 'mango', 'watermelon', 'papaya', 'orange']
// // 5.  Return only the strings ending with a vowel using filter.

// console.log(str3.filter((elem)=>{
//   return elem.endsWith('a')
// }))
// let number= [1,3,0,4,0,6,3,0,9,0]
// // 6. Remove duplicate elements using filter.
// console.log(number.filter((elem,index)=>{
//     return number.indexOf(elem) == index
// }))
// let str4=['apple', 'banana', 'mango', 'watermelon', 'papaya', 'orange']
// // 7.  Convert the first character of every string to uppercase using map.
// console.log(str4.map((elem)=>{
//   return elem.charAt(0).toUpperCase() + elem.slice(1)
// }))

// let str5=["Rohit","Rahul","Vishal","Suraj","Sanket","Sonu","Monu","Golu"]

// // 8.  Return only the strings whose length is greater than 5 using filter.
// console.log(str5.filter((elem)=>{
//   elem.length >5
// }))

// let str6=['apple', 'banana', 'mango', 'watermelon', 'papaya', 'orange']

// // 9.  Replace every vowel in each string with '@' using map.
// console.log(str6.map((elem)=>{
    
// }))


// // 10. ["Rohit","Rahul","Vishal","Suraj","Sanket","Sonu","Monu","Golu","sky","fly"] Return only the strings that contain at least one vowel using filter.



 //?Object:collection of key value pair

 //!by using literals
//  let obj={
//   name:"Rahul",
//   age:34,
//   adress:{
//     at:"aladiha",
//     pincode:756083
//   },
//   skils:['css','html'],
//   isMarried:false
//  }

//  console.log(obj.name)
//  console.log(obj["age"])
//  console.log(obj.adress.pincode)

//  //?update
//  console.log(obj.name="pela")
//  console.log(obj.adress.pincode=3764736)
//  console.log(obj)


//  //?delete
//  delete obj.age
//  console.log(obj)


 //?By using new keyword

//  let obj1=new Object()
//  obj1.name="haula"
//  obj1.age=23
//  console.log(obj1)

//  //? Byusing function constructor

//  function student(name,sid,course){
//     this.name=name
//     this.sid=sid
//     this.course=course
//  }
//  let s1=new student("hari",303,'Btech')
//  let s2=new student("virat",233,'ITI')
//  console.log(s1)
//  console.log(s2)

//  //By using class

//  class student1{
//   constructor(name,sid,course){
//      this.name=name
//     this.sid=sid
//     this.course=course
//   }
//  }

//  let s3=new student1("ratna",900,'Btech')
//  console.log(s3)



//?Object methods
let product={
  name:'asus',
  price:55000,
  color:'grey',
  processor:'ryzon 5',
  ram:'16gb',
  ssd:'512',
  screen:'Oled'
}

//Object.keys()

console.log(Object.keys(product))

//Object.values()
console.log(Object.values(product))

//Object.seal()//it can't add properties and delete
Object.seal(product)
product.memory=344   ////nothing will happened
delete product.name  //nothing will happened

product.name="mac" //we can update
console.log(product)


//?Object.freeze() //nothing will change
Object.freeze(product)
product.name='asus'
console.log(product) 


//?Object.isSealed()  Object.isFrozen() //return boolean value
console.log(Object.isSealed(product))
console.log(Object.isFrozen(product))

//?Object.assign()
let obj1={
  name:"kalu"
}
let obj2={
  location:"haula"
}
console.log(Object.assign({},obj1,obj2))