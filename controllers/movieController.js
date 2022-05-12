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
        try {
            if (id == 'all') {
                await Movie.remove({})
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
}

module.exports = PostController