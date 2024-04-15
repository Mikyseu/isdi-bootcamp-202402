import { validate, errors } from "com";

import { User } from "../data/index.ts"

const { SystemError, CredentialsError, NotFoundError } = errors

function authenticateUser(username: string, password: string, callback: Function) {
    validate.text(username, 'username', true)
    validate.password(password)

   return User.findOne({ username })

        .catch(error => { throw new SystemError(error.message)})
        .then(user => {
            if (!user) 
                callback(new NotFoundError('user not found'))

                if (user.password !== password) 
                    callback(new CredentialsError('wrong password'))
    
                    return user.id
            })
}

export default authenticateUser