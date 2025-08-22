const { default: mongoose } = require("mongoose");

const MobileScheema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
    },
    model: {
        type:String,
        required: true,
        unique: true
    },
    price:{
        type:Number,
        required:true,
    }
},{timestamps:true})

const MobileModel = mongoose.models.Mobiles || mongoose.model("Mobiles", MobileScheema);
export default MobileModel;