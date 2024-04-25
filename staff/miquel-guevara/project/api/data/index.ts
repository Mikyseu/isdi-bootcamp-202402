import mongoose, { ObjectId } from 'mongoose'

const { Schema, model } = mongoose

const { Types: { ObjectId } } = Schema


type UserType = {
    name: string
    email: string
    username: string
    password: string
    avatar: string
}

const user = new Schema ({
    name: {
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true,
        unique: true
    },

    username: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
    },

    avatar: {
        type: String,
        
    }

})

type SongType = {
    author: ObjectId
    image: string
    title: string
    songUrl: string
}

const song = new Schema({
    author: {
        type: ObjectId,
        ref: 'User',
        required: true
    },

    image: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true
    },

    songUrl: {
        type: String,
        required: true
    }
})

const User = model<UserType>('User', user)
const Song = model<SongType>('Song', song)

export {
    UserType,
    User,
    SongType,
    Song
}

