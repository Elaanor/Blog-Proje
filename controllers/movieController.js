const Movie = require("../models/Movie")

class PostController {

    async add(title,director,url){
        await Movie.create({
           title,
           director,
           url
        })
    }

    async getAll(){
        const movies = await Movie.find().lean()
        return movies
    }
}

module.exports = PostController