const mongoose=require('mongoose');

const CredentialsSchema=new mongoose.Schema({
    id:Number,
    name:String,
    email:String,
    role:String,
    password:String
})

const CredentialModel=mongoose.model("Credential",CredentialsSchema);
module.exports=CredentialModel;