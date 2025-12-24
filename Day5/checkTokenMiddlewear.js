let myToken = "12345"

let checkToken = (req, res, next) => {
    // no token given so response yahi se bhej diya --- aage nhi jaane diya
    if(req.query.token=="" || req.query.token==undefined) {
        // return hone ke baad next pe nhi jaa sakte
        return res.send(
            {
                status:0,
                msg:"Please Fill The Token"
            }
        )
    }
    // console.log("Welcome")
    // if(req.query.token!=myToken)
    // MYToken env file se process hoke aara hai
    if(req.query.token!=process.env.myToken) {
         return res.send(
            {
                status:0,
                msg:"Please Fill The Correct Token"
            }
        )
    }
    next();
}

module.exports={checkToken}