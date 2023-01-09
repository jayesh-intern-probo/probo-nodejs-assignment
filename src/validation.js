module.exports = {
    validateEmail: (userEmail) => {
        const emailPattern =  /^[a-zA-Z0-9_.+]*[a-zA-Z][a-zA-Z0-9_.+]*@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i
        if(userEmail.length !== 0 && userEmail.match(emailPattern)) {
            return true
        }

        return false
    },

    validateName: (firstName, lastName) => {
        const namePattern = /^[a-zA-Z]$/
        if(firstName.length !== 0 && lastName.length !== 0 
            && firstName.match(namePattern) && lastName.match(namePattern)) {
                return true
            }

        return false
    },

    validateMobile: (mobile) => {
        const mobilePattern = /[1-9][0-9]\{9\}/
        if(mobile.match(mobile)) {
            return true
        }

        return false
    },

    validateFullSet: (body) => {
        return (this.validateMobile(body.mobile) && this.validateEmail(body.email) && 
                this.validateName(body.first_name, body.last_name))
    },

    allFieldsPresent: (body) => {
        return (body.first_name && body.last_name &&
             body.email && body.password && body.mobile)
    },

    partialFieldsPresent: (body) => {
        return (body.email && body.password)
    }
}