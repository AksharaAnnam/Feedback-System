const mongoose=require('mongoose');

const TeacherSchema=new mongoose.Schema({
    id:Number,
    cid:String,
    section:Number
})

const TeacherModel=mongoose.model("Teacher",TeacherSchema);
module.exports=TeacherModel;