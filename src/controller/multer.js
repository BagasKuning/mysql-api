import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // parameter cb itu artinya callback

        // kalau error nya null(seperti di bawah) -> simpan ke dalam folder public/images
        cb(null, "public/images")
    },
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + '-' + file.originalname)
    }
})

export const uploadImage = multer({
    storage: storage,
    limits: {
        fileSize: 3 * 1000 * 1000
    }
})
