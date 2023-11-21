import mysql from "mysql2"
import { config } from "dotenv"

config()

// create the connection to database
export const dbPool = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });