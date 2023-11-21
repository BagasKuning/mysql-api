import express from "express";
import bodyParser from "body-parser";
import userRoute from "./routes/users.js"
import { logRequest } from "./middleware/logs.js"
import { config } from "dotenv";

const app = express()
const port = process.env.PORT || 5000

// untuk mendapat req body dari api
// app.use(express.json())
app.use(bodyParser.json())

app.use("/users", userRoute)

app.listen(port, () => {
    console.log("server anda berjalan di http://localhost:" + port)
})