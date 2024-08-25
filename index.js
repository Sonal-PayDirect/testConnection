const { Sequelize } = require('sequelize');
require('dotenv').config();

console.log('Starting the database connection process...');

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
  console.log('Attempting to authenticate the database connection...');

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } finally {
    console.log('Closing the database connection...');
    await sequelize.close();
    console.log('Database connection closed.');
  }
}

console.log('Starting the test connection function...');
testConnection();
