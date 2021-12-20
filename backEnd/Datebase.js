const mongoose   =  require("mongoose")
const DatebaseURI = "mongodb://localhost:27017/Todolistv01" 
 mongoose.connect(DatebaseURI)

const Datebase= mongoose.connection;


Datebase.on("connected",(err)=>{

    console.log("CONNECTED URI");
});

Datebase.on("error",(err)=>{

    console.log("ERROR IN MONGO ");

})


