const fs = require("fs");

function read(route, callback) {
    fs.readFile(route, (err, data) => {
        callback(data.toString());
    });
}

function write(route, content, callback) {
    fs.writeFile(route, content, function (err) {
        if (err) {
            console.log('An error has ocurred', err);
        } else {
            console.log('File written successfully');
            callback(err);
        }
    });
}

function deleteFile(route, callback) {
    fs.unlink(route, callback);
}

let existingFile = __dirname + '/file.txt'
let newFile = __dirname + '/newfile.txt'
write(newFile, 'I\'m a new file', console.log);
read(existingFile, console.log);
deleteFile(newFile, console.log);