import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",// model ke ander jo schema ke saath naam dete hai vo hi naam hota hai ye
    },
    subTodos:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"SubTodo"
        }
    ]// array of sub todos
  },
  { timestamps: true },
);

export const Todo = mongoose.model("Todo", todoSchema);
