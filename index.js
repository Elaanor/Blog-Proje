require("dotenv").config() 
const express = require("express")
const mongoose = require("mongoose")
const exphbs = require("express-handlebars")
const {PORT, MONGO_URL} = process.env
const router = require("./routes/movie")
const bodyParser = require("body-parser")




const app = express()


const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs',hbs.engine)
app.set('view engine','hbs')
app.set('views', 'views')

app.use(bodyParser.json())
app.use(router)
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))





const conn = MONGO_URL


async function start() {
    try {
        await mongoose.connect(conn,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, ()=> console.log("SERVER RUNNING ON http://localhost:" + PORT ))
    } catch (error) {
        console.log(error);
    }
}


start()
