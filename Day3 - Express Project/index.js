let express = require("express") // call express

// initialize express
let app = express()

// creating route with method
app.get("/", (req, res) => { // http://localhost:8000
    res.send({ status: 1, msg: "Home Page API" })
})

app.get('/news',(req, res) => {
    res.send({status:1, msg:"News API"})
})

app.listen(8000)
