let i = 0;
let interval = global.setInterval(function () {
    console.log('hello');
    if (i === 3) {
        clearInterval(interval);
    }
    i++;
}, 1000);

console.log(process);
console.log(__filename);
console.log(__dirname);

global.myCustomVariable = 'Hello World'

console.log(myCustomVariable);