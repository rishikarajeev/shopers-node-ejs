const mongoose= require("mongoose"); //structure of document in mongodb
const shopSchema=new mongoose.Schema( 
    {
        name:{
            type:String,
            required:true
        },
        category:{
            type:String,
            required:true
        },
        price:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },

    }
);
module.exports=mongoose.model("shoperzSchema",shopSchema)