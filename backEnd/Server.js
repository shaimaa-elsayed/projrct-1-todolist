const express =require ("express")
const app = express();
const Datebase  = require ("./Datebase")
const Todo = require ("./Todo")
console.log(Todo);
app.use(express.json());

app.get("/",(req,res)=>{


    res.json("get is working");
});



app.get("/tasks",(req,res)=>{
    Todo.find({},(error,date)=>{
    if (err)
    {console.log("error::", err);
}else{
    res.json(date);

}
    })
})



app.post("/tasks",(req,res)=>{
    console.log("25",req.body);
Todo.creat(req.body,(err,newtask)=>{
if (err)
{console.log("error::", error);

}else{

res.status(201).json(newtask);
}
})
});


app.listen(3000,()=>{

    console.log('serveris working')
});


/*nodemon Server.js*/