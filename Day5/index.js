let express = require("express") // call express
require("dotenv").config(); // call dotenv
const { checkToken } = require("./checkTokenMiddlewear")

// initialize express
let app = express()

// console.log(process.env.MYToken)

// inbuilt middleware
app.use(express.json())





// let myToken = "12345"
// let myPass = "12345"

// middleware has 3 parameter , instead of next can give anything 
// agar next tko satisfy kiya to wo bolega aage jaana hai ki nhi jaana hai
// if not correct it'll wait there only
// next is a type of call back function
// let checkToken = (req, res, next) => {
//     // no token given so response yahi se bhej diya --- aage nhi jaane diya
//     if(req.query.token=="" || req.query.token==undefined) {
//         // return hone ke baad next pe nhi jaa sakte
//         return res.send(
//             {
//                 status:0,
//                 msg:"Please Fill The Token"
//             }
//         )
//     }
//     // console.log("Welcome")
//     if(req.query.token!=myToken) {
//          return res.send(
//             {
//                 status:0,
//                 msg:"Please Fill The Correct Token"
//             }
//         )
//     }
//     next();
// }
// app.use(checkToken) // middleware

// app.use((req, res, next) => {
//      if(req.query.pass=="" || req.query.pass==undefined) {
//         // return hone ke baad next pe nhi jaa sakte
//         return res.send(
//             {
//                 status:0,
//                 msg:"Please Fill The Password"
//             }
//         )
//     }
//     // console.log("Welcome")
//     if(req.query.pass!=myPass) {
//          return res.send(
//             {
//                 status:0,
//                 msg:"Please Fill The Correct Password"
//             }
//         )
//     }
//     next();

// })


// creating route with method
app.get("/", (req, res) => { // http://localhost:8000
    res.send({ status: 1, msg: "Home Page API" })
})

app.get('/news', checkToken, (req, res) => {
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

// app.listen(8000)
app.listen(process.env.PORT || 5000)
