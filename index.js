require('dotenv').config();

async function testConnection() {
    console.log('Starting the test...');

    try {
        // Simulated process (no actual connection)
        console.log('Simulating a process...');
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        console.log('Test completed.');
    }
}

console.log('Running the test...');
testConnection();
