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
                    message: "Film eklenemedi"
                })
            }
            
          } catch (error) {
              console.log(error.message)
              res.status(451).json({
                  message: "Film eklenemedi"
              })
          }
    
})

router.delete('/delete', async (req, res) => {
    const {id} = req.body
    try {
        const result = await movieController.delete(id)
        if (!result) {
            res.status(450).json({
                message: 'Film silinirken hata'
            })
        }
        res.status(200).json({
            message: 'Film silindi'
        })
    } catch (error) {
        res.status(450).json({
            message: 'Film silinirken hata',
            errorMessage: error.message
        })
    }
})


router.put('/update', async (req, res) => {
    const {id} = req.body
    console.log(id)
    res.end()
})


module.exports = router