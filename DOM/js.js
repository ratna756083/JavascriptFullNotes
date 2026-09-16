
//?create:
let h1=document.createElement('h1')

h1.setAttribute('id',"dom")
// h1.removeAttribute(h1)
h1.textContent='DOM'

// h1.remove(h1)

let div=document.createElement('div')
div.setAttribute('id','div')

let h3=document.createElement('h3')
h3.setAttribute('id','h3')
h3.textContent="i am h3 inside div"

let p=document.createElement('p')
p.classList.add("para")
p.textContent="i am p inside div"
// document.body.append(h1,div)



let span=document.createElement("span")
span.classList.add("span")
span.textContent="i am span inside div"
span.style.backgroundColor="blue"

div.append(h3,p,span)

let p1=document.createElement('p')
p1.classList.add("para")
p1.textContent="i am para1"
// document.body.append(h1,div,p1,p1.cloneNode(true),p1.cloneNode(true))

let p2=document.createElement('p')
p2.classList.add("para")
p2.textContent="i am para 2"

let p3=document.createElement('p')
p3.classList.add("para")
p3.textContent="i am p 3"

let p4=document.createElement('p')
p4.classList.add("para")
p4.textContent="i am p 4"

document.body.append(h1,div,p1,p2,p3,p4)

//50 heading tags

// for(let i=1;i<51;i++){
//     let h1=document.createElement('h1')
//     h1.textContent="Heading "+i
//     document.body.append(h1)
// }

// //100 button
// for(let i=1;i<=100;i++){
//     let btn=document.createElement('button')
//     btn.textContent='Button '+i
//     document.body.append(btn)
// }

// //200 para tags
// for(let i=1;i<=200;i++){
//     let p=document.createElement('p')
//     p.textContent='para '+i
//     document.body.append(p)
// }

setTimeout(()=>{
    
let img=document.createElement('img')
let src=img.setAttribute('src',"https://imgs.search.brave.com/3uCaQUr2vaD3FZ_g6iJ8eAKYtDf4bXvU_wUHGdNBuRI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/cG5nLXZlY3Rvci8y/MDI2MDgyMS9vdXJt/aWQvcG5ndHJlZS1j/b2xvcmZ1bC1oaW5k/dS1kZWl0eS1nYW5l/c2hhLXNpdHRpbmct/b24tYS1sb3R1cy13/aXRoLWZsb3dlcnMt/cG5nLWltYWdlXzIw/MDIwOTczLndlYnA")

let h11=document.createElement('h1')
h11.textContent="Advance Happy ganesh puja"

document.body.append(img,h11)

},3000)