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

    async getById(id){
        const movie = await Movie.findById(id).lean()
        return movie
    }

    async delete(id){
        try {
            if (id == 'all') {
                await Movie.deleteOne({})
                return true
            }
            const result = await Movie.findByIdAndDelete(id)
            if (result == null) {
                return false
            }
            return true
        } catch (error) {
            return false
        }
    }

    async update(id, title, director, url) {
        try {
            const result = await Movie.findByIdAndUpdate(id, {title,director,url})
            if (!result) {
                return false
            }
            return true
        } catch (error) {
            return false
        }
    }
}

module.exports = PostController