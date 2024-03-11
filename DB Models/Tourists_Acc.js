import { Schema,model } from "mongoose";
const Tourists_Acc = new Schema(
    {
name : {
    type : String,
    required: true,
},
username : {
    type : String,
    required: true,
},
password : {
    type : String,
    required: true,
},
country : {
    type : String,
    required: true,
},
gender : {
    type : String,
    required: true,
},
phone : {
    type : String,
    required: false,
},
image : {
    type : String,
    required: false,
    default:"Avatar.png"
},
}, { timestamps:true});
export default model('Tourists_Acc',Tourists_Acc);