//create a table with 5 rows and 5 columns using javascript only

// let table=document.createElement('table')
// table.setAttribute('border','2')

// for(let i=1;i<=5;i++){
//     let tr=document.createElement('tr')
//     for(let i=1;i<=5;i++){
//         let td=document.createElement('td')
//         td.textContent=i
//         tr.append(td)
//     }
//     table.append(tr)

// }

// document.body.append(table)
//create a 8*8 chessboard using only js and append it to the page
// let div=document.createElement('div')
// for(let i=1;i<=8;i++){
//     let row=document.createElement('div')
//     for(let j=1;j<=8;j++){
//        let h1=document.createElement("h1")
//        h1.textContent='[]'
//     row.append(h1)

//     }
//     let br=document.createElement('br')
//     div.append(row,br)
    
// }

// document.body.append(div)




// let div = document.createElement('div');

// for (let i = 1; i <= 8; i++) {

//     let row = document.createElement('div');

//     for (let j = 1; j <= 8; j++) {

//         let h1 = document.createElement("span");

//         if ((i + j) % 2 == 0) {
//             h1.textContent = '⬜';
//         } else {
//             h1.textContent = '⬛';
//         }

//         row.append(h1);
//     }

//     div.append(row);
// }

// document.body.append(div);
// create a multiplication table 1-10



let div = document.createElement("div");

for (let i = 1; i <= 10; i++) {
    let row = document.createElement("div");
    for (let j = 1; j <= 10; j++) {
        let h1 = document.createElement("h1");
        h1.textContent = `${i} × ${j} = ${i * j}`;
        row.append(h1);
    }
    div.append(row);
}

document.body.append(div);