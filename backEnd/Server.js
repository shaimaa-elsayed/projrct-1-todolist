const express =require ("express")
const app = express()
const Datebase  = require ("./Datebase")
app.get('/',(req,res)=>{
res.json('get/ is working')

})

app.listen(3000,()=>{

    console.log('serveris working')
})


/*nodemon Server.js*/