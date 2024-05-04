// @ts-nocheck

import { User } from "../data";
import { SystemError } from "com/errors";

function addFavSong(songId, userId) {
    console.log(songId)
    console.log(userId)
    try {
        return User.findById(userId)
            .catch(error => { throw new SystemError(error.message) })
            .then(user => {

                user.favorites.push(songId)

                user.save()

                return true
            })
    } catch (error) {
        console.log(error)
        throw new SystemError(error.message)
    }
}

export default addFavSong

