const Movie = require("../models/Movie")

class PostController {

    async add(title,director,url){
       try {
        await Movie.create({
            title,
            director,
            url
         })
         return true
       } catch (error) {
           console.log(error.message);
           return false
       }
    }

    async getAll(){
        const movies = await Movie.find().lean()
        return movies
    }

    async delete(id){
        const movie = await Movie.findByIdAndDelete(id)
        return movie
    }
}

module.exports = PostController