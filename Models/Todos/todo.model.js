import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({ // schema is method which except an object
    content:{
        type:String,
        required:true,
    },
    complete:{
        type:Boolean,
        default:false // by default false hoga all subtodos complete hone ke baad true hoga
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User" // name should be same as mongoos.model("User",userSchema)
    },
    subTodos:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"SubTodo" // name should be same as mongoos.model("SubTodo",subTodoSchema)
        }
    ]
},{
    timestamps:true // createdAt , updatedAt
})

export const Todo = mongoose.model("Todo",todoSchema) // when store in db it become todos