import express from "express";
import bodyParser from "body-parser";
import userRoute from "./routes/users.js"
import { uploadImage } from "./controller/multer.js";

const app = express()
const port = process.env.PORT || 5000

// untuk mendapat req body dari api
// app.use(express.json())
app.use(bodyParser.json())

// CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // parameter kedua bintang, maksudnya mengizinkan semua lintas domain dapat mengakses REST API saya
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

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