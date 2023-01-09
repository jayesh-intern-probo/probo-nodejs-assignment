module.exports = {
    validateEmail: (userEmail) => {
        const emailPattern =  /^[a-zA-Z0-9_.+]*[a-zA-Z][a-zA-Z0-9_.+]*@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        console.log(typeof userEmail)
        if(typeof userEmail === 'string' && userEmail.length !== 0 && userEmail.match(emailPattern)) {
            return true
        }

        return false
    },

    validateName: (firstName, lastName) => {
        const namePattern = /^[a-zA-Z]$/
        if(typeof firstName === 'string' && typeof lastName === 'string' 
            && firstName.length !== 0 && lastName.length !== 0 
            && firstName.match(namePattern) && lastName.match(namePattern)) {
                return true
            }

        return false
    },

    validateMobile: (mobile) => {
        const mobilePattern = /[1-9][0-9]\{9\}/
        if(typeof mobile === 'string' && mobile.match(mobile)) {
            return true
        }

        return false
    },

    allFieldsPresent: (body) => {
        return (body.first_name && body.last_name &&
             body.email && body.password && body.mobile)
    },

    partialFieldsPresent: (body) => {
        return (body.email && body.password)
    }
}