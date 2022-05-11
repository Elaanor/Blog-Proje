const {Schema, model}= require('mongoose')


const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    url:{
        type: String,
        required: true
    }
})


module.exports = model('Movie',  schema)