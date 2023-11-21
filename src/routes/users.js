import Express from "express";
import { getAllUsers, createNewUser, updateUsers, deleteUser } from "../controller/users.js";

const router = Express.Router()

// CREATE
router.get("/", getAllUsers)

// POST
router.post("/", createNewUser)

// UPDATE
router.patch('/:id', updateUsers)

// DELETE
router.delete('/:id', deleteUser)

export default router;
