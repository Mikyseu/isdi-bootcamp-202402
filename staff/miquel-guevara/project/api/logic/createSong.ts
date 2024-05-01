// create-song.ts

import { validate, errors } from 'com';
import { User, Song } from '../data/index.ts'

const { SystemError, NotFoundError } = errors;



function createSong(userId: string, title: string, sunoId: string): Promise<any> {
    validate.text(userId, 'userId', true);
    validate.text(title, 'title');
    validate.text(sunoId, 'sunoId');

    return User.findById(userId)
        .then(user => {
            if (!user)
                throw new NotFoundError('user not found');

            return Song.create({ user: userId, title: title, sunoId: sunoId });
        })
        .catch(error => {
            throw new SystemError(error.message);
        });
}

export default createSong;
