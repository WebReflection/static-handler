const staticHandler = require('../cjs');
const handler = staticHandler(__dirname);

const {createServer} = require('http');

createServer((req, res) => {
  handler(req, res);
}).listen(8080);
