let express = require("express") // call express

// initialize express
let app = express()
app.use(express.json())

// creating route with method
app.get("/", (req, res) => { // http://localhost:8000
    res.send({ status: 1, msg: "Home Page API" })
})

app.get('/news', (req, res) => {
    res.send({ status: 1, msg: "News API" })
})

// params
app.get("/news/:id",(req, res) => {
    let currenttId = req.params.id
    res.send("News Details API" + currenttId)
})

app.get('/products', (req, res) => {
    res.send({ status: 1, msg: "Products API" })
})

app.post("/login", (req, res) => {
    console.log(req.body) //object

    // status code 200 - correct, working
    res.status(200).json( {
        status:1, 
        msg:"Login API",
        bodyData: req.body,
        queryData:req.query
    })

    // res.send(
    //     { 
    //         status: 1, 
    //         msg: "Login API",
    //         bodyData: req.body,
    //         queryData: req.query
    //     })
})

app.listen(8000)
