require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;  // Use the PORT environment variable or default to 3000

app.get('/', (req, res) => {
    res.send('Hello, the server is running!');
});

async function testConnection() {
    console.log('Starting the test...');

    try {
        console.log('Simulating a process...');
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        console.log('Test completed.');
    }
}

console.log('Running the test...');
testConnection();

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
