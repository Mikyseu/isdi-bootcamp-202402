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
            Song.create({ author: user._id, image: 'https://cdn1.suno.ai/image_98fac0ad-d18e-437e-b132-2247d7693886.png', title: 'korean pacific reggae', songUrl: 'https://cdn1.suno.ai/98fac0ad-d18e-437e-b132-2247d7693886.mp3' }),
            Song.create({ author: user._id, image: 'https://cdn1.suno.ai/image_dcb65390-4c26-42cb-8788-13eb2b7684a7.png', title: 'surf flamenco', songUrl: 'https://cdn1.suno.ai/dcb65390-4c26-42cb-8788-13eb2b7684a7.mp3' }),
            Song.create({ author: user._id, image: 'https://cdn1.suno.ai/image_977d1052-2e3f-460d-89da-6dd2f8c6758c.png', title: 'instrumental bluegrass', songUrl: 'https://cdn1.suno.ai/977d1052-2e3f-460d-89da-6dd2f8c6758c.mp3' }),
            Song.create({ author: user._id, image: 'https://cdn1.suno.ai/image_c5637ef5-c9d6-44ea-919b-1aa35bf1c18c.png', title: 'cajun griot', songUrl: 'https://cdn1.suno.ai/c5637ef5-c9d6-44ea-919b-1aa35bf1c18c.mp3' }),
            Song.create({ author: user._id, image: 'https://cdn1.suno.ai/image_a5472e36-b177-42e2-b67a-d2876cce9120.png', title: 'choral celtic', songUrl: 'https://cdn1.suno.ai/a5472e36-b177-42e2-b67a-d2876cce9120.mp3' }),
            Song.create({ author: user._id, image: 'https://cdn1.suno.ai/image_1cc1da66-1b48-4277-a658-28a77e13059d.png', title: 'dakar afro-cuban jazz', songUrl: 'https://cdn1.suno.ai/1cc1da66-1b48-4277-a658-28a77e13059d.mp3' }),
            Song.create({ author: user._id, image: 'https://cdn1.suno.ai/image_62fad402-04f1-4832-a6cd-6df2afa0a248.png', title: 'hypnagogic pacific reggae', songUrl: 'https://cdn1.suno.ai/62fad402-04f1-4832-a6cd-6df2afa0a248' }),
            Song.create({ author: user._id, image: 'https://cdn1.suno.ai/image_d06eb9d8-1a1c-4327-88f2-bc8e8bab7398.png', title: 'koto gnawa', songUrl: 'https://cdn1.suno.ai/d06eb9d8-1a1c-4327-88f2-bc8e8bab7398.mp3' }),
            Song.create({ author: user._id, image: 'https://cdn1.suno.ai/image_f51c748b-3e5f-4c38-b455-6e406cba29c0.png', title: 'new orleans grunge', songUrl: 'https://cdn1.suno.ai/f51c748b-3e5f-4c38-b455-6e406cba29c0.mp3' }),
            Song.create({ author: user._id, image: 'https://cdn1.suno.ai/image_e5f63e6b-3e3e-492d-b515-615962da15fa.png', title: 'prog avant-garde jazz', songUrl: 'https://cdn1.suno.ai/e5f63e6b-3e3e-492d-b515-615962da15fa.mp3' }),
            Song.create({ author: user._id, image: 'https://cdn1.suno.ai/image_94ef9440-4757-4ed6-8595-59f6c5b8adf8.png', title: 'dark goa trance', songUrl: 'https://cdn1.suno.ai/94ef9440-4757-4ed6-8595-59f6c5b8adf8.mp3' }),
            Song.create({ author: user._id, image: 'https://cdn1.suno.ai/image_d23550cc-fcf6-4868-8204-6f9616e09fd7.png', title: 'dreamy swing', songUrl: 'https://cdn1.suno.ai/d23550cc-fcf6-4868-8204-6f9616e09fd7.mp3' }),
            Song.create({ author: user._id, image: 'https://cdn1.suno.ai/image_e8d3fbb6-c427-47dc-9710-07b239504551.png', title: 'garage tango', songUrl: 'https://cdn1.suno.ai/e8d3fbb6-c427-47dc-9710-07b239504551.mp3' }),
            Song.create({ author: user._id, image: 'https://cdn1.suno.ai/image_9ad57e9d-fdc3-4b2a-a5db-6eced4889deb.png', title: 'grunge cumbia', songUrl: 'https://cdn1.suno.ai/9ad57e9d-fdc3-4b2a-a5db-6eced4889deb.mp3' }),
            Song.create({ author: user._id, image: 'https://cdn1.suno.ai/image_5a35c08a-578d-4b63-b836-626348d8b1bc.png', title: 'shoegaze psybient', songUrl: 'https://cdn1.suno.ai/5a35c08a-578d-4b63-b836-626348d8b1bc.mp3' }),
            Song.create({ author: user._id, image: 'https://cdn1.suno.ai/image_017b7138-880c-4179-8504-2b8231e43ef8.png', title: 'acoustic chicago blues algorave', songUrl: 'https://cdn1.suno.ai/017b7138-880c-4179-8504-2b8231e43ef8.mp3' }),
            Song.create({ author: user._id, image: 'https://cdn1.suno.ai/image_5eb780c9-646e-4c48-83d8-033a8a4c10c6.png', title: 'afro-funk', songUrl: 'https://cdn1.suno.ai/5eb780c9-646e-4c48-83d8-033a8a4c10c6.mp3' }),
            Song.create({ author: user._id, image: 'https://cdn1.suno.ai/image_877003d6-9daf-44d5-b8aa-8ca528ed4044.png', title: 'ambient dub techno', songUrl: 'https://cdn1.suno.ai/877003d6-9daf-44d5-b8aa-8ca528ed4044.mp3' }),
        ])

    )

    .then(() => mongoose.disconnect())
    .then(() => console.log('populated'))
    .catch(console.error)
