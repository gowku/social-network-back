import { Sequelize } from 'sequelize-typescript';
import 'dotenv/config';

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  dialect: 'mysql',
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: 3306,
  logging: true,
});

export default sequelize;
