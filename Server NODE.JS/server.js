const http = require('http');

const host = 'localhost';
const port = 8000;

const headers = {
    // 'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Origin':'http://127.0.0.1:5500',
    'Access-Control-Allow-Methods' :'GET,POST'
}

const db = {
    tasks: [],
}
function requestListener(req, res) {
    if (req.method === 'GET') {
        res.writeHead(200,headers);
        res.end(JSON.stringify(db.tasks));
    }

    if (req.method === 'POST') {
        req.on('data',(data)=>{
            console.log(JSON.parse(data));
        })
        req.on('end',()=>{
            res.writeHead(200,headers);
            res.end(JSON.stringify('SUCCESFULLY ADDED'));
        })
    }

}
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
})