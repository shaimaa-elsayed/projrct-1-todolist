const {Schema,model}= require("mongoose")
const todoSchema = new Schema({
title: String,
isCompleted : Boolean   
    
    
})
const Todo = model ("todo",todoSchema)

model.exports= Todo;

console.log("CONNECTED");








