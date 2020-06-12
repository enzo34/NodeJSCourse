const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Serveur Cool');
})

server.listen(process.env.PORT || 3000);