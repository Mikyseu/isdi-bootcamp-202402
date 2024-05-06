
import { NotFoundError, SystemError } from "../../com/errors.ts";
import { User } from "../data/index.ts";

function removeFavSong(songId, userId) {

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            //TODO arreglar caso de uso de que no exista la cancion(id) en favoritos
            try {
                if (!user.favorites.includes(songId)) {
                    throw new NotFoundError('Song not found in favorites')
                }

                let index = user.favorites.indexOf(songId)
                if (index > -1) {
                    user.favorites.splice(index, 1)

                    user.save()
                }
            } catch (error) {
                throw new SystemError(error.message)
            }
        })

}

export default removeFavSong