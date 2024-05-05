import { Schema } from 'mongoose';

const { Types: { ObjectId } } = Schema;

import { User, Song } from '../data/index.ts';

import { validate, errors } from 'com';

const { NotFoundError, SystemError } = errors;

function retrieveSongs(userId: string): Promise<any[]> {
    validate.text(userId, 'userId', true);

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new NotFoundError('user not found');

            return Song.find().lean()
                .catch(error => { throw new SystemError(error.message) });
        });

}

export default retrieveSongs;
