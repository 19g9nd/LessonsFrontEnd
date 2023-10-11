const http = require('http');

const host = 'localhost';
const port = 8000;

const headers = {
    'Access-Control-Allow-Origin': 'http://127.0.0.1:5500',
    'Access-Control-Allow-Methods': 'GET, POST'
}

const sleep = ms => new Promise((resolve)=> setTimeout(resolve,ms));


const db = {
    tasks: [1,2,3,4,5],
}

function requestListener(req, res) {
    if (req.method === 'GET') {
        res.writeHead(200, headers);
        sleep(200)
        .then(()=> res.end(JSON.stringify(db.tasks)));
    }

    if (req.method === 'POST') {
        req.on('data', (data) => {
            db.tasks.push(JSON.parse(data));
        })

        req.on('end', () => {
            res.writeHead(200, headers);
            res.end(JSON.stringify('SUCCESSFULLY ADDED'));
        })
    }

}

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
})