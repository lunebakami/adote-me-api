require('dotenv').config();

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};
