import { schema, model } from "mongoose";

const todoschema = new schema({
title: string,
isCompleted :boolean   
    
    
})
const Todo = model ("Todo",todoschema)

model.exports= Todo;

console.log("CONNECTED");








