const EventEmitter = require("events")

const url = "http://mylogger.io/log"

class Logger extends EventEmitter{
    log (message) {
        // Send an HTTP request
        console.log(message)

        //Raising an event
        this.emit("messagelogged", {id: 1, url: "http://"})
    }
}
  
module.exports = Logger


// const http = require("http")
// const server = http.createServer((request, response) => {
//     if (request.url === "/") {
//         response.write("Hello World")
//         response.end()
//     }

//     if (request.url === "/api/courses") {
//         response.write(JSON.stringify([1, 2, 3]))
//         response.end()
//     }
// })

// server.listen(3000)