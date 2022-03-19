const http = require('http');

// O default para o host quando não informado é localhost

http
    .createServer((req, res) => {
        res.write('Hello, World!\n'); // executa sem finalizar
        res.end();                    // finaliza
    })
    .listen(3000, () => console.log('Server is running in port 3000'));
