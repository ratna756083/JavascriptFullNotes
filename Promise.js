//Promise:it is a placeholder for feature task
//es6 version
//asynchronus javascript

// let prom=new Promise((resolve,rejected)=>{
//     let a=10;
//     if(a==10){
//         resolve("Promise fullfiled")
//     }else{
//         rejected("promise rejected")
//     }
// })

// prom.then(msg=>console.log(msg))
// .catch(msg=>console.log(msg))


// new Promise((resolve,rej)=>{
//     setTimeout(()=>{
//         resolve("fullfiled")
//     },2000)
// }).then(msg=>console.log(msg))
// .catch(err=>console.log(err))


//Promise Methods
//1.Promise.all() :returns array of promises if all are resolved otherwise returns the rejected promise
//Simple meaning it is looking for one reject promise

// let p1=Promise.resolve("resolved")
// let p2=Promise.resolve("resolved")
// let p3=Promise.resolve("reject")

// Promise.all([p1,p2,p3])
// .then(msg=>console.log(msg))
// .catch(msg=>console.log(msg))

//2.Promise.any():it is looking for one resolved promise

// Promise.any([p1,p2,p3])
// .then(msg=>console.log(msg))
// .catch(msg=>console.log(msg))


//Promise.allSettled()  //it show the status of promises
// Promise.allSettled([p1,p2,p3])

// .then(msg=>console.log(msg))
// .catch(msg=>console.log(msg))



//Promise.race():it return who first complte the task that will be return either promise resolve or reject that is don't matter

// let car=new Promise(res=>{
//     setTimeout(()=>{
//         res("car finished race")
//     },2000)
// })


// let bike=new Promise(res=>{
//     setTimeout(()=>{
//         res("bike finished race")
//     },1000)
// })


// let horse=new Promise(res=>{
//     setTimeout(()=>{
//         res("car finished race")
//     },3000)
// })

// Promise.race([car,bike,horse])
// .then(msg=>console.log(msg))
// .catch(msg=>console.log(msg))

//?fetch("url"):return a promise

// let data=fetch("https://fakestoreapi.com/products")
// console.log(data)
// data.then(alldata=>{
//    return alldata.json()
// }).then(finalData=>{
//     console.log(finalData)
//     finalData.forEach(element => {
//     //    console.log( element.title)
        
//     });
// })








//?Promise Chaining :usages of multiple then() blocks

//to Overcome

//Use-->async await
//keywords
//ES-6 version 
//perform asynchronous operations


const fetchData=async()=>{
  try {
    const data=  await fetch("https://fakestoreapi.com/products")
  const product=await data.json()
  product.forEach(elem=>{
    let img=document.createElement('img')
    img.src=elem.image
    let title=document.createElement('h3')
    title.textContent=elem.title.slice(0,26)

    let price=document.createElement('h2')
    price.textContent=elem.price

    let desc=document.createElement('p')
    desc.textContent=elem.description

    div.append(img,title,price,desc)
   })
    
  } catch (error) {
    console.log(error)
    
  }
}

fetchData()

const div=document.createElement('div')



document.body.append(div)


