const mongoose=require('mongoose');

const CourseAspectsSchema=new mongoose.Schema({
    question:String
})

const CourseAspectsModel=mongoose.model("CourseAspects",CourseAspectsSchema);
module.exports=CourseAspectsModel;