import mongoose from "mongoose";

const studentSchema=mongoose.Schema(
    {
        fullname:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:
        {
            type:String,
            required:true
        },
        
    }
)
const Student = mongoose.model("students",studentSchema);

export default Student;