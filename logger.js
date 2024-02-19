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
