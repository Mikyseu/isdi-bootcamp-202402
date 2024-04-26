// @ts-nocheck
import dotenv from 'dotenv'

import mongoose from 'mongoose'
import { User, Song } from '../data/index.ts'

import logic from './index.ts'
import { expect } from 'chai'
import { errors } from 'com'

dotenv.config()

const { Types: { ObjectId } } = mongoose
const { NotFoundError } = errors

const { DuplicityError, CredentialsError } = errors

describe('retrieveSongs', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    it('retrieves all songs for existing user', () =>
        Promise.all([
            User.deleteMany(),
            Song.deleteMany()
        ])
            .then(() =>
                User.create({ name: 'Miky Seu', email: 'miky@seu.com', password: '123qwe123' })
                    .then(user =>
                        Promise.all([
                            Song.create({ author: user._id, image: 'https://cdn1.suno.ai/image_4815c59a-56ad-4870-92c2-8a4713d8da88.png', title: 'Marching to Success', songUrl: 'https://cdn1.suno.ai/4815c59a-56ad-4870-92c2-8a4713d8da88.mp3' }),
                            Song.create({ author: user._id, image: 'https://cdn1.suno.ai/image_512ff9f2-3990-4005-b410-5f56a81eea45.png', title: 'afro-jazz verdean', songUrl: 'https://cdn1.suno.ai/512ff9f2-3990-4005-b410-5f56a81eea45.mp3' }),
                            Song.create({ author: user._id, image: 'https://cdn1.suno.ai/image_fe2e6d06-1dd5-4458-8426-6cb742fce01c.png', title: 'ambient house 16-bit', songUrl: 'https://cdn1.suno.ai/fe2e6d06-1dd5-4458-8426-6cb742fce01c.mp3' }),
                        ])
                            .then(([song1, song2, song3]) =>
                                logic.retrieveSongs(user.id)
                                    .then(songs => {
                                        expect(songs).to.have.lengthOf(3)

                                        expect(foundSong1.title).to.equal('Marching to Success')


                                        const foundSong2 = songs.find(song => song.title === song2.title)

                                        expect(foundSong2.title).to.equal('afro-jazz verdean')


                                        const foundSong3 = songs.find(song => song.title === song3.title)

                                        expect(foundSong3.title).to.equal('ambient house 16-bit')

                                    })
                            )
                    )
            )
    )

    // Test that checks if an empty array is returned when there are no songs for the user


    it('retrieves an empty array when there are no songs for the user', () =>
        Promise.all([
            User.deleteMany(),
            Song.deleteMany()
        ])
            .then(() =>
                User.create({ name: 'John Doe', email: 'john@doe.com', password: 'password' })
                    .then(user =>
                        logic.retrieveSongs(user.id)
                            .then(songs => {
                                expect(songs).to.have.lengthOf(0)
                            })
                    )
            )
    )

    after(() => mongoose.disconnect())
})