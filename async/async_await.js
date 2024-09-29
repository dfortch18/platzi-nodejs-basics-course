async function hello(name) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(`Hello ${name}`);
            resolve(name);
        }, 2000);
    });
}

async function speak(name) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Bla bla bla bla');
            resolve(name);
        }, 1000);
    });
}

async function goodbye(name) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(`Good bye ${name}`);
            resolve();
        }, 4000);
    });
}

async function main() {
    let name = await hello('Daniel');
    await speak(name);
    await speak(name);
    await speak(name);
    await speak(name);
    await speak(name);
    await goodbye(name);
}

console.log('Start');

main();
