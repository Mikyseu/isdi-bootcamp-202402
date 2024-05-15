import { validate, errors } from 'com'

function retrieveSongs(userFavorites) {
    validate.token(sessionStorage.token)

    if (userFavorites) {
        return getUserFavorites().then(userFavoritesList => {
            console.log(userFavoritesList)
            const mapFavorites = userFavoritesList.map(song => {
                return { ...song, favorite: true }
            })
            return mapFavorites
        })
    }

    return getAllSongs()
}

const getUserFavorites = () => {
    return fetch(`${import.meta.env.VITE_API_URL}/favorites`, {
        headers: {
            'Authorization': `Bearer ${sessionStorage.token}`
        }
    }).then(res => {
        if (res.status === 200) {
            return res.json()
        }
        throw new Error('Error al recuperar favoritos')
    })
}

const getAllSongs = () => {
    return fetch(`${import.meta.env.VITE_API_URL}/songs`, {
        headers: {
            'Authorization': `Bearer ${sessionStorage.token}`
        }
    }).then(res => {
        if (res.status !== 200) {
            throw new Error('Error recovering all songs')
        }
        return res.json()
    }).then(songList => {
        return getUserFavorites().then(userFavorites => {
            const consolidateList = songList.map(song => {
                const songFound = userFavorites.find(element =>
                    element.sunoId === song.sunoId
                )
                return songFound ? { ...song, favorite: true } : song
            })
            return consolidateList
        })
    })
}

export default retrieveSongs
