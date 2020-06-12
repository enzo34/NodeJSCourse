const http = require('http');
const app = require('./app');

const portOk = val => {
    const port = parseInt(val, 10);

    if(isNaN(port)) {
        return val;
    }

    if(port >= 0) {
        return port;
    }

    return false;
}

const errorHandler = error => {
    if(error.syscall !== 'listen') {
        throw error;
    }

    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address: 'port: ' + port;
    switch(error.code){
        case 'EACCESS':
            console.error(bind + 'Permission Denied');
            process.exit(1);
            break;
        case 'EADDRINUSE ':
            console.log(bind + "Les pinguins c'est gentil");
            process.exit(1);
            break;
        default:
            throw error;
    }
}

const server = http.createServer(app);

server.on('error', errorHandler);

server.on('listening', () => {
    const address = server.address();
    console.log('Listen on port ' + port);
})

const port = portOk(process.env.PORT || 3000);
app.set('port', port);



server.listen(port);