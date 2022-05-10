const {Router} = require("express")
const Todo = require("../models/Movie")
const router = Router()

router.get('/', async (req,res) =>{
    
    res.render('index', {

        title: "Favori Filmlerim"
    });

})


module.exports = router