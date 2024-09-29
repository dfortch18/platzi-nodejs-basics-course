console.log('Hello World');

let i = 0;
setInterval(function () {
    console.log(i);

    if (i === 5) {
        console.log('Force error');
        var a = 3 + z;
    }
    i++;
}, 1000);

console.log('Another instruction');