const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Serveur Ok');
})

server.listen(process.env.PORT || 3000);