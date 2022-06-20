const express = require("express")
const { router } = require("./user-routes")
require("dotenv").config()
const cors = require("cors")

const app = express()
const port = process.env.PORT || 5000


app.use(express.json())
app.use(cors({origin:"*"}))
app.use('/api/users/', router)


app.listen(port , () => console.log(`Server is running at port ${port}`))