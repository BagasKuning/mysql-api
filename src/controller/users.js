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
    res.json({
        message: "POST user success",
        data: req.body
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
    res.json({
        message: "Data berhasil di hapus"
    })
}