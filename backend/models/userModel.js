import mongoose from 'mongoose'

const userSchema = mongoose.schema({
    name : {
        type: String,
        reqiuired: true,
    },
    email : {
        type: String,
        reqiuired: true,
        unique: true
    },
    password : {
        type: String,
        reqiuired: true,
    },
    isAdmin : {
        type: Boolean,
        reqiuired: true,
        default: false
    }
}, {
    timestamps: true
} )

const User = mongoose.model('User', userSchema)
export default User