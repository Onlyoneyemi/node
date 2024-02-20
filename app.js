// const log = require("./logger")

// log("Good morning.")
//console.log(logger)

// const path = require("path")

// const pathObj = path.parse(__filename)
// console.log(pathObj)

// const os = require("os")

// const totalMemory = os.totalmem()
// const freeMemory = os.freemem()

// console.log(`Total Memory: ${totalMemory}`)
// console.log(`Free Memory: ${freeMemory}`)

// const fs = require("fs")

// const files = fs.readdirSync("./")
// console.log(files)

// fs.readdir("./ ", (error, files) => {
//     if (error) {
//         console.log(`Error: ${error}`)
//     } else {
//         console.log(`Files: ${files}`)
//     }
// })

// const EventEmitter = require("events")

// const Logger = require("./logger")
// const logger = new Logger()

// //Listening for an event
// logger.on("messagelogged", (e) => {
//     console.log("Listener as called", e)
// })

// logger.log("message")

const http = require("http")

const server = http.createServer((request, response) => {
    if (request.url === "/") {
        response.write("Hello World")
        response.end()
    }

    if (request.url === "/api/courses") {
        response.write(JSON.stringify([1, 2,3]))
        response.end()
    }
})

server.listen(3000)

console.log("Listening on port 3000...")