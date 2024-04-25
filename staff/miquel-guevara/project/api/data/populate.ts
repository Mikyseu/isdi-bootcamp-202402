import mongoose from "mongoose";

import { User, Song } from '.'

mongoose.connect('mongodb://localhost:27017/baffle')
    .then(() => User.deleteMany())
    .then(() => Song.deleteMany())
    .then(() => User.create({ name: 'Miky Seu', email: 'miky@seu.com', username: 'Miky', password: '123qwe123' }))
    .then(user => {

        const song = { author: user._id, image: 'https://cdn1.suno.ai/image_828deb0d-ddc5-4477-87ee-58219fa74584.png', title: 'Marching to Success', songUrl: 'https://audiopipe.suno.ai/?item_id=828deb0d-ddc5-4477-87ee-58219fa74584' }

        return Song.create(song)
    })

    .then(() => mongoose.disconnect())
    .then(() => console.log('populated'))
    .catch(console.error)
