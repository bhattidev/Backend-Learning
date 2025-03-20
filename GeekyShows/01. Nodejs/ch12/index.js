import http from 'http';
const server = http.createServer((req, res) => {
	res.end('Response from server');
});
server.listen(8000, 'localhost', () => {
	console.log('Server is running http://localhost:8000/');
});
