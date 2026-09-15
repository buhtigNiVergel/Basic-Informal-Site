import http from 'node:http'
import { readFile } from 'node:fs'

const errResponse = (res : http.ServerResponse<http.IncomingMessage>) => {
    res.statusCode = 500;
    res.end("Error reading")
}

const setStatusCodeAndHeader = (res : http.ServerResponse<http.IncomingMessage>) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
}

const server = http.createServer((req , res) => {
    if(req.url === '/' && req.method === 'GET'){
        readFile('./index.html', (err, data) => {
            if (err) {
                errResponse(res)
                return;
            }

            setStatusCodeAndHeader(res)
            res.end(data)
        })
    }else if(req.url === '/about' && req.method === 'GET'){
        readFile('./about.html', (err, data) => {
            if(err){
                errResponse(res)
                return;
            }

            setStatusCodeAndHeader(res)
            res.end(data)
        })
    }else if(req.url === '/contact-me' && req.method === 'GET'){
        readFile('./contact-me.html', (err, data) => {
            if(err){
                errResponse(res)
                return
            }

            setStatusCodeAndHeader(res)
            res.end(data)
        })
    }
    else {
       readFile('./404.html', (err, data) => {
        if(err){
                errResponse(res)
                return
            }

            setStatusCodeAndHeader(res)
            res.end(data)
       })
    }
});

server.listen(8080);