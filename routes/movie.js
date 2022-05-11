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
  
   
        console.log(req.body)  
        const {title,director,url} = req.body;
        const add = await movieController.add(title,director,url);
      
   
    
})


module.exports = router