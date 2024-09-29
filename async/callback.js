function hello(name, callback) {
    setTimeout(function () {
        console.log(`Hello ${name}`);
        callback();
    }, 2000);
}

function goodbye(name, callback) {
    setTimeout(function () {
        console.log(`Good bye ${name}`);
        callback();
    }, 4000);
}

console.log('Start');

hello('Daniel', function () {
    goodbye('Daniel', function () {
        console.log('End process');
    });
});

// hello('Daniel', function () {});
// goodbye('Daniel', function () {});
