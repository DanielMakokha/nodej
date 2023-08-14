
/*
const add=require('./calculator/add');
const div=require('./calculator/div');
const mul=require('./calculator/mul');
const sub=require('./calculator/sub');

// console.log(add(2,3));

const a=parseInt(process.argv[2]);
const choice=process.argv[3];
const b=parseInt(process.argv[4]);

// console.log(a,choice,b);
if (choice ==='ADD') {
    console.log(a,choice,b);
    console.log(add(a,b));
}else if (choice==='SUB') {
    console.log(a,choice,b);
    console.log(sub(a,b));
}else if(choice ==='DIV'){
    console.log(a,choice,b);
    console.log(div(a,b));
}else if(choice==='MUL'){
    console.log(a,choice,b);
    console.log(mul(a,b));
}else{
    console.log('Invalid operator,use ADD,SUB DIV OR MUL');
}
*/

// File system module
const fs=require('fs').promises;

// create a file
// fs.writeFile('./app.txt','Hi easy learning',(err)=>{
//     if(err) console.log(err);
//     else console.log('File succesfully created');
// })
// Reading a file

// fs.readFile('./app.txt','utf-8',(err,data)=>{
//     if(err)console.log(err);
//     else console.log(data);
// })

// Renaming a file
// fs.rename('./app.txt','./rename.txt',(err)=>{
//     if(err)console.log(err);
//     else console.log('File renamed succefully');
// })

// Deleting a file
// fs.unlink('./rename.txt',(err)=>{
//     if(err)console.log(err);
//     else console.log("File deleted succefully");
// })

// Exercise
// async function getSum() {
//     let data=await fs.readFile('./data.json','utf-8');
//     // console.log(data);
//     data=JSON.parse(data)
//     let sum=0;
//     for (let user of data) {
//         sum=sum+user.salary;        
//     }
//     console.log(sum);
// }
// getSum()

// HTTP MODULE
const http=require('http');
const { type } = require('os');
const server=http.createServer(async(req,res)=>{
    console.log("Server is now runing");
    
    const data=await fs.readFile('./new.html','utf-8')
    res.writeHead(200,{'content-type':'text/html'})
    res.end(data)
})
server.listen(3000)