
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


//user.id me traigo su array de fav y luego de todas las canciones de la base datos me traigo las que

//esten dentro de la lista de user fav  find(_id: {$in:user.favorites})


//"por cada cancion iterar la list ay comprovar si estan el la array de favoritos del ususario song._id
//compruebo si esta en fav array y en cas de que este seteo un booleano que tenga true y si no esta que
//tenga false"