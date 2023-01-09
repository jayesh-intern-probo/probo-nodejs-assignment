const database = require('../../config/db.config')

module.exports = {
    createUser: (userData, callBack)=> {
        database.query(
            `INSERT INTO users VALUES(?, ?, ?, ?, ?, ?)`,
            [
                userData.first_name,
                userData.last_name,
                userData.email,
                userData.password,
                userData.mobile, 
                userData.img
            ],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results)
            }
        )
    },

    getUserList: (callBack) => {
        database.query(
            `SELECT * FROM users`,
            [],
            (error, results, fields) => {
                if(error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        )
    },

    updateUser: (userData, callBack) => {
        database.query(
            `UPDATE users SET first_name=?, last_name=?, email=?, password=?, mobile=?, img=? WHERE email=?`,
            [
                userData.first_name,
                userData.last_name,
                userData.email,
                userData.password,
                userData.mobile, 
                userData.img,
                userData.email
            ],
            (error, results, fields) => {
                if(error){ 
                    return callBack(error)
                }
                return callBack(null, results)
            }
        )
    },

    deleteUser: (userEmail, callBack) => {
        database.query(
            `DELETE FROM users WHERE email=?`,
            [
                userEmail
            ],
            (error, results, fields) => {
                if(error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        )
    },

    getUserByEmail: (userEmail, callBack) => {
        database.query(
            `SELECT * FROM users WHERE email = ?`,
            [
                userEmail
            ],
            (error, results, fields) => {
                if(error) {
                    callBack(error)
                }
                return callBack(null, results[0])
            }
        )
    }
}
