

const getAllUserQueryConstructor = () =>{

    let sql = "select userid, username, email from user "

    return {
        sql
    }
}
const getUserQueryConstructor = (id) =>{

    let sql = "select userid, username, email,password from user where userid = ?"

    let values = id

    return {
        sql,
        values
    }
}

const createUserQueryConstructor = (params) =>{
    let sql = "insert into user (username,email,password) values (?,?,?)"

    let values = [params.name,params.email,params.password]

    return {
        sql,
        values
    }
}

const deleteUserQueryConstructor = (id) =>{
    let sql = "delete from user where userid = ?"

    let values = [id]

    return {
        sql,
        values
    }
}

const updateUserQueryConstructor = (id,params) =>{

    let sql = "update user set username= ?,email=?,password=? where userid = ?"

    let values = [params.name,params.email,params.password,id]

    return {
        sql,
        values
    }
}

module.exports ={
    getAllUserQueryConstructor,
    getUserQueryConstructor,
    createUserQueryConstructor,
    deleteUserQueryConstructor,
    updateUserQueryConstructor
}