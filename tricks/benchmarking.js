console.time("all");

console.time("suma");
let suma = 0;

for (let i = 0; i < 1_000_000; i++) {
    suma += i;
}
console.timeEnd("suma");

console.time("suma2");
let suma2 = 0;

for (let i = 0; i < 1_000_000_000; i++) {
    suma2 += i;
}
console.timeEnd("suma2");

function asyncFunction() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Async function");
            resolve();
        }, 2000);
    });
}

console.time("asyncFunction");

asyncFunction().then(() => console.timeEnd("asyncFunction"));

console.timeEnd("all");