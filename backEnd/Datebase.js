const mongoose   =  require("mongoose")
const DatebaseURI = "mongodb://localhost:27017/todolistv01" 
 mongoose.connect(DatebaseURI)

const Datebase= mongoose.connection;


Datebase.on("connected",(error)=>{

    console.log("CONNECTED URI");
});

Datebase.on("error",(error)=>{

    console.log("ERROR IN MONGO ");

})


