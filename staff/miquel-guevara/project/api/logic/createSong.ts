import { validate, errors } from 'com';
import { UserType, User, Song } from '../data/index.ts'
import { create } from 'domain';

const { SystemError, NotFoundError } = errors

function createSong(author: string, userId: string, image: string, title: string, song: string): Promise<void> {
    validate.text(author, 'author')
    validate.text(userId, 'userId', true)
    validate.url(image, 'image')
    validate.text(title, 'title')
    validate.url(song, 'song')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message)})
        .then(user => {
            if(!user)
                throw new NotFoundError('user not found')

            return Song.create({ author: author, user: userId, image: image, title: title, song: song })
                .catch(error => { throw new SystemError(error.message)})
        })

        .then(song => { })


}

export default createSong