function asyncFunction(callback) {
    setTimeout(function () {
        try {
            let a = 3 + z;
            callback(null, a);
        } catch (e) {
            callback(e);
        }
    }, 1000);
}

asyncFunction((err, value) => {
    if (err) {
        console.log("An error ocurred");
        console.error(err);
    } else {
        console.log(value);
    }
});