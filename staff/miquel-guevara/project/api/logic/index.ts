import registerUser from './registerUser.ts'
import authenticateUser from './authenticateUser.ts'
import retrieveUser from './retrieveUser.ts'

import createSong from './createSong.ts'
import retrieveSongs from './retrieveSongs.ts'

import updateUserAvatar from './updateUserAvatar.ts'

const logic = {
    registerUser,
    authenticateUser,
    retrieveUser,

    createSong,
    retrieveSongs,

    updateUserAvatar
}

export default logic