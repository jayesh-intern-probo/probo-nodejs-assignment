const mysql = require('mysql')

const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "userdetails"
})

database.connect((error)=>{
    if(error) throw error
    console.log("Database Connected Successfully")
})

module.exports = database