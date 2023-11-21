import { dbPool } from "../config/config.js"

export const getAllUsersTable = (req, res) => {
    const queryMysql  = "SELECT * FROM users"
    return dbPool.execute(queryMysql)
}

export const createUsers = (body) => {
    const sqlQuery = `INSERT INTO users (name, email, address) 
                    VALUES (${req.body.name}, ${req.body.email}, ${req.body.address})`
    return dbPool.execute(sqlQuery)
}