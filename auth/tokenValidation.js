const { verify } = require('jsonwebtoken')

module.exports = {
    checkToken: (request, response, next) => {
        let token = request.get('authorization')
        if(token) {
            token = token.slice(7)
            verify(token, 'temporaryKey', (error, decodedValue) => {
                if(error) {
                    response.status(401).json({
                        success: 0,
                        message: 'Invalid Token'
                    })
                }
                else {
                    next()
                }
            })
        }
        else {
            response.status(401).json({
                success: 0,
                message: 'Access Denied!'
            })
        }
    }
}