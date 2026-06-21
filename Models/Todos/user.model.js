import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:[true,"password is required"]
    }
},{
    timestamps:true // it add fields like createdAt , UpdatedAt
})

export const User = mongoose.model("User",userSchema)

// when it goes to database like mongodb - User --> users make capital and add s at end