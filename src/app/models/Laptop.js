const { default: mongoose } = require("mongoose");


const LaptopScheema = new mongoose.Schema({
    laptopName: {
        type: String,
        required: true,
    },
    laptopModel : {
        type:String,
        required:true,
        unique:true
    },
    laptopPrice:{
        type:Number,
        required: true

    }
},{timestamps:true})

const LaptopModel = mongoose.models.Laptops || mongoose.model("Laptops", LaptopScheema);
export default LaptopModel;