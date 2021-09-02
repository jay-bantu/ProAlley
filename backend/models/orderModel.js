import mongoose from 'mongoose'

const OrderSchema = mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        reqiuired: true,
        ref : 'User'
    },
    orderItems :[
        {
            name:{type : String, reqiuired: true},
            qty:{type : Number, reqiuired: true},
            image:{type : String, reqiuired: true},
            price:{type : Number, reqiuired: true},
            product:{type : mongoose.Schema.Types.ObjectId, ref: 'Product', reqiuired: true},
        }
    ],
    shippingAddress : {
        address:{type: String,reqiuired: true},
        city:{type: String,reqiuired: true},
        postalCode:{type: String,reqiuired: true},
        country:{type: String,reqiuired: true}
    },
    paymentMethod : {
        type: String,
        reqiuired: true
    },
    paymentResult : {
        id: {type: String},
        status: {type: String},
        update_time: {type: String},
        email_address: {type: String}
    },
    taxPrice : {
        type: Number,
        reqiuired: true,
        default : 0.0
    },
    shippingPrice : {
        type: Number,
        reqiuired: true,
        default : 0.0
    },
    totalPrice : {
        type: Number,
        reqiuired: true,
        default : 0.0
    },
    isPaid : {
        type: Boolean,
        reqiuired: true,
        default : false
    },
    paidAt : {
        type: Date
    },
    isDelivered : {
        type: Boolean,
        reqiuired: true,
        default : false
    },
    deliveredAt : {
        type: Date
    },
 
}, {
    timestamps: true
} )

const Order = mongoose.model('Order', OrderSchema)
export default Order