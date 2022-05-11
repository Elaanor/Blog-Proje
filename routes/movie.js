const {Router} = require("express")
const router = Router()
const MovieController = require("../controllers/movieController")
const movieController = new MovieController()

router.get('/', async (req,res) =>{
    
    res.render('index', {
        movies: await movieController.getAll(),
        title: "Favori Filmlerim"
    });

})

router.post('/add', async (req,res) =>{

          try {
            const {title,director,url} = req.body
            const add = await movieController.add(title,director,url)
            if (add) {
                res.status(200).json({
                    message: "Film başarıyla eklendi",
                    data: add
                })
            } else {
                res.status(450).json({
                    message: "Film eklenemedi, false"
                })
            }
            
          } catch (error) {
              console.log(error.message)
              res.status(451).json({
                  message: "Film eklenemedi, exception"
              })
          }
    
})


module.exports = router