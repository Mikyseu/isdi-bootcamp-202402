// @ts-nocheck
import dotenv from 'dotenv'

import mongoose from 'mongoose'
import { User, Song } from '../data/index.ts'


import logic from './index.ts'
import { expect } from 'chai'
import { errors } from 'com'

dotenv.config()

const { DuplicityError, CredentialsError, NotFoundError } = errors

describe('addFavSong', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    it('adds fav song', () =>
        User.deleteMany()
            .then(() => User.create({ name: 'Miky Seu', email: 'miky@seu.com', username: 'Mikyseu', password: '123qwe123' }))
            .then(async user => {
                const songCreate = await Song.create({ title: 'title', user: user.id, sunoId: 'string' })

                return { songCreate, user }
            })
            .then(async song => {

                await logic.addFavSong(song.songCreate.id, song.user.id)
                return song.user
            })
            .then(user => {
                User.findById(user.id)
                    .then(user => {

                        expect(user.favorites.length).to.equal(1)
                    })

            })
    )
    after(() => mongoose.disconnect())
})