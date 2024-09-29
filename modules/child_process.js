const { exec, spawn } = require("child_process");
const { stderr } = require("process");

exec("ls", (err, stdout, stderr) => {
    if (err) {
        console.error(err);
        return false;
    }
    console.log(stdout);
});

let process = spawn("ls", ["-la"]);

console.log(process.pid);
console.log(process.connected);

process.stdout.on("data", function (data) {
    console.log(process.killed);
    console.log(data.toString());
})

process.on("exit", function () {
    console.log("process ended");
})