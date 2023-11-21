import { dbPool } from "../config/config.js"
// import { getAllUsersTable } from "../models/users.js"

export const getAllUsers = async (req, res) => {
    dbPool.execute("SELECT * FROM users", (err, rows) => {
        if(err){
            res.status(500).json({
                message: "connection failed",
                server_message: err
            })
        }

        res.json({
            message: "Connection Success",
            data:  rows
        })
    })
}
export const createNewUser = (req, res) => {
    const sqlQuery = `INSERT INTO users (name, email, address) 
                    VALUES ('${req.body.name}', '${req.body.email}', '${req.body.address}')`
    dbPool.execute(sqlQuery, (err, rows, field) => {
        if(err){
            res.status(500).json({
                message: "gagl post",
                message_server: err
            })
        } else {
            res.json({
                message: "POST user success",
                data: req.body
            })
        }
    })
}

export const updateUsers = (req, res, next) => {
    const { id } = req.params
    res.json({
        message: "data berhasil di update"
    })
}

export const deleteUser = ( req, res, next) => {
    const { id } = req.params
    const sqlQuery = `DELETE FROM users WHERE users.id = ${id}`
    dbPool.execute(sqlQuery, (err, rows, field) => {
        if(err){
            res.status(500).json({
                message: "Failed Delete",
                message_server: err
            })
        } else {
            res.json({
                message: "Deleted Success",
                data: req.body
            })
        }
    })
}