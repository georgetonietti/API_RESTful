// config inicial
const express = require('express');
const app = express();
const mongoose = require('mongoose')
require('dotenv').config();

// forma de ler JSON / middlewares
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())


// rotas da api
const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes)

// rota inicial / endpoint
app.get('/', (req, res) => {

    // mostrar req
    
    res.json({ message: 'Oi Express!' })
})

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);

const apiMongoDB = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.tbqwre1.mongodb.net/?retryWrites=true&w=majority`


mongoose.connect(apiMongoDB)
.then(() => {
    console.log("Conectamos ao MongoDB!")
    // entregar uma porta
    app.listen(3000)
})
.catch((err) => console.log(err))



