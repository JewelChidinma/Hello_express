const express = require ("express")

const app = express()
const PORT = 5000

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`)
    next()
})

app.get("/", (req, res) => {
    res.status(200)
    res.send("Hello World!")
})

app.use((req, res) => {
    
})

app.listen(PORT, () => {
    console.log(`Server started successfully at http://localhost:${5000}`)
})