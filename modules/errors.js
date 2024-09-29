function itThrows() {
    return 3 + z;
}

function itThrowsAsync(callback) {
    setTimeout(function () {
        try {
            3 + z;
        } catch (err) {
            callback(err);
        }
    }, 1000);
}

try {
    //itThrows();
    itThrowsAsync(console.log);
} catch (err) {
    console.log("Something happened");
    console.error(err);
    console.log("But we caught it");
}

console.log("Final process");