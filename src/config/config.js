import mysql from "mysql2"
import { config } from "dotenv"

config()

// create the connection to database
export const dbPool = mysql.createConnection({
    host: process.env.DB_HOST,
    user: 'root',
    password: "",
    database: 'express_mysql',
  });