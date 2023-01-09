const { 
    handleCreateUserRequest, 
    handleGetUserListRequest, 
    handleDeleteUserRequest, 
    handleUpdateUserRequest,
    loginController
 } = require('../controllers/user.controller')
const router = require('express').Router()
const { checkToken } = require('../../auth/tokenValidation')

router.post("/createUser", checkToken, handleCreateUserRequest)
router.get("/getUserList", checkToken, handleGetUserListRequest)
router.patch("/updateUser", checkToken, handleUpdateUserRequest)
router.delete("/deleteUser/:email", checkToken, handleDeleteUserRequest)
router.post("/login", loginController)

module.exports = router