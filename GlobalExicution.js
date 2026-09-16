//Global exicution Context
var myname=document.getElementById("my-name")
var btn=document.getElementById("btn")

 function makesize(size){
    return function createSize(){
        myname.style.fontSize=`${size}px`
    }
 }
 let size20=makesize(20)

 let size30=makesize(30)
 let size40=makesize(40)

btn.addEventListener("click",size40)


// function makeSize(size=20){
//     return  myname.style.fontSize=`${size}px`
// }

// btn.addEventListener("click",makeSize)