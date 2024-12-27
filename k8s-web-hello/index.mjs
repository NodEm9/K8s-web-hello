import express from 'express';
import os from 'os';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
	const hostname = `VERSION 2: Hello from ${os.hostname()}!`;
	console.log(hostname);
	res.send(hostname);
});

app.listen(PORT, () => {
	console.log(`Web server is running on port ${PORT}`);
});