// @ts-nocheck
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { User, Song } from '../data/index.ts';
import logic from './index.ts';
import { expect } from 'chai';
import { errors } from 'com';

dotenv.config();

const { DuplicityError, CredentialsError, NotFoundError } = errors;

describe('removeFavSong', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL));

    it('removes fav song', async () => {
        await User.deleteMany();

        const user = await User.create({ name: 'Miky Seu', email: 'miky@seu.com', username: 'Mikyseu', password: '123qwe123' });
        const songCreate = await Song.create({ title: 'title', user: user.id, sunoId: 'string' });


        await logic.addFavSong(songCreate.id, user.id);


        const userWithFav = await User.findById(user.id);
        expect(userWithFav.favorites).to.include(songCreate.id);


        await logic.removeFavSong(songCreate.id, user.id);


        const userWithoutFav = await User.findById(user.id);
        expect(userWithoutFav.favorites).to.not.include(songCreate.id);
    });

    after(() => mongoose.disconnect());
});
