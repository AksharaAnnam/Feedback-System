const mongoose=require('mongoose');

const InfraAspectsSchema=new mongoose.Schema({
    question:String
})

const InfraAspectsModel=mongoose.model("InfraAspects",InfraAspectsSchema);
module.exports=InfraAspectsModel;