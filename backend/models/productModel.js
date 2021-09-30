import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema({

    name: {type: String, reqiuired: true},
    rating: {type: Number, reqiuired: true},
    comment : {type: String, reqiuired: true},
}, {
    timestamps: true
})

const productSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        reqiuired: true,
        ref: 'User'
    },
    name : {
        type: String,
        reqiuired: true,
    },
    image : {
        type: String,
        reqiuired: true
    },
    brand : {
        type: String,
        reqiuired: true,
    },
    category : {
        type: String,
        reqiuired: true 
    },
    description : {
        type: String,
        reqiuired: true 
    },
    category : {
        type: String,
        reqiuired: true 
    },
    rating: [reviewSchema],
    rating : {
        type: Number,
        reqiuired: true,
        default: 0
    },
    numReviews : {
        type: Number,
        reqiuired: true,
        default: 0 
    },
    price : {
        type: Number,
        reqiuired: true, 
        default: 0
    },
    countInStock : {
        type: Number,
        reqiuired: true, 
        default: 0
    },
   
}, {
    timestamps: true
} )

const Product = mongoose.model('Product', productSchema)
export default Product