// websocket server setup

const http = require('http');
const port = 8080;
const httpserver = http.createServer();
const { server } = require('websocket')

httpserver.listen(port, () => {
    console.log('server is listening to port 8080...')
})

const wsServer = new server({ httpServer: httpserver});

// initialize the 2 clients the will use the app
const clients = {}


