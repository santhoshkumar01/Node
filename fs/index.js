// const fs = require('fs')

// const text = fs.readFileSync('./txt/input.txt', 'utf-8')

// console.log(text);

// const textOutput = `this is what we know about avacado ${text}`

// fs.writeFileSync('./txt/outputFile.txt', textOutput)
// console.log('File Written!');


// Non-blocking, asynchronous way
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//   if (err) return console.log('ERROR! 💥');

//   fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//     console.log(data2);
//     fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
//       console.log(data3);

//       fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//         console.log('Your file has been written 😁');
//       })
//     });
//   });  
// });
// console.log('Will read file!');