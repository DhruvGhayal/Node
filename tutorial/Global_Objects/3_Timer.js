//1 setImmediate
const baz = () => console.log('baz');
const foo = () => console.log('foo');
const zoo = () => console.log('zoo');

const start = () => {
  console.log('start');
  setImmediate(baz);
  new Promise((resolve, reject) => {
    resolve('bar');
  }).then(resolve => {
    console.log(resolve);
    process.nextTick(zoo);
  });
  process.nextTick(foo);
};

//start();

//2 setInterval
const countInterval =()=>console.log('Hey! 100ms completed');
let int = setInterval(countInterval,100);
int;

//3 setTimeout()
const countTimeout =()=>console.log('Hey! 1000ms completed');
setTimeout(countTimeout, 1000);

clearTimeout(int);
//clearInterval(int);
