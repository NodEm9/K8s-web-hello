import express from 'express';
import os from 'os';
import fetch from 'node-fetch';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
	const hostname = `VERSION 2: Hello from ${os.hostname()}!`;
	console.log(hostname);
	res.send(hostname);
});

app.get('/nginx', async (req, res) => {
	const url = 'http://nginx'
	const response = await fetch(url)
	const body = await response.text();
	res.end(body);
})

app.listen(PORT, () => {
	console.log(`Web server is running on port ${PORT}`);
});