import { dbPool } from "../config/config.js"

export const getAllUsersTable = (req, res) => {
    const queryMysql  = "SELECT * FROM users"
    return dbPool.execute(queryMysql)
}