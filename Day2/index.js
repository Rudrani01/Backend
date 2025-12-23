let http = require("http")

let server = http.createServer((req, res) => {

    if(req.url=="/news") { // http://localhoast:8000/news
        let obj = {
            //key:
            status: 1,
            data:[
                {
                    newsTitle: 'ws',
                    newsDes: 'WS Hello',
                },
                {
                    newsTitle: 'IIP',
                    newsDes: 'IIP Hello',
                }
            ]
        }

        res.end(JSON.stringify(obj))
        return
    }

    if(req.url=="/about") {
        res.end("About page")
        return
    }

    if(req.url=="/course") {
        res.end("Course page")
        return
    }

    if(req.url=="/") {
        res.end("Welcome to ws")
        return
    }

})

server.listen(8000) // http://localhoast:8000
