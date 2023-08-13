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