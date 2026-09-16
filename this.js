// console.log(this)

//?this:

//this keyword in js file or inside the function

// function demo(){
//     console.log(this)  //window
//     console.log(this.name)
// }
// demo()
// const fn=()=>{
//     console.log(this) //window
// }

//this keyword in inside object

let product={
  name:'asus',
  price:55000,
  color:'grey',
  processor:'ryzon 5',
  ram:'16gb',
  ssd:'512',
  screen:'Oled',
  demo:function(){
    // console.log(this) //it is pointing to current object
     console.log("demo")
  },
  arrow:()=>{
  //  console.log(this) //window because arrow function don't have this keyword
  },
  demo11:function(){
   let demo2= ()=>{
   console.log(this) //it can be acces the current obj when rapped in another fuction
    }
    demo2()
  }

}
// product.demo()
// product.demo1()



//changing the value of this keyword
function demo1(name,city){
    // console.log(this)
    console.log(name)
    console.log(city)
    console.log(this.name)
    console.log(this.price)
    console.log(this.demo())
//    console.log(this.demo)
    
}
// demo1()


// let student={
//     name:"pela",
//     class:"standred one",
//     age:"1month"
// }

//call()
// demo.call(student)
// demo1.call(student,'hello','blg')
demo1.call(product)


//?apply()

// demo1.apply(student,['hello','blg'])

//bind():return new bounded function
// let b1=demo1.bind(student,'bsr','bb')
// b1()
//?call vs apply vs bind
//call ,apply will executes immediatly but bind returns new function

//call accepts comma(,) separated arguments
//apply accepts argument in the form of array
//bind accepts partial arguments

//we can change the object every time whenever we use call ,apply but using bind the object is fixed



//?Date:

//reference date:jan 1 1970

// let today=new Date()

// console.log(today)
// console.log(today.toTimeString())
// console.log(today.toDateString())

// //?custom date:
// let costomDay=new Date("12-04-2024") //or ("12/04/2024")
// console.log(costomDay)
// console.log(costomDay.getFullYear())
// console.log(costomDay.getMonth())
// console.log(costomDay.getDay())
// console.log(costomDay.getHours())
// console.log(costomDay.getMinutes())
// console.log(costomDay.getMilliseconds())


// //set methods of date

// let setDate=new Date()
// setDate.setFullYear(2029) //here we can append hole time and date
// setDate.setMonth(4) //it starts from 0 index
// setDate.setDate(23)
// setDate.setHours(8)
// setDate.setMinutes(34)
// setDate.setSeconds(33)
// console.log(setDate)

const fn1=()=>arguments.length;
console.log(fn1(1,2,3))