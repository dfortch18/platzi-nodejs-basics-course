const os = require("os");

const SIZE = 1024;

const kb = (bytes) => bytes / SIZE;

const mb = (bytes) => kb(bytes) / SIZE;

const gb = (bytes) => mb(bytes) / SIZE;

console.log(os.arch());
console.log(os.platform());
console.table(os.cpus());
console.log(os.constants);
console.log(`${kb(os.freemem())} kb`);
console.log(`${mb(os.freemem())} mb`);
console.log(`${gb(os.freemem())} gb`);
console.log(`${gb(os.totalmem())} gb`);


console.log(os.homedir());
console.log(os.tmpdir());

console.log(os.hostname());
console.log(os.networkInterfaces());