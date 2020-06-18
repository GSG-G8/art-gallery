require('dotenv').config();

const { Pool } = require('pg');

const {
  env: { NODE_ENV, TEST_DB_URL, DATABASE_URL, DEV_DB_URL },
} = process;

let dbUrl;

switch (NODE_ENV) {
  case 'test':
    dbUrl = TEST_DB_URL;
    break;
  case 'production':
    dbUrl = DATABASE_URL;
    break;
  case 'development':
    dbUrl = DEV_DB_URL;
    break;
  default:
    throw new Error('No Database URL!!!');
}

const options = {
  connectionString: dbUrl,
  ssl: {
    rejectUnauthorized: false,
  },
};

module.exports = new Pool(options);
