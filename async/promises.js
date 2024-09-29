function hello(name) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(`Hello ${name}`);
            resolve(name);
        }, 2000);
    });
}

function speak(name) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Bla bla bla bla');
            resolve(name);
        }, 1000);
    });
}

function goodbye(name) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(`Good bye ${name}`);
            resolve();
        }, 4000);
    });
}

console.log('Start');

hello('Daniel')
    .then(speak)
    .then(speak)
    .then(speak)
    .then(speak)
    .then(speak)
    .then(goodbye)
    .then((name) => {
        console.log('Process ended');
    })
    .catch(error => {
        console.log('An error has ocurred');
        console.log(error);
    });
