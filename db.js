const mysql = require("mysql2")


const con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "Udhai@123",
    database : "frontend_usecase2"
})


const queryExecutor = async(sql,params) =>{
    try {
        let [result,fields] = await con.promise().query(sql,params)
        return result
    } catch (error) {
        throw error
    }
}

module.exports = {
    queryExecutor
}