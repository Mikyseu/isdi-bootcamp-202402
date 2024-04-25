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

describe('createSong' , () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    it('creates song with image and text from existing an user', () => 
        User.deleteMany()
            .then(() => 
                Song.deleteMany()
                    .then (() => 
                        User.create({ name: 'Miky Seu', email: 'miky@seu.com', username: 'Mikyseu', password: '123qwe123', avatar: ' ' })
                .then(user => 
                    logic.createSong(user.id, 'https://cdn1.suno.ai/image_4b61aaa2-fb64-4cb2-ab03-4c02ecbad8bb.png', 'Echoes of Hanbok', 'https://cdn1.suno.ai/4b61aaa2-fb64-4cb2-ab03-4c02ecbad8bb.mp3')
                    .then(() => 
                        Song.findOne({})
                            .then(song => {
                                expect(song.author.toString()).to.equal(user.id)
                                expect(song.image).to.equal('https://cdn1.suno.ai/image_4b61aaa2-fb64-4cb2-ab03-4c02ecbad8bb.png')
                                expect(song.text).to.equal('Echoes of Hanbok')
                                expect(song.song).to.equal('https://cdn1.suno.ai/4b61aaa2-fb64-4cb2-ab03-4c02ecbad8bb.mp3')
                            })
                        )
                ))
        )
    )
})

