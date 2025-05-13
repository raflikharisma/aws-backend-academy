const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'application/json');
response.setHeader('Powered-By', 'Node.js');
    

    response.statusCode = 200;

    const {method, url} = request;

    if(url === '/'){
        if(method === 'GET'){
            response.statusCode = 200;
            response.end(JSON.stringify({
                message : 'Halaman Hompage'
            }))
            
        }
        else{
            response.statusCode = 400;
             response.end(JSON.stringify({
                message : 'Halaman tidak ditemukan!'
            }))
        }
    }

    else if(url === '/about'){
        if(method === 'GET'){
            response.statusCode = 200;
             response.end(JSON.stringify({
                message : 'Halaman ABout'
            }))
        }else if(method === 'POST'){
            let body = [];

            request.on('data', chunk => {
                body.push(chunk);
            })

            request.on('end', () => {
                
                body = Buffer.concat(body).toString();
                const {name} = JSON.parse(body);
                response.statusCode = 200;
               response.end(JSON.stringify({
                message : `Halaman about dan hai ${name}!`
            }))
            })
        
        } else{
            response.statusCode = 400;
            response.end(JSON.stringify({
                message : 'Halaman Hompage'
            }))
        }
    }

    else {
        response.statusCode = 404; 
        response.end('<h1>Halaman tidak ditemukan!</h1>')
    }

   
}

const server = http.createServer(requestListener);

const port  = 5000;

const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server running on http://${host}:${port}`);
} )