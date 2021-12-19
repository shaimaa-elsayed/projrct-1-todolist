const express =require ("express")
const app = express()
const Datebase  = require ("./Datebase")
const Todo = require ("./todo")

app.get("/",(req,res)=>{


    res.json("get is working")
});

app.get("/tasks",(req,res)=>{
Todo.find({},(error,date)=>{
if (error)
{console.log("error::", error);

}else{


res.json(date);
}
})
});


app.listen(3000,()=>{

    console.log('serveris working')
})


/*nodemon Server.js*/