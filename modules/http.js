const http = require("http");

const server = http.createServer((req, res) => {
    console.log("New req");
    console.log(req.url);

    switch (req.url) {
        case "/":
            res.write("I know now how to use the node http module");
            break;
        case "/hello":
            res.write("Hello World");
            break;
        default:
            res.writeHead(404);
            res.write("Not found");
            break;
    }

    res.end();
})

let port = process.env.PORT || 3000;

server.on("listening", () => console.log(`Listening on port ${port}`));

server.listen(port);
