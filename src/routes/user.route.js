const { 
    handleCreateUserRequest, 
    handleGetUserListRequest, 
    handleDeleteUserRequest, 
    handleUpdateUserRequest,
    loginController
 } = require('../controllers/user.controller')
const router = require('express').Router()
const { checkToken } = require('../../auth/tokenValidation')

router.post("/createUser",  handleCreateUserRequest)
router.get("/getUserList",handleGetUserListRequest)
router.patch("/updateUser",handleUpdateUserRequest)
router.delete("/deleteUser/:email",handleDeleteUserRequest)
router.post("/login", loginController)

module.exports = router