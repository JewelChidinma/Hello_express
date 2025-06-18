const express = require("express")

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
    const apiKey = req.query.apiKey;
    if (apiKey) {
        next();
    } else {
        res.status(401).send("Unauthorized");
    }
})

app.get("/users", (req, res) => {
    res.status(200)
    res.JSON([
        {
            "id": 1,
            "name": "Yemi Olanrewaju",
        },

        {
            "id": 2,
            "name": "Oluwasegun Olaoluwa",
        }
    ])
})

app.listen(PORT, () => {
    console.log(`Server started successfully at http://localhost:${5000}`)
})