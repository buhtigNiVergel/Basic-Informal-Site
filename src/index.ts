import http from "node: http";

const server = http.createsServer((req, res) => {
    res.writeHead(200, {"Content-type" : "application/json"});

    res.end(JSON.stringify({message: "welcome to server"}));

    server.listen(8080, () => {  

    })
})