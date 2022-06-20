const { getUser, createUser, deleteUser, updateUser, getAllUser } = require("./user-controller")

const router = require("express").Router()

router.get('/',getAllUser)

router.get('/:id',getUser)

router.post('/',createUser)

router.delete('/:id',deleteUser)

router.put('/:id',updateUser)


module.exports = {
    router
}