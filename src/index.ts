import http from 'node:http'
import { readFile } from 'node:fs'

const server = http.createServer((req , res) => {
    if(req.url === '/' && req.method === 'GET'){
        readFile('./index.html', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end("Error reading index.html");
                return;
            }

            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.end(data)
        })
    }else if(req.url === '/about.html' && req.method === 'GET'){
        readFile('./about.html', (err, data) => {
            if(err){
                 res.statusCode = 500;
                res.end("Error reading index.html");
                return;
            }

            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.end(data)
        })
    }
});

server.listen(8080);