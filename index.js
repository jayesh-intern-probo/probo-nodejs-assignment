const { response } = require('express')
const express = require('express')
const app = express()
const userRouter = require('./src/routes/user.route')

app.use(express.json())

app.use("/api/users", userRouter)

app.listen(8800, ()=> {
    console.log("Server is Up & Running")
})