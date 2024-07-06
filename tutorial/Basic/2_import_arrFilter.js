const print = require('./1_print_export');

console.log(print.x);
console.log(print.z());

const arr = [2,4,6,4,9,8,26,4,8]

console.log(arr.filter((i)=>{return i}));

console.log(arr.filter((i)=>{return i === 2}));


console.log(arr.filter((i)=>{return i > 2}));