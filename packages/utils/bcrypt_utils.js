const bcrypt = require("bcrypt");

const password = "1234secure!";

bcrypt.hash(password, 10, function (err, encrypted) {
    console.log(encrypted);

    bcrypt.compare(password, encrypted, function (err, same) {
        if (same) console.log("The password matches");
        else console.log("The password does not match");
    });
});