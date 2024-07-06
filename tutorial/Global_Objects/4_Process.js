//Process has set of properties
console.log(`Process Architecture: ${process.archi}`);
console.log(`Process PID: ${process.pid}`);
console.log(`Process Platform: ${process.platform}`);
console.log(`Process Version: ${process.version}`);
console.log(`Process Memory: ${process.memoryUsage}`);


process.argv.forEach((v,i)=>{
    console.log(`${i} : ${v}`);
});

//process argv list out all the open files 
//in sequrnce
//