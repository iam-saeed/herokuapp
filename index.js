const dotenv = require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()

const port = process.env.PORT || 5000
app.use(cors());
app.use(express.json())

app.use("/api/users", (req, res) => {
    res.json({ data: "The api is working" })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})