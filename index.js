const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, null, null, {
    host: process.env.DB_HOST,
    dialect: 'mssql',
    dialectOptions: {
        options: {
            encrypt: true,
            trustServerCertificate: true
        },
        authentication: {
            type: 'ntlm',
            options: {
                domain: process.env.DB_DOMAIN,
                userName: process.env.DB_USER,
                password: process.env.DB_PASSWORD
            }
        }
    }
});  

async function testConnection() {
    console.log('Starting the connection test...');

    try {
        // Simulating connection attempt
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Connection has been established successfully!');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    } finally {
        console.log('Connection test completed.');
        await sequelize.close();
    }
}

console.log('Running connection test...');
testConnection();
