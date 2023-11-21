import express from "express";
import bodyParser from "body-parser";
import userRoute from "./routes/users.js"
import { uploadImage } from "./controller/multer.js";

const app = express()
const port = process.env.PORT || 5000

// untuk mendapat req body dari api
// app.use(express.json())
app.use(bodyParser.json())

app.use("/assets",express.static('public/images'))

app.use("/users", userRoute)

app.post('/upload', uploadImage.single("photo"),(req, res) => {
    res.status(200).json({
        message: "Upload berhasil"
    })
})
app.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message
    })
}) 

app.listen(port, () => {
    console.log("server anda berjalan di http://localhost:" + port)
})