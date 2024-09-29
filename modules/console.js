console.log('Hello');
console.info('Hello');
console.error('error');
console.log('warn');

let table = [
    {
        a : 1,
        b: 'z'
    },
    {
        a: 1,
        b: 3
    }
]

console.log(table);
console.table(table);

console.group('conversation');
console.log('blablabla');
console.log('bye');
console.groupEnd();

function function1() {
    console.group('function1');
    console.log('blablabla');
    function2();
    console.log('blablabla');
    console.groupEnd();
}

function function2() {
    console.group('function2');
    console.log('blablabla');
    console.log('blablabla');
    console.groupEnd();
}

function1();