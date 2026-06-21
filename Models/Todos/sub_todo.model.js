import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    complete:{
        type:Boolean,
        default:false
    },
    createdBy:{ // this is only in case when many user adding subtodos inside single todos
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})

export const SubTodo = mongoose.model("SubTodo",subTodoSchema)