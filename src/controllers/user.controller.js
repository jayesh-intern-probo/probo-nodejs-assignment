const { 
    createUser, 
    updateUser, 
    getUserList, 
    deleteUser, 
    getUserByEmail 
} = require('../models/user.model')

const { genSaltSync, hashSync, compareSync } = require('bcrypt')
const { sign } = require('jsonwebtoken')

module.exports = {
    handleCreateUserRequest: (request, response) => {
        try {
            const body = request.body
            const salt = genSaltSync(10)
            body.password = hashSync(body.password, salt)

            createUser(body, (error, results) => {
                if(error) {
                    console.log(error)
                    return response.status(500).json({
                        success: 0,
                        message: 'Internal Database Error'
                    })
                }
                return response.status(201).json({
                    success: 1,
                    data: results,
                    message: 'User Creation Successful'
                })
        })}
        catch(error) {
            console.log(error)
            response.status(500).json({
                success: 0,
                message: 'Something Went Wrong'
            })
        }
    },

    handleGetUserListRequest: (request, response) => {
        try {
            getUserList((error, results) => {
                if(error) {
                    console.log(error)
                    return response.status(500).json({
                        success: 0,
                        message: 'Internal Database Error'
                    })
                }
                return response.status(200).json({
                    success: 1,
                    data: results,
                    message: 'Successfully Retrieved Content'
                })
            })
        }
        catch(error) {
            console.log(error)
            response.status(500).json({
                success: 0,
                message: 'Something Went Wrong'
            })
        }
    },

    handleUpdateUserRequest: (request, response) => {
        try {
            const body = request.body
            const salt = genSaltSync(10)
            body.password = hashSync(body.password, salt)
            updateUser(body, (error, results)=> {
                if(error) {
                    console.log(error)
                    return response.status(500).json({
                        success: 0,
                        message: 'Internal Database Error'
                    })
                }
                if(!results) {
                    return response.status(400).json({
                        success: 0,
                        message: 'User With Requested Email Not Found'
                    })
                }
                return response.status(201).json({
                    success: 1,
                    data: results,
                    message: 'User Updation Successful'
                })
            })
        }
        catch(error) {
            console.log(error)
            response.status(500).json({
                success: 0,
                message: 'Something Went Wrong'
            })
        }
    },

    handleDeleteUserRequest: (request, response) => {
        try {
            deleteUser(request.params.email, (error, results)=>{
                if(error) {
                    console.log(error)
                        return response.status(500).json({
                            success: 0,
                            message: 'Internal Database Error'
                        })
                }
                if(!results) {
                    return response.status(400).json({
                        success: 0,
                        message: 'User With Requested Email Not Found'
                    })
                }
                return response.status(200).json({
                    success: 1,
                    data: results,
                    message: 'User Deletion Successful'
                })
        })}
        catch(error) {
            console.log(error)
            response.status(500).json({
                success: 0,
                message: 'Something Went Wrong'
            })
        }
    },

    loginController: (request, response) => {
        try {
            const body = request.body
            getUserByEmail(body.email, (error, results)=> {
                if(error) {
                    console.log(error)
                    response.status(500).json({
                        success: 0,
                        message: 'Internal Database Error'
                    })
                }
                if(!results) {
                    return response.status(400).json({
                        success: 0,
                        message: 'Invalid Email Or Password'
                    })               
                }
                
                const request = compareSync(body.password, results.password)
                
                if(request) {
                    results.password = undefined
                    const jsonToken = sign({result: results}, "temporaryKey", {
                        expiresIn: "1h"
                    })
                    return response.status(200).json({
                        success: 0,
                        message: 'Logged In Successfully',
                        token: jsonToken
                    })
                }
                else {
                    return response.status(400).json({
                        success: 0,
                        message: 'Invalid Email Or Password'
                    })
                }
        })}
        catch(error) {
            console.log(error)
            response.status(500).json({
                success: 0,
                message: 'Something Went Wrong'
            })
        }
    }
}
