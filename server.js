import { createServer } from 'http';
const host = "127.0.0.1"
const port = 3000;

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Ola Mundo!\n Meu primeiro script em Node.js\n')
})

server.listen(port, host, () => {
    console.log(`Servidor rodando em http://${host}:${port}/`);
}
);

