
import { User, Song } from "../data/index.ts";
import { SystemError } from "../../com/errors.ts";


function retrieveFavSongs(userId) {


    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(async user => {

            const promises = user.favorites.map(async id => {
                return await Song.findById(id)
            })

            const songFavList = await Promise.all(promises)
                .then(songFavList => {
                    return songFavList.map<{ id: string, title: string, sunoId: string, user: string }>(({ _id, title, sunoId, user }) => ({
                        id: _id.toString(),
                        title,
                        sunoId,
                        user: user.toString()

                    }))
                })

            return songFavList
        })
}

export default retrieveFavSongs