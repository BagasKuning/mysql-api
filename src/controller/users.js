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

        res.status(200).json({
            message: "Connection Success",
            data:  rows
        })
    })
}

export const getUser = async (req, res) => {
    const { id } = req.params
    dbPool.execute(`SELECT * FROM users WHERE id='${id}'`, (err, rows) => {
        if(err){
            res.status(500).json({
                message: "connection failed",
                server_message: err
            })
        }

        res.status(200).json({
            message: "Connection Success",
            data:  rows
        })
    })
}

export const createNewUser = (req, res) => {
    if(!req.body.name || !req.body.email || !req.body.address){
        res.status(500).json({
            message: "Insert all Input Column",
        })
    } else {
        const sqlQuery = `INSERT INTO users (name, email, address) 
                        VALUES ('${req.body.name}', '${req.body.email}', '${req.body.address}')`
    
        dbPool.execute(sqlQuery, (err, rows, field) => {
            if(err){
                res.status(500).json({
                    message: "Post Failed",
                    message_server: err
                })
            } else {
                res.status(200).json({
                    message: "POST user success",
                    data: req.body
                })
            }
        })
    }

}

export const updateUsers = (req, res, next) => {
    const { id } = req.params
    const sqlQuery = `UPDATE users SET name='${req.body.name}', email='${req.body.email}',
                     address='${req.body.address}' WHERE users.id = ${id}`
    dbPool.execute(sqlQuery, (err, rows, field) => {
        if(err){
            res.status(500).json({
                message: "Failed Update",
                message_server: err
            })
        } else {
            res.status(200).json({
                message: "Update Success",
                data: req.body
            })
        }
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
            res.status(200).json({
                message: "Deleted Success",
                data: req.body
            })
        }
    })
}