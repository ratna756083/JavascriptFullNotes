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



const fetchData=async()=>{
  const data=  await fetch("https://fakestoreapi.com/products")
  return data.json()
}

const getData=async()=>{
    const product=await fetchData()
    console.log(product)
}
getData()