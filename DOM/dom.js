//?DOM:
// 1.document.getElementById()

// let h1=document.getElementById("dom")
// let div=document.getElementById("div")

// //?reading content from the DOM

// // h1.innerHTML-->It returns all the content inside  with tags
// console.log(h1.innerHTML)
// console.log(div.innerHTML)

// // h1.innerText-->It returns all the content inside  without tags
// console.log(h1.innerText)
// console.log(div.innerText)

// // h1.textContent-->It returns all the content with hidden content inside  without tags
// console.log(h1.textContent)
// console.log(div.textContent)

//2.document.getElementsByClassName()
//:return HTMLCollection which looks similar to array but not original array so we can access elemments only by using idex values
// let h1=document.getElementsByClassName("h1")
// console.log(h1)
// console.log(h1[0].textContent)
// console.log(h1[1].textContent)


// //3.document.getElementsByTagName()
// //:returns HTMLCollection which looks like similar to array but not original array so we can access elements only by using index values
// let allHeadTags=document.getElementsByTagName("h1")
// console.log(allHeadTags)
// console.log(allHeadTags[0].textContent)
// console.log(allHeadTags[1].textContent)

// //4.document.querySelector("css selector")-->It returns first matching element
// let h1Id=document.querySelector("#h1")

// console.log(h1Id.textContent)
// let h1Class=document.querySelector(".h1")
// console.log(h1Class.textContent)
// let h1Tag=document.querySelector("h1")
// console.log(h1Tag.textContent)

// //5.document.querySelectorAll("css selector")
// //:returns NodeList which looks similar to array but not original array so we can access elements only by using index values and forEach()

// let selectAll=document.querySelectorAll(".h1")
// selectAll.forEach((element)=>{
//     console.log(element.textContent)
// })
// console.log(selectAll[0].textContent)
// console.log(selectAll[1].textContent)
// console.log(selectAll[2].textContent)


// //Modification
// let h1T=document.querySelector('h1')

// h1T.textContent="Documnet Object Model"

// let h3=document.querySelector('h3')

// h3.innerText="h3 modified"

// h3.innerHTML='<h1>Hello</h1>'

// let h1class=document.querySelectorAll('.h1')
// h1class.forEach((e)=>{
//     e.textContent="pela"
// })


// //? Css stylings:

// let head=document.querySelector("h1")

// head.style.backgroundColor="blue"

// head.style.color="white"



 //?atributes:

 let h1=document.querySelector('h1')

 h1.setAttribute("id","h1")

 h1.setAttribute("id","h1override") //it override the attributes

 let p1=document.querySelector("p")

 p1.setAttribute("class","para")
 p1.setAttribute("class","paraoverride") //it is override also but it is not want this so we have one another method

 p1.classList.add("hello")  //its working


 //?create
 


 













