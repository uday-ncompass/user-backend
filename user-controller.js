const { queryExecutor } = require("./db")
const { getUserQueryConstructor, createUserQueryConstructor, deleteUserQueryConstructor, updateUserQueryConstructor, getAllUserQueryConstructor } = require("./user-helpers")


const getAllUser = async (req, res) => {
    try {
        let query = getAllUserQueryConstructor()
        let result = await queryExecutor(query.sql)
        if (result.length === 0) {
            res.status(404).json({ message: "invlid" })
            return
        }
        res.json(result)
        return
    } catch (error) {
        res.json({message:error.message})
    }

}
const getUser = async (req, res) => {
    try {
        let query = getUserQueryConstructor(req.params.id)
        let result = await queryExecutor(query.sql, query.values)
        if (result.length === 0) {
            res.status(404).json({ message: "invlid" })
            return
        }
        res.json(result)
        return
    } catch (error) {
        res.json({message:error.message})
    }

}

const createUser = async (req, res) => {
    try {
        console.log(req.body)
        let query = createUserQueryConstructor(req.body)
        let result = await queryExecutor(query.sql, query.values)
        if (result.affectedRows === 0) {
            res.status(400).json({ message: "invlid" })
            return
        }
        res.json(result.affectedRows)
        return
    } catch (error) {
        res.json({message:error.message})
    }

}

const deleteUser = async (req, res) => {
    try {
        let query = deleteUserQueryConstructor(req.params.id)
        let result = await queryExecutor(query.sql, query.values)
        if (result.affectedRows === 0) {
            res.status(404).json({ message: "invlid" })
            return
        }
        res.json(result.affectedRows)
        return
    } catch (error) {
        res.json({message:error.message})
    }

}

const updateUser = async (req, res) => {
    try {
        let query = updateUserQueryConstructor(req.params.id, req.body)
        let result = await queryExecutor(query.sql, query.values)
        if (result.affectedRows === 0) {
            res.status(404).json({ message: "invlid" })
        }
        res.json(result.affectedRows)
        return
    } catch (error) {
        res.json({message:error.message})
    }

}


module.exports = {
    getUser,
    getAllUser,
    createUser,
    deleteUser,
    updateUser
}

