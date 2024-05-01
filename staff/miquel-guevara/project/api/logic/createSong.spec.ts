// @ts-nocheck

import dotenv from 'dotenv'

import mongoose from 'mongoose'
import logic from './index.ts'
import { expect, use } from 'chai'
import { errors } from 'com'
import chaiAsPromised from 'chai-as-promised'


dotenv.config()

use(chaiAsPromised)

const { Types: { ObjectId } } = mongoose

import { User, Song } from '../data/index.ts'

const { NotFoundError } = errors

describe('createSong', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))
    it('creates song with sunoId from existing user', () =>
        User.deleteMany()
            .then(() =>
                Song.deleteMany()
                    .then(() =>
                        User.create({ name: 'Miky Seu', email: 'miky@seu.com', username: 'Miky', password: '123qwe123', avatar: ' ' })
                            .then(user =>
                                logic.createSong(user._id.toString(), 'Echoes of Hanbok', '4b61aaa2-fb64-4cb2-ab03-4c02ecbad8bb')
                                    .then(() =>
                                        Song.findOne({ user: user._id.toString() })
                                            .then(song => {
                                                expect(song.user.toString()).to.equal(user._id.toString())
                                                expect(song.title).to.equal('Echoes of Hanbok')
                                                expect(song.sunoId).to.equal('4b61aaa2-fb64-4cb2-ab03-4c02ecbad8bb')
                                            })
                                    )
                            ))
            )
    )
})

