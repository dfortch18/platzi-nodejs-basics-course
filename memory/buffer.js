let buffer = Buffer.alloc(4);

console.log(buffer);

let bufferArray = Buffer.from([1, 2, 3, 4, 5]);

console.log(bufferArray);

let bufferString = Buffer.from("Hello");

console.log(bufferString);

let abc = Buffer.alloc(26);
console.log(abc);

for (let i = 0; i < 26; i++) {
    abc[i] = i + 97;
}

console.log(abc.toString());