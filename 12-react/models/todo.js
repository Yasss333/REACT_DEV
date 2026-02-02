import mongoose from "mongoose";

const TodoSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    }
    ,
    isRecorded :{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    updatedAt:{
        type:Date,
        default:Date.now
    }
})

export default mongoose.model.Todo || mongoose.model.('Todo', TodoSchema);