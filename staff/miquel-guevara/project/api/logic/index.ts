import registerUser from './registerUser.ts'
import authenticateUser from './authenticateUser.ts'
import retrieveUser from './retrieveUser.ts'

import createSong from './createSong.ts'
import retrieveSongs from './retrieveSongs.ts'

const logic = {
    registerUser,
    authenticateUser,
    retrieveUser,

    createSong,
    retrieveSongs
}

export default logic