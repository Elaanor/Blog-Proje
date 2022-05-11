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
            const result = await Movie.findByIdAndDelete(id)
            if (result != null) {
                res.status(200).json({
                    message: 'Film silindi'
                })
            } else {
                res.status(450).json({
                    message: 'Film silinirken hata, false'
                })
            }
        } catch (error) {
            res.status(450).json({
                message: 'Film silinirken hata, exception'
            })
        }
    }
}

module.exports = PostController