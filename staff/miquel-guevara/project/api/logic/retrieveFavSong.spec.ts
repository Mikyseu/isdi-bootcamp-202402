// @ts-nocheck
import dotenv from 'dotenv';
import mongoose, { ObjectId } from 'mongoose';
import { User, Song } from '../data/index.ts';
import logic from './index.ts';
import { expect } from 'chai';
import { errors } from 'com';

dotenv.config();

const { DuplicityError, CredentialsError, NotFoundError } = errors;

describe('retrieveFavSongs', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL));

    it('succeeds on existing user and correct credentials', async () => {
        await User.deleteMany();

        const user = await User.create({ name: 'Miky Seu', email: 'miky@seu.com', username: 'Mikyseu', password: '123qwe123' });
        const songs = await logic.retrieveFavSongs(user.id);

        expect(songs).to.be.an('array');
        if (songs.length > 0) {
            expect(songs[0]).to.be.an('object');
            expect(songs[0].id).to.be.a('string');
        }
    });

    it('fails on non-existing user', async () => {
        await User.deleteMany();

        await User.create({ name: 'Miky Seu', email: 'miky@seu.com', username: 'Mikyseu', password: '123qwe123' });

        try {
            await logic.retrieveFavSongs(new ObjectId().toString());
            throw new Error('should not reach this point');
        } catch (error) {
            expect(error).to.be.instanceOf(NotFoundError);
            expect(error.message).to.equal('user not found');
        }
    });

    after(() => mongoose.disconnect());
});
