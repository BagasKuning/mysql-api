export const logRequest = (req, res, next) => {
    console.log("Terjadi req di path " + req.path)
    next()
}
