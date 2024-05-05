
import { SystemError } from "../../com/errors.ts";
import { User } from "../data/index.ts";

function removeFavSong(songId, userId) {

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {

            let index = user.favorites.indexOf(songId)
            if (index > -1) {
                user.favorites.splice(index, 1)

                user.save()

                return true

            } else { throw new SystemError("song does not exist") }

        })

}

export default removeFavSong