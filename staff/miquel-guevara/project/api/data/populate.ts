import mongoose from "mongoose";

import { User, Song } from '.'

mongoose.connect('mongodb://localhost:27017/baffle')
    .then(() => User.deleteMany())
    .then(() => Song.deleteMany())
    .then(() => User.create({ name: 'Miky Seu', email: 'miky@seu.com', username: 'Miky', password: '123qwe123' }))
    .then(user =>
        Promise.all([

            Song.create({ author: user._id, image: 'https://cdn1.suno.ai/image_4815c59a-56ad-4870-92c2-8a4713d8da88.png', title: 'Marching to Success', songUrl: 'https://cdn1.suno.ai/4815c59a-56ad-4870-92c2-8a4713d8da88.mp3' }),
            Song.create({ author: user._id, image: 'https://cdn1.suno.ai/image_512ff9f2-3990-4005-b410-5f56a81eea45.png', title: 'afro-jazz verdean', songUrl: 'https://cdn1.suno.ai/512ff9f2-3990-4005-b410-5f56a81eea45.mp3' }),
            Song.create({ author: user._id, image: 'https://cdn1.suno.ai/image_fe2e6d06-1dd5-4458-8426-6cb742fce01c.png', title: 'ambient house 16-bit', songUrl: 'https://cdn1.suno.ai/fe2e6d06-1dd5-4458-8426-6cb742fce01c.mp3' }),
            Song.create({ author: user._id, image: 'https://cdn1.suno.ai/image_06221f5c-c70d-45c5-9e77-6c193e526e30.png', title: 'arabic reggae', songUrl: 'https://cdn1.suno.ai/06221f5c-c70d-45c5-9e77-6c193e526e30.mp3' }),
            Song.create({ author: user._id, image: 'https://cdn1.suno.ai/image_c83f7634-ccc0-4289-a923-3178de7f467f.png', title: 'rock', songUrl: 'https://cdn1.suno.ai/c83f7634-ccc0-4289-a923-3178de7f467f.mp3' }),
            Song.create({ author: user._id, image: 'https://cdn1.suno.ai/image_cc57128a-6514-44c2-8c48-3448378f3341.png', title: 'electro-jungle', songUrl: 'https://cdn1.suno.ai/cc57128a-6514-44c2-8c48-3448378f3341.mp3' }),
            Song.create({ author: user._id, image: 'https://cdn1.suno.ai/image_ca2ec564-c597-4675-adae-a19a06e23c1d.png', title: 'hindi southern rock', songUrl: 'https://cdn1.suno.ai/ca2ec564-c597-4675-adae-a19a06e23c1d.mp3' }),
            Song.create({ author: user._id, image: 'https://cdn1.suno.ai/image_605c2d39-f5ca-4408-897f-e706191a1f4e.png', title: 'portuguese breakbeat', songUrl: 'https://cdn1.suno.ai/605c2d39-f5ca-4408-897f-e706191a1f4e.mp3' }),
        ])

    )

    .then(() => mongoose.disconnect())
    .then(() => console.log('populated'))
    .catch(console.error)
