const {Schema, model}= require('mongoose')


const schema= new Schema({
    movieName: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    moviePoster:{
        type: String,
        required: true
    }
})


module.exports = model('Movie',  schema)