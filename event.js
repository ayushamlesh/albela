//we can create,fire and listen for your own event.
        
        
          
//create event->file it->register in the event.      
const EventEmitter = require("events");
const event = new EventEmitter(); // object is created
        
        
          
event.on("saySomethingNew", () => {
        
        
          
    console.log("welcome to the new world");
        
        
          
});//register a listener
        
        
          
event.emit("saySomethingNew"); //raised an event// it has build in module, called "Events".
        
        
          
